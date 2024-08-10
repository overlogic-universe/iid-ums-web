import { NextPage } from 'next'
import overlogicLogo from "@/assets/images/logo/overlogic-logo.png";
import Image from "next/image";

interface Props {}

const NotFound: NextPage<Props> = ({}) => {
  return <div className={"flex items-center justify-center h-screen overflow-hidden"}>
    <Image src={overlogicLogo} alt={"Logo"} width={200}/>
  </div>
}

export default NotFound