import { ImageConstants } from "@/constants/image-constants";
import { NextPage } from "next";
import Image from "next/image";
import Lottie from "lottie-react";
import { LottieConstants } from "@/constants/lottie-constants";

interface Props {}

const categories = [
  {
    animation: LottieConstants.category1,
    title: "Health, Pharmacy, Beauty and Personal Care Products, Functional Food",
    description: "Category of innovations covering the fields of health, pharmaceuticals, and personal care or functional foods from various source materials that are in line with the goal of human well-being.",
  },
  {
    animation: LottieConstants.category2,
    title: "Education, Technology Information and Communication, Teaching Tools Materials, IoT and Apps",
    description: "Category of innovation on communication systems, information, technology in the field of education with a focus on human welfare and health.",
  },
  {
    animation: LottieConstants.category3,
    title: "Health Technology and Promotion Based IoT & Apps, and Applied Science",
    description: "Category of innovation on health technology, internet-based health promotion, and applied technology in the field of human welfare and health.",
  },
];

const CompetitionCategoriesSection: NextPage<Props> = () => {
  return (
    <div id="competition-categories" className="relative bg-white lg:pb-10 pb-5 pt-1 lg:px-10 px-5 min-h-screen">
      <Image className="lg:w-40 md:w-32 w-16 lg:bottom-0 bottom-0 md:-bottom-10 right-0 absolute z-20" src={ImageConstants.cubeDecoration} alt="cubeDecorationCategories" data-aos="fade-left" />
      <Image className="lg:w-38 md:w-32 w-16 top-10 left-0 absolute z-20" src={ImageConstants.cubeDecoration2} alt="cubeDecorationCategories2" data-aos="fade-right" />
      <h1 className="title-section" data-aos="fade-up">
        <span className="title-section-span">Competition Categories</span>
      </h1>
      <div className=" grid gap-4 lg:grid-cols-3 grid-cols-1 md:mt-[60px] mt-[40px]" data-aos="fade-up">
        {categories.map((category, index) => (
          <div key={index} className="transition-all duration-300 hover:translate-y-[-5px] border-blue-500 border-[1px] flex flex-col card-blue-shadow items-center bg-white rounded-xl overflow-hidden">
            <div className="w-full md:h-48 h-36 flex lg:justify-start justify-center">
              <Lottie animationData={category.animation} height={100} width={100} />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{category.title}</h2>
              <p className="font-light">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionCategoriesSection;
