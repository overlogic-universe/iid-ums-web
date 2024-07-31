import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import RecapCarousel from "./carousel";
import Image from "next/image";
import { SvgConstants } from "@/constants/svg-constants";
import { ImageConstants } from "@/constants/image-constants";

interface Props {}

const EventRecapSection: NextPage<Props> = ({}) => {
  return (
    <div id="event-recap" className=" text-center flex-col section">
      <div className="bg-white section-box pb-10 bg-cover bg-center relative md:px-0 px-5" style={{ backgroundImage: `url(${ImageConstants.bgEventRecap.src})`, border: "1px solid #e0e8ff" }} >
        <h1 className="title-section" data-aos="fade-up">
          <span className="title-section-span text-center">{TextConstants.en.eventRecap}</span>
        </h1>
        <RecapCarousel />
        <Image className="lg:w-38 md:w-32 w-[90px] md:-top-10 -top-14 -left-6 absolute" src={ImageConstants.cubeDecoration2} alt="cubeDecorationRecap22" data-aos="fade-right" />
      </div>
    </div>
  );
};

export default EventRecapSection;
