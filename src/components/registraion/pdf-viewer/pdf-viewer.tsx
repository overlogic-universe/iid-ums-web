import { NextPage } from "next";

import styles from "./styles.module.css";

interface Props {
  onChange: () => void;
  setNewFileUrl: () => void;
  file?: string;
}

const PdfViewer: NextPage<Props> = ({ onChange, setNewFileUrl, file }) => {
  return (
    <div className="relative !w-full !h-full">
      <object
        style={{ maxHeight: "unset" }}
        data={`${file}#toolbar=0&view=fitH&page=1`}
        type="application/pdf"
        className={`${styles.noScrollbar} rounded-lg no-scrollbar h-[340px] text-center w-full absolute overflow-hidden flex items-center justify-center flex-col`}
      >
        <div className="w-full h-full z-20 bg-main-300 text-white absolute flex items-center justify-center cursor-pointer">
          <p>
            Cannot preview PDF file because your web browser doesn&apos;t have a PDF
            plugin.{" "}
            <span>
              <a className="underline" href={file} target="_blank">
                Click to preview
              </a>
              <p
                className="text-red-500 underline"
                onClick={() => {
                  onChange();
                  setNewFileUrl();
                }}
              >
                Remove
              </p>
            </span>
          </p>
        </div>
      </object>
      <div
        className={`absolute cursor-pointer rounded-lg hover:bg-main-300 hover:bg-opacity-25 w-full h-full`}
        id="wrapper"
      >
        <div
          className="items-center justify-center w-full h-full flex text-transparent hover:text-white"
          onClick={() => {
            onChange();
            setNewFileUrl();
          }}
        >
          <p className="">Click to remove</p>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
