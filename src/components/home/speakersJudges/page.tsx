import { NextPage } from "next";

interface Props {}

const SpeakersJudgesSection: NextPage<Props> = ({}) => {
  return (
    <div id="speakers-judges" className="section min-h-screen">
      <h1 className="title-section">
        <span className="title-section-span">Judges & Speakers</span>
      </h1>
    </div>
  );
};

export default SpeakersJudgesSection;
