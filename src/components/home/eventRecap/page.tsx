import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import RecapCarousel from "./carousel";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";

interface Props {}

const EventRecapSection: NextPage<Props> = ({}) => {
  return (
    <div id="event-recap" className=" text-center flex-col section">
      <div className="bg-white section-box pb-10 bg-cover bg-center relative shadow-lg " style={{ backgroundImage: `url(${SvgConstants.registerFormBackground.src})`, border: "1px solid #e0e8ff" }} data-aos="fade-up">
        <h1 className="title-section" data-aos="fade-up">
          <span className="title-section-span text-center">{TextConstants.en.eventRecap}</span>
        </h1>
        <RecapCarousel />
        <Image className="lg:w-38 md:w-32 w-16 md:-bottom-24 -bottom-10 md:-right-10 -right-4 absolute" src={SvgConstants.cubeDecoration2} alt="cubeDecorationRecap2" data-aos="fade-left" />
        <Image className="lg:w-38 md:w-32 w-16 md:-top-10 -top-5 -left-6 absolute" src={SvgConstants.cubeDecoration2} alt="cubeDecorationRecap22" data-aos="fade-right" />
      </div>
    </div>
  );
};

export default EventRecapSection;
