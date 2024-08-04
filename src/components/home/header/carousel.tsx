import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { headerImages, headerImagesMobile } from "./carouselImages";
import { useEffect, useState } from "react";

const carouselItems = [
  { id: 1, imageUrl: headerImages.image1 },
  { id: 2, imageUrl: headerImages.image2 },
];

const carouselItemsMobile = [
  { id: 1, imageUrl: headerImagesMobile.imageMobile1 },
  { id: 2, imageUrl: headerImagesMobile.imageMobile2 },
];

export default function HeaderCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const itemsToDisplay = isMobile ? carouselItemsMobile : carouselItems;

  return (
    <Swiper
      className="header-carousel"
      loop
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {itemsToDisplay.map((item) => (
        <SwiperSlide key={item.id} className="object-cover text-center">
          <Image className="w-full object-cover" width={1920} height={1080} src={item.imageUrl.src} alt={`slide ${item.id}`} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}
