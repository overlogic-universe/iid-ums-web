import { ImageConstants } from "@/constants/image-constants";
import { TextConstants } from "@/constants/text-constants";
import Image from "next/image";

const InnovationTalkSection = () => {
  return (
    <div id="innovation-talk" className="flex flex-col lg:flex-row lg:pe-8 lg:mb-[65px] mb-5 justify-center items-center">
      <div className="relative justify-center items-center flex lg:w-1/2 w-full" data-aos="fade-right">
        <div className="absolute bottom-[-20px] lg:left-2/3 md:left-3/4 transform -translate-x-1/2 w-full">
          <div className="bg-blue-500 lg:rounded-ss-[160px] lg:rounded-ee-[160px] md:rounded-ss-[120px] md:rounded-ee-[120px] lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px]"></div>
        </div>
        <div className="relative lg:rounded-ss-[160px] lg:rounded-ee-[160px] rounded-ss-[120px] rounded-ee-[120px] overflow-hidden lg:h-[450px] lg:w-[450px] h-[350px] w-[350px] ">
          <Image src={ImageConstants.innovationTalk} alt="innovation talk" fill />
        </div>
      </div>
      <div className="flex-col justify-center items-center lg:w-1/2 w-full bg-white rounded-2xl md:p-8 p-5 ">
        <h1 className="title-section-span md:text-[2.8rem] text-3xl font-semibold leading-tight" data-aos="fade-up">{TextConstants.en.innovationTalkTitle}</h1>
        <p className="text-gray-700 mt-3 text-justify" data-aos="fade-up">
          <span className="font-bold">{TextConstants.en.innovationTalk}</span> {TextConstants.en.innovationTalkDesc}
        </p>
      </div>
    </div>
  );
};

export default InnovationTalkSection;
