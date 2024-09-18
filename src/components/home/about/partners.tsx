import { ImageConstants } from "@/constants/image-constants";
import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const PartnerSection: NextPage<Props> = ({}) => {
  const itPartners = [
    { src: ImageConstants.overlogicLogo, alt: "Overlogic" },
    { src: ImageConstants.gdscUMSLogo, alt: "Google Developer Student Clubs (GDSC) UMS" },
  ];

  const organizedBy = [{ src: ImageConstants.nutricomLogo, alt: "Nutricom" }];
  const inColabWith = [{ src: ImageConstants.innopaLogo, alt: "Innopa" }];
  const supportedBy = [{ src: ImageConstants.umsLogo, alt: "UMS" }];

  return (
    <div className="md:container flex flex-col min-w-full px-4">
      <div className="section flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-10 gap-y-3">
          
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2828B7] to-[#121251] mb-3">
              {TextConstants.en.officialITPartners}
            </h1>
            <div className="md:flex-row flex flex-col justify-center items-center gap-10 text-center">
              <Image width={250} src={itPartners[0].src} alt={itPartners[0].alt} className="pt-5"/>
              <Image width={250} height={150} src={itPartners[1].src} alt={itPartners[1].alt} />
            </div>
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2828B7] to-[#121251] mb-3">
              {TextConstants.en.organizedBy}
            </h1>
            <div className="flex justify-center items-center">
              <Image width={250} height={100} src={organizedBy[0].src} alt={organizedBy[0].alt} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg ">
            <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2828B7] to-[#121251]  mb-3">
              {TextConstants.en.inCollaborationWith}
            </h1>
            <div className="flex justify-center items-center">
              <Image width={250} height={100} src={inColabWith[0].src} alt={inColabWith[0].alt} />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg ">
            <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2828B7] to-[#121251]  mb-3">
              {TextConstants.en.supportedBy}
            </h1>
            <div className="flex justify-center items-center">
              <Image width={200} height={100} src={supportedBy[0].src} alt={supportedBy[0].alt} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
