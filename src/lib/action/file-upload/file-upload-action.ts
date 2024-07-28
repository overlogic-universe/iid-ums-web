const tus = require("tus-js-client");
import { TextConstants } from "@/constants/text-constants";
import { v4 } from "uuid";
const endpoint = `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co/storage/v1`

const fileUploadAction = async (
  bucketName: string,
  file: File,
  contentType: string,
  onProgress: (progress: number) => void,
  onSuccess: (filename: string, url: string) => void,
  onError: (error: string) => void,
) => {
  return new Promise<void>(async (resolve, reject) => {
    const fileName = `${v4()}.${file.name.split(".").pop()}`;
    const upload = new tus.Upload(file, {
      endpoint: `${endpoint}/upload/resumable`,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      uploadDataDuringCreation: true,
      removeFingerprintOnSuccess: true,
      metadata: {
        bucketName: bucketName,
        objectName: fileName,
        contentType: contentType == "" ? file.type : contentType,
        cacheControl: 3600,
      },
      chunkSize: 6 * 1024 * 1024,
      onError: function (error: string) {
        onError(TextConstants.en.uploadFileDescriptionError);
        reject(error);
      },
      onProgress: function (bytesUploaded: number, bytesTotal: number) {
        let percentage = ((bytesUploaded / bytesTotal) * 100);
        onProgress(percentage);
        console.log(bytesUploaded, bytesTotal, percentage + "%");
      },
      onSuccess: function () {
        onSuccess(fileName, `${endpoint}/object/public/${bucketName}/${fileName}`);
        resolve();
      },
    });
    

    const previousUploads = await upload.findPreviousUploads();
    if (previousUploads.length) {
      upload.resumeFromPreviousUpload(previousUploads[0]);
    }
    upload.start();
  });
};

export { fileUploadAction };
