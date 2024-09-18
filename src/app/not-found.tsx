import { NextPage } from "next";
import overlogicLogo from "@/assets/images/logo/overlogic-logo.jpg";
import Image from "next/image";

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return (
    <div className={"flex flex-col items-center justify-center h-screen overflow-hidden"}>
      <h1 className="text-9xl">404</h1>
      <h3 className="text-xl">Page Not Found</h3>
      <div className="flex mt-4 space-x-2 items-center">
        <p className="text-sm">Powered by</p>
        <Image src={overlogicLogo} alt={"Logo"} width={250} />
      </div>
    </div>
  );
};

export default NotFound;
