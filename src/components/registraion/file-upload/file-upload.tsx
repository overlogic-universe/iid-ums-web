import { NextPage } from "next";
import { Input } from "../../ui/input";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import { Button } from "../../ui/button";
import { fileUploadAction } from "@/lib/action/file-upload/file-upload-action";
import { useEffect, useState } from "react";
import { TextConstants } from "@/constants/text-constants";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";

interface Props {
  title: string;
  accept: string;
  bucket: string;
  contentType: string;
  onChange: (url: string) => void;
  imageUrl?: string;
  fileUrl?: string;
  color: string;
}

const FileUpload: NextPage<Props> = ({
  title,
  accept,
  bucket,
  contentType,
  onChange,
  fileUrl,
  color,
}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [newFileUrl, setNewFileUrl] = useState("");
  const [fileUploadColor, setFileUploadColor] = useState("main");
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (newFileUrl != "") {
      setFileUploadColor("main");
    } else {
      setFileUploadColor(color);
    }
  }, [color]);

  useEffect(() => {
    if (fileUrl) setNewFileUrl(fileUrl);
  }, []);

  const handleFileChange = async (files: File) => {
    const file = files;

    if (file) {
      try {
        setLoading(true);
        setFileName(file.name);
        await fileUploadAction(
          bucket,
          file,
          contentType,
          (percentComplete: number) => {
            setProgress(percentComplete);
          },
          (filename: string, url: string) => {
            setFileName(filename);
            setNewFileUrl(url);
            onChange(url);
          },
          (error: string) => {
            console.log(error);
          }
        );
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files[0];
    const types =
      contentType == ""
        ? ["image/jpg", "image/jpeg", "image/png"]
        : [contentType];
    for (let i = 0; i < types.length; i++) {
      if (files.type.includes(types[i])) {
        handleFileChange(files);
        break;
      }
    }
    toast({
      title: TextConstants.en.unsupportFileTypeTitleError,
      description: TextConstants.en.unsupportFileTypeDescriptionError,
      variant: "destructive",
      action: (
        <ToastAction altText="Close">{TextConstants.en.close}</ToastAction>
      ),
    });
  };

  return (
    <div className="w-full relative flex items-center justify-center flex-col">
      <b className="py-5">{title}</b>
      {!loading ? (
        <div
          className={`border-2 border-dashed border-${fileUploadColor}-400 file-upload-container top-0 p-5 w-full bg-${fileUploadColor}-100 flex items-center justify-center flex-col rounded-2xl h-[380px] z-10`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {newFileUrl != "" ? (
            contentType == "" ? (
              <div className="relative w-full h-full">
                <Image
                  src={newFileUrl == "" ? fileUrl! : newFileUrl}
                  alt="Student ID"
                  className="rounded-lg h-full w-full hover absolute object-cover"
                  width={1080}
                  height={1080}
                />
                <div
                  className={`absolute rounded-lg hover:bg-main-300 hover:bg-opacity-25 w-full h-full`}
                >
                  <div
                    className="items-center justify-center w-full h-full flex text-transparent hover:text-white"
                    onClick={() => {
                      onChange("");
                      setNewFileUrl("");
                    }}
                  >
                    <p className="">Click to remove</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full">
                <embed
                  src={newFileUrl == "" ? fileUrl : newFileUrl}
                  className="rounded-lg no-scrollbar w-full h-full absolute"
                />
                <div
                  className={`absolute rounded-lg hover:bg-main-300 hover:bg-opacity-25 w-full h-full`}
                >
                  <div
                    className="items-center justify-center w-full h-full flex text-transparent hover:text-white"
                    onClick={() => {
                      onChange("");
                      setNewFileUrl("");
                    }}
                  >
                    <p className="">Click to remove</p>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div className="w-full flex items-center justify-center flex-col">
              <Image
                src={
                  fileUploadColor == "red"
                    ? SvgConstants.cloudUploadIconDanger
                    : SvgConstants.cloudUploadIcon
                }
                alt="Cloud Upload"
              />
              <div
                className={`w-1/2 text-center flex items-center justify-center flex-col ${
                  fileUploadColor == "red" ? "text-red-500" : "text-main-200"
                }`}
              >
                <p className={`text-3xl align-middle`}>
                  Drag & Drop your files here
                </p>
                <p className={`text-4xl align-middle`}>or</p>
              </div>
              <Input
                id="file"
                accept={accept}
                type="file"
                onChange={(e) => handleFileChange(e.target.files![0])}
                className="hidden"
              />
              <Button
                type="button"
                onClick={() => {
                  document.getElementById("file")?.click();
                }}
                className={`m-5 rounded-2xl ${
                  fileUploadColor == "red" ? "bg-red-500" : "bg-main-200"
                } hover:bg-${fileUploadColor}-300`}
              >
                Select Files
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`w-full h-[380px] border-2 border-dashed border-${fileUploadColor}-400 bg-main-100 flex items-center justify-center flex-col rounded-2xl p-28 border-2`}
        >
          <div
            className={`relative w-full rounded-2xl p-5 bg-main-200 text-white flex items-center justify-center`}
          >
            <div>
              <Image
                src={SvgConstants.fileOutlineIcon}
                alt="Cloud Upload"
                className="w-10 h-10"
              />
            </div>
            <div className="w-full">
              <div className="w-full px-2">
                <div className="w-full flex items-center justify-between">
                  <p>{fileName}</p>
                  <p>{Math.round(progress)}%</p>
                </div>
                <div className="w-full">
                  <div className="w-full h-2 px-[0.5px] border-2 rounded-2xl">
                    <div
                      className={`h-1 bg-main rounded-2xl delay-100 animate-in`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                onClick={() => {}}
                src={SvgConstants.cancelOutlineIcon}
                alt="Cancel"
              />
            </div>
          </div>
        </div>
      )}
      {isDragging ? (
        <div className="h-screen w-screen bg-black bg-opacity-40 absolute z-0" />
      ) : null}
    </div>
  );
};

export default FileUpload;