import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { headerImages } from "./carouselImages";

const carouselItems = [
  { id: 1, imageUrl: headerImages.image1 },
  { id: 2, imageUrl: headerImages.image2 },
];

export default function HeaderCarousel() {
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
      modules={[Pagination, Navigation, Autoplay]}
    >
      {carouselItems.map((item) => (
        <SwiperSlide key={item.id} className="object-cover text-center">
          <Image priority width={1920} height={640} src={item.imageUrl.src} alt={`slide ${item.id}`} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
