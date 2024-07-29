import { Button } from "@/components/ui/button";
import { SvgConstants } from "@/constants/svg-constants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {}

const SubmitedPage: NextPage<Props> = ({}) => {
  return (
    <div className="w-full p-10">
      <div className="w-full h-[380px] bg-main-200 flex items-center justify-center rounded-2xl text-white flex-col">
        <Image src={SvgConstants.doneIcon} alt="Done" />
        <p className="text-5xl">Form Submitted Successfully</p>
        <p className="py-5 text-xl">
          Thank you for registering for the International Innovation day 2024
          event
        </p>
        <Link href={"/"}>
          <Button
            variant={"secondary"}
            className="py-6 bg-transparent rounded-2xl px-20 text-xl text-white border-2 border-white"
          >
            Done
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubmitedPage;
