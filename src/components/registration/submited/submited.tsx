import { Button } from "@/components/ui/button";
import { SvgConstants } from "@/constants/svg-constants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const SubmitedPage: NextPage<Props> = ({}) => {
  return (
    <div className="w-full p-3 md:p-10 text-center">
      <div className="w-full h-[380px] bg-main-primary flex items-center justify-center rounded-2xl text-white flex-col">
        <Image src={SvgConstants.doneIcon} className="max-sm:w-20" alt="Done" />
        <p className="text-lg md:text-3xl">Form Submitted Successfully</p>
        <p className="py-5 text-sm md:text-xl">Thank you for registering for the International Innovation day 2024 event</p>
        <strong className="pb-5 text-sm md:text-xl">Please check email regularly</strong>
        <Link href={"/"}>
          <Button variant={"secondary"} className="py-6 bg-transparent rounded-2xl px-20 text-xl text-white border-2 border-white">
            Done
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubmitedPage;
