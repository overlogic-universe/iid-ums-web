import { NextPage } from "next";

import styles from "./styles.module.css";
import RemoveButton from "../common/remove-button";
import { TextConstants } from "@/constants/text-constants";

interface Props {
  onChange: () => void;
  setNewFileUrl: () => void;
  file?: string;
}

const PdfViewer: NextPage<Props> = ({ onChange, setNewFileUrl, file }) => {
  const handleClick = () => {
    onChange();
    setNewFileUrl();
  };
  return (
    <div className="relative !w-full !h-full">
      <object style={{ maxHeight: "unset" }} data={`${file}#toolbar=0&view=fitH&page=1`} type="application/pdf" className={`${styles.noScrollbar} rounded-lg no-scrollbar h-[340px] text-center w-full absolute overflow-hidden flex items-center justify-center flex-col`}>
        <div className="w-full h-full z-20 bg-main-300 text-white absolute flex items-center justify-center cursor-pointer flex-col">
          <p>
            {TextConstants.en.cantPreview}
            <span>
              <a className="underline" href={file} target="_blank">{TextConstants.en.clickToPreview}</a>
            </span>
          </p>
          <p className="text-red-500 underline" onClick={handleClick}>{TextConstants.en.remove}</p>
        </div>
      </object>
      <RemoveButton onClick={handleClick} />
    </div>
  );
};

export default PdfViewer;
