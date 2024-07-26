import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
  page: React.ReactNode;
}

const RegistrationLayout: NextPage<Props> = ({ page }) => {
  return (
    <div className=" p-20 px-56 h-screen">
      <div className="rounded-2xl bg-white w-full h-full flex justify-center">
        {page}
      </div>
    </div>
  );
};

export default RegistrationLayout;
