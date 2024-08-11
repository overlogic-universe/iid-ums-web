import { ImageConstants } from "@/constants/image-constants";
import { NextPage } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { LottieConstants } from "@/constants/lottie-constants";
import { useInView } from "react-intersection-observer";
import { memo } from "react";
import { TextConstants } from "@/constants/text-constants";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface Props {}

const categories = [
  {
    animation: LottieConstants.category1,
    title: TextConstants.en.categoriesTitle1,
    description: TextConstants.en.categoriesDesc1,
  },
  {
    animation: LottieConstants.category2,
    title: TextConstants.en.categoriesTitle2,
    description: TextConstants.en.categoriesDesc2,
  },
  {
    animation: LottieConstants.category3,
    title: TextConstants.en.categoriesTitle3,
    description: TextConstants.en.categoriesDesc3,
  },
];

const CategoryCard = memo(({ category }: { category: (typeof categories)[0] }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div data-aos="fade-up" className="flex">
      <div ref={ref} className="transition-all duration-300 hover:translate-y-[-5px] border-blue-500 border-[1px] flex flex-col card-blue-shadow items-center bg-white rounded-xl overflow-hidden">
        <div className="w-full md:h-48 h-36 flex lg:justify-start justify-center">{inView && <Lottie animationData={category.animation} height={100} width={100} />}</div>
        <div className="p-4">
          <h2 className="md:text-lg font-semibold">{category.title}</h2>
          <p className="font-light md:text-base text-sm">{category.description}</p>
        </div>
      </div>
    </div>
  );
});

const CompetitionCategoriesSection: NextPage<Props> = () => {
  return (
    <div id="competition-categories" className="md:container relative bg-white lg:pb-10 pb-5 pt-1 lg:px-10 px-5 mb-15">
      <Image className="lg:w-40 md:w-32 w-16 lg:bottom-0 bottom-0 md:-bottom-10 right-0 absolute z-20" src={ImageConstants.cubeDecoration} alt="cubeDecorationCategories" data-aos="fade-left" />
      <Image className="lg:w-38 md:w-32 w-16 top-10 left-0 absolute z-20" src={ImageConstants.cubeDecoration2} alt="cubeDecorationCategories2" data-aos="fade-right" />
      <h1 className="title-section mt-4" data-aos="fade-up">
        <span className="title-section-span">{TextConstants.en.competitionCategoriesTitle}</span>
      </h1>
      <div className="grid gap-4 lg:grid-cols-3 grid-cols-1 md:mt-[60px] mt-[40px]">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CompetitionCategoriesSection;
