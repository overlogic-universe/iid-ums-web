"use client";
import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import EventRecapSection from "@/components/home/eventRecap/page";
import EventRegistrationSection from "@/components/home/eventRegistration/page";
import HeaderSection from "@/components/home/header/page";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      disable: function () {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
      },
    });
  }, []);
  return (
    <>
      <Navbar />
      <HeaderSection />
      <EventRegistrationSection />
      <EventRecapSection />
      <div className="min-h-screen">h</div>
      {/* Another Components */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
