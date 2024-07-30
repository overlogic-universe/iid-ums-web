import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ImageConstants } from "@/constants/image-constants";
import { TextConstants } from "@/constants/text-constants";
import { SvgConstants } from "@/constants/svg-constants";

interface CarouselItem {
  id: number;
  imageUrl: string;
  logo: string;
  description: string;
}

interface PaginationBarProps {
  currentSlide: number;
  totalSlides: number;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    imageUrl: ImageConstants.bgNutricom.src,
    logo: ImageConstants.nutricomLogo.src,
    description: TextConstants.en.nutricomDescription,
  },
  {
    id: 2,
    imageUrl: ImageConstants.bgInnopa.src,
    logo: ImageConstants.innopaLogo.src,
    description: TextConstants.en.innopaDescription,
  },
];

const PaginationBar: React.FC<PaginationBarProps> = ({ currentSlide, totalSlides }) => {
  const percentage = (currentSlide / totalSlides) * 100;
  return (
    <div>
      <div className="w-[200px] h-[8px] bg-gray-300 rounded-full mt-8 mx-auto overflow-hidden relative">
        <div className="h-full bg-blue-500 transition-width duration-300" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="relative text-center text-sm font-normal mt-1 text-gray-800">
        {currentSlide} of {totalSlides} Slide
      </p>
    </div>
  );
};

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className=" bg-main-secondary flex justify-center items-center relative" style={{ padding: "40px 0px 40px 0px" }}>
      <Image className="lg:w-38 md:w-32 w-[100px] md:-top-24 -top-10 md:right-10 -right-0 absolute z-20" src={SvgConstants.cubeDecoration2} alt="cubeDecorationRecap2" data-aos="fade-left" />
      <Image className="lg:w-40 md:w-32 w-16 bottom-0 left-3 absolute z-20" src={SvgConstants.cubeDecoration} alt="cubeDecoration" data-aos="fade-right" />
      <Swiper
        centeredSlides
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full object-cover text-center flex flex-col items-center justify-center about-us-box">
            <div className="rounded-3xl border-2 border-white overflow-hidden section-box bg-white bg-center bg-cover about-us-inner-box" style={{ backgroundImage: `url(${item.imageUrl})` }}>
              <Image className="mx-auto mb-2 " src={item.logo} alt={`slide ${item.id} logo`} height={150} width={270} />
              <p className="md:text-2xl text-md font-light text-center lg:mx-6 mt-5" data-aos="fade-up">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <PaginationBar currentSlide={currentSlide + 1} totalSlides={carouselItems.length} />
        <div className="ms-3 swiper-button-prev"></div>
        <div className="me-3 swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default AboutSection;
