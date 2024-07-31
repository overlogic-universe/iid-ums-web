import { IconConstants } from "@/constants/icon-constants";
import Image from "next/image";

export function WhatsAppIcon() {
  return (
    <a target="blank" href="/whatsapp" className="transition-all duration-300 hover:translate-y-[-4px] blue-shadow fixed h-[70px] w-[70px] bottom-5 right-5 z-50 cursor-pointer flex items-center  justify-center bg-[#307FE2] p-2 rounded-2xl">
      <Image src={IconConstants.whatsapp} alt={`icon-whatsapp-fixed`} height={40} />
    </a>
  );
}
