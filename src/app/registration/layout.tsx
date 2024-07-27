import { SvgConstants } from "@/constants/svg-constants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  page: React.ReactNode;
}

const RegistrationLayout: NextPage<Props> = ({ page }) => {
  return (
    <div className="relative">
      <Image
        src={SvgConstants.registerFormBackground}
        alt="Wave"
        className="absolute w-screen h-screen"
        style={{ objectFit: "cover" }}
      />
      <div className="pb-20 px-56 h-screen w-screen absolute flex flex-col items-center justify-center">
        <Image src={SvgConstants.logo} alt="Logo" className="my-"/>
        <div className="rounded-2xl bg-white w-full h-full flex justify-center z-20">
          {page}
        </div>
      </div>
    </div>
  );
};

export default RegistrationLayout;
