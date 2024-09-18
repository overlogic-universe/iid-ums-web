import { Button } from "@/components/ui/button";
import { ImageConstants } from "@/constants/image-constants";
import { TextConstants } from "@/constants/text-constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const InnovationTalkSection = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  useEffect(() => {
    const countdownDate = new Date(process.env.NEXT_PUBLIC_COUNTDOWN_END_DATE || "").getTime();

    const updateCountdown = () => {
      const now = new Date();
      const localTimeOffset = now.getTimezoneOffset() * 60000;
      const indonesiaTimeOffset = 7 * 60 * 60000;
      const localTime = now.getTime() + localTimeOffset;
      const indonesiaTime = localTime + indonesiaTimeOffset;

      const distance = countdownDate - indonesiaTime;

      if (distance <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeRemaining({ days, hours, minutes });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="innovation-talk"
      className="lg:container flex flex-col lg:flex-row lg:pe-8 md:mt-0 mt-12 justify-center items-center"
    >
      <div
        className="relative justify-center items-center flex lg:w-1/2 w-full lg:pe-5"
        data-aos="fade-right"
      >
        <div className="absolute bottom-[-20px] lg:left-2/3 md:left-3/4 transform -translate-x-1/2 w-full">
          <div className="bg-blue-500 lg:rounded-ss-[160px] lg:rounded-ee-[160px] md:rounded-ss-[120px] md:rounded-ee-[120px] lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px]"></div>
        </div>
        <div className="md:px-0 mx-5 relative lg:rounded-ss-[160px] lg:rounded-ee-[160px] rounded-ss-[120px] rounded-ee-[120px] overflow-hidden lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px] h-[300px] w-[300px]">
          <Image
            src={ImageConstants.innovationTalk}
            alt="innovation talk"
            fill
          />
        </div>
      </div>
      <div className="flex-col justify-center items-center lg:w-1/2 w-full bg-white rounded-2xl md:p-8 p-5 ">
        <h1
          className="title-section-span md:text-[2.8rem] text-3xl font-semibold leading-tight"
          data-aos="fade-up"
        >
          {TextConstants.en.innovationTalkTitle}
        </h1>
        <p
          className="text-gray-700 mt-3 text-justify md:text-base text-sm"
          data-aos="fade-up"
        >
          <span className="font-bold">{TextConstants.en.innovationTalk}</span>{" "}
          {TextConstants.en.innovationTalkDesc}
        </p>
        {timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 ? (
            <div></div>
          ) : (
            <div className="flex flex-row gap-5 items-center">
              <Link
                className="pt-3"
                href="/registration-innovation-talk"
                target="_blank"
                passHref
                data-aos="fade"
              >
                <Button className="rounded-2xl w-full h-12 text-base bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 transition-all duration-300 blue-shadow ">
                  {TextConstants.en.registration} Innovation Talk
                </Button>
              </Link>
              <div className="h-12 flex items-center justify-center">
                <p className="text-center mt-2">BNI: 1862000886 (Salwa Yumna Muthi'ah)</p>
              </div>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default InnovationTalkSection;
