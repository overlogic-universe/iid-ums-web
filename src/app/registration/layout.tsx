import { ImageConstants } from "@/constants/image-constants";
import { SvgConstants } from "@/constants/svg-constants";
import { Metadata, NextPage } from "next";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Register UMS IID 2024",
  description:
    "Registration International Innovation Day 2024, The Creative Synergy of Young Investors Encourage Innovation for Human Life and Well-being - International Innovation Day 2024 - UMS",
};

const RegistrationLayout: NextPage<Props> = ({ children }) => {
  return (
    <div className="relative">
      <Image
        src={ImageConstants.bgRegistration}
        alt="Wave"
        className="absolute w-screen h-screen"
        style={{ objectFit: "cover" }}
      />
      <div className="p-3 pb-20 md:px-26 lg:px-36 xl:px-56 h-screen w-screen absolute flex flex-col items-center justify-center overflow-hidden">
        <Image src={SvgConstants.logo} alt="Logo" className="my-5" />
        <div className="w-full h-full flex justify-center z-20">{children}</div>
      </div>
    </div>
  );
};

export default RegistrationLayout;
