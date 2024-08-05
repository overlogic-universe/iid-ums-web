import { IconConstants } from "@/constants/icon-constants";
import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Image from "next/image";
import { ImageConstants } from "@/constants/image-constants";

interface Props {}

const EventDetailsSection: NextPage<Props> = ({}) => {
  const Map = useMemo(
    () =>
      dynamic(() => import("./map"), {
        loading: () => <p className="map-style">A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const items = [
    { icon: IconConstants.location, text: TextConstants.en.locationAddress },
    { icon: IconConstants.building, text: "Auditorium Mohammad Djazman Universitas Muhammadiyah Surakarta" },
    { icon: IconConstants.countDown, text: "9 - 13 December 2024" },
  ];

  const contactItems = [
    { icon: IconConstants.whatsapp, link: "/whatsapp" },
    { icon: IconConstants.instagram, link: "https://www.instagram.com/innovationday.official" },
  ];

  return (
    <div id="event-details" className="section flex-col relative bg-main-secondary">
      <div className="section-box bg-white pb-5 px-5 bg-center bg-cover" style={{ backgroundImage: `url(${ImageConstants.bgEventDetails.src})` }}>
        <div className="title-section" data-aos="fade-up">
          <span className="title-section-span">{TextConstants.en.eventDetail}</span>
        </div>
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-1/3 w-full p-3">
            {items.map((item, index) => (
              <div key={index} className="flex items-start mb-5" data-aos="fade-up">
                <div className="flex items-center justify-center me-2 bg-[#307FE2] p-2 rounded-full h-[30px] w-[30px]">
                  <Image src={item.icon} alt={`icon-${index}`} height={18} />
                </div>
                <p className="w-full font-light text-sm">{item.text}</p>
              </div>
            ))}
            <div className="bg-[#307FE2] w-full my-4 rounded-2xl" style={{ height: "2px" }} data-aos="fade-up"></div>
            <h3 className="text-sm" data-aos="fade-up">
              Contact Us:
            </h3>
            <div className="flex gap-3">
              {contactItems.map((item, index) => (
                <a target="blank" key={index} href={item.link} className="mt-3 cursor-pointer flex items-center justify-center me-2 bg-[#307FE2] p-2 rounded-full h-[40px] w-[40px]" data-aos="fade-up">
                  <Image src={item.icon} alt={`icon-${index}`} height={30} />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-full relative" style={{ border: "1px solid #307FE2" }}>
            <Map />
            <div className="m-3 bg-white absolute px-2 py-1 h-28 lg:w-2/5 w-3/5 top-0 right-0 shadow-lg">
              <h1 className="font-bold lg:text-sm text-xs">{TextConstants.en.location}</h1> <p className="text-xs text-gray-600 line-clamp-2">{TextConstants.en.locationAddress}</p>
              <a
                target="blank"
                href="https://www.google.com/maps/place/Auditorium+Mohammad+Djazman+Universitas+Muhammadiyah+Surakarta/@-7.5583941,110.7686606,15z/data=!4m6!3m5!1s0x2e7a145a516fffe9:0x6f7e5928be398bff!8m2!3d-7.5583941!4d110.7686606!16s%2Fg%2F11cssppfv0?entry=ttu"
                className="text-main-primary text-xs mt-3 underline cursor-pointer"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image className="lg:w-40 md:w-32 w-[90px] lg:-top-10 -top-7 lg:left-5 left-0 absolute" src={ImageConstants.cubeDecoration} alt="cubeDecoration-detail" data-aos="fade-right" />
    </div>
  );
};

export default EventDetailsSection;
