import { NextPage } from "next";
import { Input } from "../../ui/input";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import { Button } from "../../ui/button";
import styles from "./styles.module.css";
import { fileUploadAction } from "@/lib/action/file-upload/file-upload-action";
import { useEffect, useState } from "react";

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
  color
}) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [newFileUrl, setNewFileUrl] = useState("");
  const [fileUploadColor, setFileUploadColor] = useState("main");

  useEffect(()=>{
    if(newFileUrl != "" || fileUrl !=""){
      setFileUploadColor("main")
    } else {
      setFileUploadColor(color)
    }
  },[])

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

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
      } catch(error){
      }finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full h-full relative flex items-center justify-center flex-col">
      <b className="py-5">{title}</b>
      <div
        className={`border-2 border-dashed border-${fileUploadColor}-400 file-upload-container top-0 p-5 w-full bg-${fileUploadColor}-100 flex items-center justify-center flex-col rounded-2xl`}
      >
        {fileUrl || newFileUrl != "" ? (contentType == "" ?
          <Image
            src={newFileUrl == "" ? fileUrl! : newFileUrl}
            alt="Student ID"
            className="rounded-lg  bg-cover"
            width={480}
            height={480}
          />: <embed src={newFileUrl == "" ? fileUrl : newFileUrl} className="rounded-lg no-scrollbar w-full"/>
        ) : (
          <div>
            <Image src={fileUploadColor == 'red' ? SvgConstants.cloudUploadIconDanger : SvgConstants.cloudUploadIcon} alt="Cloud Upload"/>
            <p>{fileUrl}</p>
            <div className={`w-1/2 text-center flex items-center justify-center flex-col ${fileUploadColor == 'red' ? 'text-red-500' : 'text-main-200'}`}>
              <p className={`text-3xl align-middle`}>
                Drag & Drop your files here
              </p>
              <p className={`text-4xl align-middle`}>or</p>
            </div>
          </div>
        )}
        <Input
          id="file-upload"
          accept={accept}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <Button
          onClick={() => {
            document.getElementById("file-upload")?.click();
          }}
          className={`m-5 rounded-2xl ${fileUploadColor == 'red'? 'bg-red-500': "bg-main-200"} hover:bg-${fileUploadColor}-300`}
        >
          Select Files
        </Button>
      </div>
      {loading ? (
        <div
          className={`${styles.fileUpload} file-upload-container top-5 w-full bg-${fileUploadColor}-100 flex items-center justify-center flex-col rounded-2xl absolute p-28`}
        >
          <div className={`relative w-full bg-${fileUploadColor}-200 text-white flex items-center justify-center`}>
            <div>
              <Image
                src={SvgConstants.fileOutlineIcon}
                alt="Cloud Upload"
                className="w-10 h-10"
              />
            </div>
            <div className="w-full">
              <div className="w-full">
                <div className="w-full flex items-center justify-between">
                  <p>{fileName}</p>
                  <p>{Math.round(progress)}%</p>
                </div>
                <div className="w-full">
                  <div className="w-full h-3 px-[1px] border-2 rounded-2xl">
                    <div
                      className={`h-2 bg-${fileUploadColor}-400 rounded-2xl delay-100 animate-in`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image src={SvgConstants.cancelOutlineIcon} alt="Cancel" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default FileUpload;
