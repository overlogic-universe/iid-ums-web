import { useState, useEffect } from "react";
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
    <div id="competition-registration" className=" bg-main-secondary">
      <div className="md:container section">
        <div className="flex section-box overflow-hidden shadow-lg registration-box" data-aos="fade-up">
          <LazyBackground className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center px-16 py-6 bg-blue-600 h-full text-white" src={ImageConstants.bgEventRegistration.src}>
            <div className="rounded-2xl px-5 py-2 md:mx-10 bg-white lg:flex items-center justify-center text-center">
              <Image className="mx-auto" src={SvgConstants.logo} alt={TextConstants.en.registration} height={70} />
            </div>
            <p className="font-bold mt-4 mb-2 flex text-xl justify-center items-center">Batch 1</p>
            <p className="font-bold  mb-4 flex justify-center items-center">
              <span className="me-2">
                <Image src={IconConstants.countDown} alt="count-down-icon" height={18} />
              </span>
              15 september 2024
            </p>
            <div className="rounded-2xl px-5 md:mx-10 flex items-center justify-center text-center text-white">
              <div className="flex flex-col items-center mx-2 bg-white text-main-primary px-4 py-3 rounded-2xl">
                <span className="md:text-5xl text-3xl">{String(timeRemaining.days).padStart(2, "0")}</span>
                <span className="md:text-md text-sm">Days</span>
              </div>
              <span className="md:text-5xl text-3xl mx-2">:</span>
              <div className="flex flex-col items-center mx-2 bg-white text-main-primary px-4 py-3 rounded-2xl">
                <span className="md:text-5xl text-3xl">{String(timeRemaining.hours).padStart(2, "0")}</span>
                <span className="md:text-md text-sm">Hours</span>
              </div>
              <span className="md:text-5xl text-3xl mx-2">:</span>
              <div className="flex flex-col items-center mx-2 bg-white text-main-primary px-4 py-3 rounded-2xl">
                <span className="md:text-5xl text-3xl">{String(timeRemaining.minutes).padStart(2, "0")}</span>
                <span className="md:text-md text-sm">Minutes</span>
              </div>
            </div>
            <div className="flex md:flex-row flex-col-reverse gap-4 md:mt-14 mt-12">
              {timeRemaining.days <= 0 && timeRemaining.hours <= 0 && timeRemaining.minutes <= 0 ? (
                <div></div>
              ) : (
                <Link href="/registration-competition" passHref>
                  <Button className="bg-white hover:translate-y-[-4px] mx-auto text-main-primary text-lg p-7 rounded-2xl transition-all duration-300 white-shadow hover:bg-white">{TextConstants.en.registerNow}</Button>
                </Link>
              )}
              <Link href="https://mpyoqbpkfxoyaqrfzbht.supabase.co/storage/v1/object/public/rule_book/GUIDEBOOK%20UIID%202024_20240815_192411_0000.pdf" target="_blank" passHref>
                <Button className="bg-white hover:translate-y-[-4px] mx-auto text-main-primary text-lg p-7 rounded-2xl transition-all duration-300 white-shadow hover:bg-white">GUIDEBOOK</Button>
              </Link>
            </div>
          </LazyBackground>

          <LazyBackground className="hidden bg-main-secondary lg:w-1/2 w-full p-4 h-full bg-cover bg-center lg:flex items-center justify-center text-center" src={ImageConstants.bgEventRegistration2.src}>
            <h1 className="text-4xl m-10 font-bold bg-clip-text text-transparent bg-gradient-to-r to-[#121251] from-[#2828B7]" data-aos="fade-up">
              {TextConstants.en.eventRegistrationTitle}
            </h1>
          </LazyBackground>
        </div>
      </div>
    </div>
  );
};

export default CompetitionRegistrationSection;
