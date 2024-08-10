import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ImageConstants } from "@/constants/image-constants";
import { TextConstants } from "@/constants/text-constants";
import LazyBackground from "@/components/common/lazyBackground";

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
      <div className="w-[200px] h-[8px] bg-gray-300 rounded-full mt-8 mx-auto overflow-hidden">
        <div className="h-full bg-blue-500 transition-width duration-300" style={{ width: `${percentage}%` }}></div>
      </div>
      <p className="text-center text-sm font-normal mt-1 text-gray-800">
        {currentSlide} {TextConstants.en.ofText} {totalSlides} {TextConstants.en.slides}
      </p>
    </div>
  );
};

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div id="about-us" className="bg-main-secondary flex justify-center items-center relative" style={{ padding: "40px 0px 40px 0px" }}>
      <Image className="lg:w-38 md:w-32 w-[100px] md:-top-24 -top-10 md:right-10 -right-0 absolute z-20" src={ImageConstants.cubeDecoration2} alt="cubeDecorationRecap2" data-aos="fade-left" />
      <Image className="lg:w-40 md:w-32 w-[100px] -bottom-3 md:left-3 -left-1 absolute z-20" src={ImageConstants.cubeDecoration} alt="cubeDecoration" data-aos="fade-right" />
      <Swiper centeredSlides pagination={false} modules={[Pagination, Navigation]} onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}>
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id} className="w-full object-cover text-center min-h-[50px] flex flex-col items-center justify-center about-us-box">
            <LazyBackground src={item.imageUrl} className="rounded-3xl border-2 border-white overflow-hidden section-box bg-white about-us-inner-box">
              <Image className="mx-auto mb-2" src={item.logo} alt={`slide ${item.id} logo`} height={150} width={270} />
              <p className="md:text-xl text-sm font-light text-center lg:mx-6 md:mt-5 mt-2" data-aos="fade-up">
                {item.description}
              </p>
            </LazyBackground>
          </SwiperSlide>
        ))}
        <PaginationBar currentSlide={currentSlide + 1} totalSlides={carouselItems.length} />
      </Swiper>
    </div>
  );
};

export default AboutSection;
