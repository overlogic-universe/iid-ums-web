import { ImageConstants } from "@/constants/image-constants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const purposes = [
  {
    title: "Increasing Student Awareness and Participation",
    description: "Raising student and academic community awareness about the importance of SDGs, and encouraging active participation in relevant research and innovation.",
  },
  {
    title: "Encouraging Innovation and Research",
    description: "Facilitating students to develop and present innovations and research outcomes that can contribute to achieving internationally recognized SDGs.",
  },
  {
    title: "Internationalization of the University",
    description: "Enhancing UMS and student international exposure through international competitions, strengthening UMS's position as an impactful world-class university.",
  },
  {
    title: "Collaboration and Knowledge Exchange",
    description: "Building collaboration networks among students, academics, and researchers from various countries, facilitating the exchange of knowledge and ideas.",
  },
];

const EventPurpose: NextPage<Props> = ({}) => {
  return (
    <div id="event-purpose" className="flex flex-col section relative bg-white lg:px-10 px-5">
      <Image className="lg:w-38 md:w-32 w-16 -top-5 left-0 absolute z-20" src={ImageConstants.cubeDecoration2} alt="cubeDecorationPurpose" data-aos="fade-right" />
      <h1 className="text-main-primary md:text-[2.8rem] text-3xl font-bold text-center underline mb-12" data-aos="fade-up">
        <span className="bg-clip-text text-transparent bg-gradient-to-r title-section-span">EVENT PURPOSE</span>
      </h1>
      <div className="grid gap-8 lg:grid-cols-2 grid-cols-1" data-aos="fade-up">
        {purposes.map((purpose, index) => (
          <div key={index} className="relative md:mx-0 mx-2 transition-all duration-300 hover:scale-105 flex flex-col items-start bg-gradient-to-r from-white to-blue-300 shadow-lg rounded-xl p-6">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-25 rounded-xl"></div>
            <h2 className="relative md:text-lg text-base font-semibold mb-2">{purpose.title}</h2>
            <p className="relative md:text-base text-sm font-light">{purpose.description}</p>
            <div className="absolute bottom-2 right-2 transform rotate-12">
              <Image src={ImageConstants.cubeDecoration} alt="cubeDecoration2Purpose" width={40} height={40} className="opacity-50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPurpose;
