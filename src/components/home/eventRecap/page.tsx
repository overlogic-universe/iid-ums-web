import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import RecapCarousel from "./carousel";
import Image from "next/image";
import { ImageConstants } from "@/constants/image-constants";
import LazyBackground from "@/components/common/lazyBackground";

interface Props {}

const EventRecapSection: NextPage<Props> = () => {
  return (
    <div id="event-recap" className="md:container text-center flex-col section">
      <LazyBackground src={ImageConstants.bgEventRecap.src} className="bg-white min-h-[100px] section-box pb-10 bg-cover bg-center relative md:px-0 px-5">
        <h1 className="title-section" data-aos="fade-up">
          <span className="title-section-span text-center">{TextConstants.en.eventRecapTitle}</span>
        </h1>
        <RecapCarousel />
        <Image className="lg:w-38 md:w-32 w-[90px] md:-top-10 -top-14 -left-6 absolute" src={ImageConstants.cubeDecoration2} alt="cubeDecorationRecap22" data-aos="fade-right" />
      </LazyBackground>
    </div>
  );
};

export default EventRecapSection;
