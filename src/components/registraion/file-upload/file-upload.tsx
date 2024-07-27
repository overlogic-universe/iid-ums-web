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
}

const FileUpload: NextPage<Props> = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLoading(true);
      setFileName(file.name);
      await fileUploadAction(
        "abstract_bucket",
        file,
        (percentComplete: number) => {
          setProgress(percentComplete);
        }
      );
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full relative flex items-center justify-center flex-col">
      <b className="py-5">{title}</b>
      <div
        className={`${styles.fileUpload} file-upload-container top-5 w-full bg-main-100 flex items-center justify-center flex-col rounded-2xl absolute`}
      >
        <Image src={SvgConstants.cloudUploadIcon} alt="Cloud Upload" />
        <div className="w-1/2 text-center flex items-center justify-center flex-col">
          <p className="text-3xl align-middle text-main-200">
            Drag & Drop your files here
          </p>
          <p className="text-4xl align-middle text-main-200">or</p>
          <Input type="file" onChange={handleFileChange} />
          <Button className="m-5 rounded-2xl bg-main-200 hover:bg-main-300">
            Select Files
          </Button>
        </div>
      </div>
      {loading ? (
        <div
          className={`${styles.fileUpload} file-upload-container top-5 w-full bg-main-100 flex items-center justify-center flex-col rounded-2xl absolute p-28`}
        >
          <div className="relative w-full bg-main-200 text-white flex items-center justify-center">
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
                      className="h-2 bg-main rounded-2xl delay-100 animate-in"
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
