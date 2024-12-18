import { ImageConstants } from "@/constants/image-constants";
import { SvgConstants } from "@/constants/svg-constants";
import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import Image from "next/image";
import HeaderCarousel from "./carousel";

interface Props {}

const HeaderSection: NextPage<Props> = ({}) => {
  return (
    <div id="home" className="mt-[80px] flex-col min-w-full items-center justify-center">
      <HeaderCarousel />
      <div className="bg-main-secondary section relative">
        <div className="section-box md:relative bg-white lg:pb-10 pb-5  pt-1 lg:px-10 px-5 bg-cover bg-center md:container" style={{ backgroundImage: `url(${ImageConstants.bgHeaderBox.src})` }}>
          <Image priority className="mx-auto mb-2" src={SvgConstants.logo} alt={TextConstants.en.headerTitle1} height={60} width={220}/>
          <Image className="lg:w-40 md:w-32 w-16 md:-bottom-10 bottom-0 lg:-right-20 md:-right-10 right-0 absolute z-10" src={ImageConstants.cubeDecoration} alt="cubeDecoration" data-aos="fade-left" />
          <h1 className="text-main-primary md:text-4xl text-2xl font-bold text-center mb-5 underline">
            {TextConstants.en.headerTitle1}
            <span className="bg-clip-text text-transparent bg-gradient-to-r title-section-span">{TextConstants.en.headerTitle2}</span>
            {TextConstants.en.headerTitle3}
          </h1>
          <p className="text-gray-700 md:text-xl text-sm font-light md:text-center text-justify lg:mx-6" data-aos="fade-up">
            {TextConstants.en.headerDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
