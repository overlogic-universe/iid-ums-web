const tus = require("tus-js-client");
import { v4 } from "uuid";

const fileUploadAction = async (
  bucketName: string,
  file: File,
  onProgress: (progress: number) => void
) => {
  return new Promise<void>(async (resolve, reject) => {
    const fileName = `${v4()}.${file.name.split(".").pop()}`;
    const upload = new tus.Upload(file, {
      endpoint: `https://${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co/storage/v1/upload/resumable`,
      retryDelays: [0, 3000, 5000, 10000, 20000],
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      uploadDataDuringCreation: true,
      removeFingerprintOnSuccess: true,
      metadata: {
        bucketName: bucketName,
        objectName: fileName,
        contentType: "application/pdf",
        cacheControl: 3600,
      },
      chunkSize: 6 * 1024 * 1024,
      onError: function (error: string) {
        console.log("Failed because: " + error);
        reject(error);
      },
      onProgress: function (bytesUploaded: number, bytesTotal: number) {
        let percentage = ((bytesUploaded / bytesTotal) * 100);
        onProgress(percentage);
        console.log(bytesUploaded, bytesTotal, percentage + "%");
      },
      onSuccess: function () {
        console.log("Download %s from %s", upload.file, upload);
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
