"use client";
import { useEffect } from "react";

const WhatsAppPage = () => {
  useEffect(() => {
    const message = encodeURIComponent(
      "Halo Kak, saya tertarik dengan acara UMS International Innovation Day dan ingin mengetahui lebih lanjut. Saya memiliki beberapa pertanyaan:\n\n*Pertanyaan:*\n...\n\nTerima kasih banyak atas bantuan dan informasinya. 😊"
    );

    const phoneNumber = "6287846462090";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.location.href = whatsappUrl;
  }, []);

  return null;
};

export default WhatsAppPage;
