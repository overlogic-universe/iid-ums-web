import LazyBackground from "@/components/common/lazyBackground";
import { Button } from "@/components/ui/button";
import { IconConstants } from "@/constants/icon-constants";
import { ImageConstants } from "@/constants/image-constants";
import { SvgConstants } from "@/constants/svg-constants";
import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const CompetitionRegistrationSection: NextPage<Props> = ({}) => {
  return (
    <div id="competition-registration" className="section bg-main-secondary">
      <div className="flex section-box overflow-hidden shadow-lg registration-box" data-aos="fade-up">
        <LazyBackground className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center px-16 py-6 bg-blue-600 h-full text-white" src={ImageConstants.bgEventRegistration.src}>
          <div className="rounded-2xl px-5 py-2 md:mx-10 bg-white lg:flex items-center justify-center text-center">
            <Image className="mx-auto" src={SvgConstants.logo} alt={TextConstants.en.registration} height={70} />
          </div>
          <p className="font-bold mt-8 mb-4 flex justify-center items-center">
            <span className="me-2">
              <Image src={IconConstants.countDown} alt="count-down-icon" height={18} />
            </span>
            Cooming Soon
          </p>
          <div className="rounded-2xl px-5 md:mx-10 flex items-center justify-center text-center text-white">
            <div className="flex flex-col items-center mx-2 bg-white text-main-primary px-4 py-3 rounded-2xl">
              <span className="md:text-5xl text-3xl">00</span>
              <span className="md:text-md text-sm">Days</span>
            </div>
            <span className="md:text-5xl text-3xl mx-2">:</span>
            <div className="flex flex-col items-center mx-2 bg-white text-main-primary px-4 py-3 rounded-2xl">
              <span className="md:text-5xl text-3xl">00</span>
              <span className="md:text-md text-sm">Hours</span>
            </div>
            <span className="md:text-5xl text-3xl mx-2">:</span>
            <div className="flex flex-col items-center mx-2 bg-white text-main-primary px-4 py-3 rounded-2xl">
              <span className="md:text-5xl text-3xl">00</span>
              <span className="md:text-md text-sm">Minutes</span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-4 md:mt-14 mt-12 ">
            <Link href="/registration" passHref>
              <Button className="bg-white hover:translate-y-[-4px] mx-auto text-main-primary text-lg p-7 rounded-2xl transition-all duration-300 white-shadow hover:bg-white">{TextConstants.en.registerNow}</Button>
            </Link>
            <Link href="/" passHref>
              <Button className="bg-white hover:translate-y-[-4px] mx-auto text-main-primary text-lg p-7 rounded-2xl transition-all duration-300 white-shadow hover:bg-white">GUIDEBOOK</Button>
            </Link>
          </div>
        </LazyBackground>

        <LazyBackground className="hidden bg-main-secondary lg:w-1/2 w-full p-4 h-full bg-cover bg-center lg:flex items-center justify-center text-center" src={ImageConstants.bgEventRegistration2.src}>
          <h1 className="text-4xl m-10 font-bold bg-clip-text text-transparent bg-gradient-to-r to-[#121251]  from-[#2828B7]" data-aos="fade-up">
            {TextConstants.en.eventRegistrationTitle}
          </h1>
        </LazyBackground>
      </div>
    </div>
  );
};

export default CompetitionRegistrationSection;
