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
        <div className="section-box bg-white lg:pb-10 pb-5  pt-1 lg:px-10 px-5 bg-cover bg-center" style={{ backgroundImage: `url(${SvgConstants.headerBoxDecoration.src})` }}>
        <Image className="mx-auto mb-2" src={SvgConstants.logo} alt={TextConstants.en.headerTitle1} height={60} />
          <Image className="lg:w-40 md:w-32 w-16 bottom-0 right-0 absolute" src={SvgConstants.cubeDecoration} alt="cubeDecoration" data-aos="fade-left"/>
          <h1 className="text-main-primary md:text-4xl text-2xl font-bold text-center underline mb-5">
            {TextConstants.en.headerTitle1}
            <span className="bg-clip-text text-transparent bg-gradient-to-r to-main-primary  from-main-primary via-[#6EACDA]">{TextConstants.en.headerTitle2}</span>
            {TextConstants.en.headerTitle3}
          </h1>
          <p className="md:text-2xl text-md font-semi text-center" data-aos="fade-up">{TextConstants.en.headerDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
