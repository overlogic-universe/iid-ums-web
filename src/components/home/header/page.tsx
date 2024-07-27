import { SvgConstants } from "@/constants/svg-constants";
import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const HeaderSection: NextPage<Props> = ({}) => {
  return (
    <div className="flex-col min-w-full items-center justify-center">
      <Image className="w-full" src={SvgConstants.headerImage} alt={TextConstants.en.header} />
      <div className="bg-main-secondary section relative">
        <div className="w-full rounded-2xl bg-white  lg:p-10 p-5">
          <Image className="lg:w-40 md:w-32 w-16 bottom-0 right-0 absolute" src={SvgConstants.cubeDecoration} alt="cubeDecoration" />
          <h1 className="text-main-primary md:text-4xl text-2xl font-bold text-center underline mb-5">
            {TextConstants.en.headerTitle1}
            <span className="bg-clip-text text-transparent bg-gradient-to-r to-main-primary  from-main-primary via-[#6EACDA]">{TextConstants.en.headerTitle2}</span>
            {TextConstants.en.headerTitle3}
          </h1>
          <p className="md:text-2xl text-md font-semi text-center">{TextConstants.en.headerDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
