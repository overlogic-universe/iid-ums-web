import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";

interface Props {}

const JudgesSpeakersSection: NextPage<Props> = ({}) => {
  return (
    <div id="speakers-judges" className="section min-h-screen">
      <h1 className="title-section">
        <span className="title-section-span">{TextConstants.en.judgesSpeakersTitle}</span>
      </h1>
    </div>
  );
};

export default JudgesSpeakersSection;
