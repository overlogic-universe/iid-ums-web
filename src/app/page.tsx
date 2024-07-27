import Footer from "@/components/common/footer";
import { Navbar } from "@/components/common/navbar";
import EventRegistrationSection from "@/components/home/eventRegistration/page";
import HeaderSection from "@/components/home/header/page";

const HomePage = () => {
  return (
    <>
      <Navbar />
      < HeaderSection/>
      < EventRegistrationSection/>
      {/* Another Components */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
