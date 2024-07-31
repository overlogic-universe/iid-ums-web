import { ImageConstants } from "@/constants/image-constants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {}

const PartnerSection: NextPage<Props> = ({}) => {
  const itPartners = [
    { src: ImageConstants.overlogicLogo, alt: "Overlogic" },
    { src: ImageConstants.gdscUMSLogo, alt: "Google Developer Student Clubs (GDSC) UMS" },
  ];

  const vendorPartners = [
    { src: ImageConstants.nutricomLogo, alt: "Nutricom" },
    { src: ImageConstants.innopaLogo, alt: "Innopa" },
  ];

  return (
    <div className="flex-col min-w-full">
      <div className="section flex flex-col">
        <h1 className="md:text-4xl text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r to-[#121251] from-[#2828B7] mb-5" data-aos="fade-up">
          Official IT Partner
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-20" data-aos="fade-up">
          {itPartners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center mt-5">
              <Image width={250} height={150} src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </div>
        <h1 className="md:text-4xl text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r to-[#121251] from-[#2828B7] mt-16 mb-5" data-aos="fade-up">
          Official Vendor Partner
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-2 md:gap-20 gap-10" data-aos="fade-up">
          {vendorPartners.map((partner, index) => (
            <div key={index} className="flex justify-center items-center mt-5">
              <Image width={250} height={150} src={partner.src} alt={partner.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
