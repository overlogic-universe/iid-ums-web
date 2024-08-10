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

  return (
    <div className="flex-col min-w-full">
      <div className="section flex flex-col">
        <h1 className="md:text-4xl text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r to-[#121251] from-[#2828B7] mb-5">{TextConstants.en.officialITPartners}</h1>
        <div className="flex gap-20">
          <div  className="flex justify-center items-center mt-5">
            <Image width={180} height={100} src={itPartners[0].src} alt={itPartners[0].alt} />
          </div>
            <div  className="flex justify-center items-center mt-5">
            <Image width={250} height={150} src={itPartners[1].src} alt={itPartners[1].alt} />
          </div>
        </div>
        <h1 className="md:text-4xl text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r to-[#121251] from-[#2828B7] mt-14 mb-7">{TextConstants.en.organizedBy}</h1>
        <div>
          {organizedBy.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image width={200} height={100} src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </div>
        <h1 className="md:text-4xl text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r to-[#121251] from-[#2828B7] mt-14 mb-7">{TextConstants.en.inCollaborationWith}</h1>
        <div>
          {inColabWith.map((partner, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image width={200} height={100} src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
