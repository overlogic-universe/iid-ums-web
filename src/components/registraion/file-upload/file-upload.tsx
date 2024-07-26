import { NextPage } from "next";
import { Input } from "../../ui/input";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import { Button } from "../../ui/button";
import styles from './styles.module.css'

interface Props {}

const FileUpload: NextPage<Props> = ({}) => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col pt-10">
      <b>Abstract of Invention</b>
      <div className={`${styles.fileUpload} file-upload-container h-auto w-full bg-main-100 flex items-center justify-center flex-col rounded-2xl`}>
        {/* <Input type="file"/> */}
        <Image src={SvgConstants.cloudUploadIcon} alt="Cloud Upload"/>
        <p className="text-3xl">Drag & Drop your files here or</p>
        <Button className="m-5 rounded-2xl bg-main-300">Select Files</Button>
      </div>
    </div>
  );
};

export default FileUpload;
