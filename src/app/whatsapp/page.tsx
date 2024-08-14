"use client";
import { useEffect } from "react";

const WhatsAppPage = () => {
  useEffect(() => {
    const message = encodeURIComponent(
      `Hi Sis, I am interested in the UMS International Innovation Day event and would like to know more. I have a few questions:\n\n*Questions:*\n.....\n\nThank you very much for your help and information. 😊`
    );

    const phoneNumber = "6281915689154";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.location.href = whatsappUrl;
  }, []);

  return null;
};

export default WhatsAppPage;
