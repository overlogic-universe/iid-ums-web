import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import { recapOfImages } from "./carouselImages";

const carouselItems = [
  { id: 1, imageUrl: recapOfImages.image1 },
  { id: 2, imageUrl: recapOfImages.image2 },
  { id: 4, imageUrl: recapOfImages.image4 },
  { id: 5, imageUrl: recapOfImages.image5 },
  { id: 6, imageUrl: recapOfImages.image6 },
];

export default function RecapCarousel() {
  return (
    <Swiper
      effect={"coverflow"}
      centeredSlides
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      breakpoints={{
        640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
    >
      {carouselItems.map((item) => (
        <SwiperSlide key={item.id} className="object-cover  rounded-3xl border-2 border-white overflow-hidden text-center">
          <Image className="w-full object-cover" width={600} height={400} src={item.imageUrl.src} alt={`slide ${item.id}`} />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}
