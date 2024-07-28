import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import RecapCarousel from "./carousel";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";

interface Props {}

const EventRecapSection: NextPage<Props> = ({}) => {
  return (
    <div className="text-center flex-col min-w-screen">
      <h1 className="title-section" data-aos="fade-up">
        <span className="title-section-span text-center">{TextConstants.en.eventRecap}</span>
      </h1>
      <div className="bg-main-secondary" style={{ padding: "20px 0px 40px 0px" }} data-aos="fade-up">
        <RecapCarousel />
        <Image className="lg:w-48 md:w-32 w-16 -bottom-24 left-0 absolute" src={SvgConstants.cubeDecoration2} alt="cubeDecorationRecap2" data-aos="fade-right"/>
        <Image className="lg:w-48 md:w-32 w-16 -top-28 right-0 absolute" src={SvgConstants.cubeDecoration2} alt="cubeDecorationRecap22" data-aos="fade-left"/>
      </div>
    </div>
  );
};

export default EventRecapSection;
