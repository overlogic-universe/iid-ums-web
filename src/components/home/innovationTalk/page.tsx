import { ImageConstants } from "@/constants/image-constants";
import Image from "next/image";

const InnovationTalkSection = () => {
  return (
    <div id="innovation-talk" className="flex md:flex-col lg:flex-row lg:pe-8 lg:mb-[65px] mb-5 justify-center items-center">
      <div className="relative justify-center items-center md:flex hidden lg:w-1/2 md:w-full ">
        <div className="absolute bottom-[-20px] lg:left-2/3 md:left-3/4 transform -translate-x-1/2 w-full">
          <div className="bg-[#00A2FF] lg:rounded-ss-[160px] lg:rounded-ee-[160px] md:rounded-ss-[120px] md:rounded-ee-[120px] lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px]"></div>
        </div>
        <div className="relative lg:rounded-ss-[160px] lg:rounded-ee-[160px] md:rounded-ss-[120px] md:rounded-ee-[120px] overflow-hidden lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px] ">
          <Image src={ImageConstants.innovationTalk} alt="innovation talk" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="flex-col justify-center items-center lg:w-1/2 w-full bg-white rounded-2xl md:p-8 p-5 ">
        <h1 className="title-section-span md:text-[2.8rem] text-3xl font-semibold leading-tight">Join Our Innovation Talk and Be Part of the Future!</h1>
        <p className="text-gray-700 mt-3 text-justify">
         <span className="font-bold">Innovation Talk</span>  is a must-attend session featuring experienced speakers who will discuss "Tips to Become an Inventor and Innovator and Socialization of International Competition Schedules," "Becoming a Global Student," and "Becoming an Outstanding
          Student." This session is designed to inspire and empower students with the practical knowledge and skills needed to create sustainable solutions and achieve success on the international stage. Join us and be part of the positive
          change for a better future!
        </p>
      </div>
    </div>
  );
};

export default InnovationTalkSection;
