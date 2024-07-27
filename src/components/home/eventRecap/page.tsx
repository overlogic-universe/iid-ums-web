import { NextPage } from "next";

interface Props {}

const EventRecapSection: NextPage<Props> = ({}) => {
  return (
    <div className="flex-col min-w-full items-center justify-center">
      <div className="bg-main-secondary section relative">
        <div className="w-full rounded-2xl bg-white lg:p-10 p-5">
        </div>
      </div>
    </div>
  );
};

export default EventRecapSection;
