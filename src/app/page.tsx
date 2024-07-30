"use client";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar/navbar";
import AboutSection from "@/components/home/about/page";
import PartnerSection from "@/components/home/about/partners";
import { WhatsAppIcon } from "@/components/home/common/whatsAppIcon";
import EventDetailsSection from "@/components/home/eventDetails/page";
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
      <EventDetailsSection />
      <EventRecapSection />
      <AboutSection />
      <PartnerSection />
      <Footer />
      <WhatsAppIcon />
    </>
  );
};

export default HomePage;
