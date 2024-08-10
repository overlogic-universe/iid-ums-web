import { ImageConstants } from "@/constants/image-constants";
import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";

interface Judge {
  name: string;
  position?: string;
  category?: string;
  image: StaticImageData;
  bgColor: string;
}

interface Speaker {
  name: string;
  position: string;
  topic: string;
  image: StaticImageData;
  bgColor: string;
}

interface Props {}

const JudgesSpeakersSection: NextPage<Props> = ({}) => {
  const judges: Judge[] = [
    {
      name: "Windani Tiarahmawati",
      position: "Director Of Training And Development INNOPA",
      category: "General Judge",
      image: ImageConstants.judge1,
      bgColor: "bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-600",
    },
    {
      name: "apt. Peni Indrayudha, M.Biotech., Ph.D",
      category: `Health, Pharmacy, Beauty and\nPersonal Care Products, Functional Food`,
      image: ImageConstants.judge2,
      bgColor: "bg-gradient-to-tr from-green-600 via-green-300 to-green-600",
    },
    {
      name: "Hardika Dwi Hermawan, S.Pd., M.Sc",
      category: `Education, Technology Information and\nCommunication, Teaching Tools Materials, IoT and Apps`,
      image: ImageConstants.judge3,
      bgColor: "bg-gradient-to-tr from-purple-600 via-purple-300 to-purple-600",
    },
    {
      name: "Ayu Khoirotul Umaroh, S.KM., M.KM",
      category: `Health Technology and Promotion\nBased IoT & Apss, and Applied Science`,
      image: ImageConstants.judge4,
      bgColor: "bg-gradient-to-tr from-yellow-600 via-yellow-300 to-yellow-600",
    },
  ];

  const speakers: Speaker[] = [
    {
      name: "Windani Tiarahmawati",
      position: "Director Of Training And Development INNOPA",
      topic: `"Kiat Menjadi Inventor dan Inovator\nserta Sosialisasi Jadwal Lomba Internasional"`,
      image: ImageConstants.judge1,
      bgColor: "bg-gradient-to-tr from-blue-600 via-blue-300 to-blue-600",
    },
    {
      name: "Schalke Anindya Putri",
      position: `Mahasiswa Berprestasi Utama 1 Nasional 2023\nAwardee IISMA University of Glasgow, United Kingdom 2023\nPresiden IISMA Alumni Club 2024`,
      topic: '"Menjadi Mahasiswa Global"',
      image: ImageConstants.speaker2,
      bgColor: "bg-gradient-to-tr from-orange-600 via-orange-300 to-orange-600",
    },
    {
      name: "Brian Arianto Tanuwidjaja",
      position: `Mahasiswa Berprestasi 1 F-KKMK Universitas Gadjah Mada 2024\nCast Clash Of Championship by Ruangguru`,
      topic: '"Menjadi Mahasiswa Berprestasi"',
      image: ImageConstants.speaker3,
      bgColor: "bg-gradient-to-tr from-pink-600 via-pink-300 to-pink-600",
    },
  ];

  return (
    <div id="judges-speakers" className="relative section min-h-screen flex flex-col lg:!px-[120px] ">
      <Image className="lg:w-38 md:w-32 w-16 -top-2 right-5 absolute z-20" src={ImageConstants.cubeDecoration2} alt="cubeDecorationCategories2" data-aos="fade-right" />
      <div className="section-box">
        <h1 className="title-section underline" data-aos="fade-up">
          <span className="title-section-span">{TextConstants.en.judgesTitle}</span>
        </h1>
        <div className="flex flex-col md:space-y-0 space-y-8">
          {judges.map((judge, index) => (
            <div key={index} className={`flex items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`} data-aos={`${index % 2 !== 0 ? "fade-left" : "fade-right"}`}>
              <div className={`flex md:items-center items-start md:gap-5 gap-1 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                <div className={`relative flex-shrink-0 md:w-48 md:h-48 h-32 w-32 rounded-full overflow-hidden ${judge.bgColor} p-2`}>
                  <Image src={judge.image} alt={judge.name} fill className="rounded-full object-cover" />
                </div>
                <div className="ml-4 flex-1 text-start sm:text-left">
                  <h2 className="text-lg font-semibold text-gray-800">{judge.name}</h2>
                  {judge.position && <p className="text-sm font-medium text-gray-600">{judge.position}</p>}
                  <p className="text-sm text-gray-700 mt-2 whitespace-pre-line"><strong className="text-gray-700">Category:</strong> {judge.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-box mt-8 md:mb-0 mb-5">
        <h1 className="title-section underline" data-aos="fade-up">
          <span className="title-section-span">{TextConstants.en.speakersTitle} <br /> {TextConstants.en.speakersTitle2}</span>
        </h1>
        <div className="flex flex-col md:space-y-0 space-y-8">
          {speakers.map((speaker, index) => (
            <div key={index} className={`flex items-start justify-start ${index % 2 !== 0 ? "flex-row-reverse" : ""}`} data-aos={`${index % 2 !== 0 ? "fade-left" : "fade-right"}`}>
              <div className={`flex md:items-center items-start md:gap-5 gap-1 ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                <div className={`relative flex-shrink-0 md:w-48 md:h-48 h-32 w-32 rounded-full overflow-hidden ${speaker.bgColor} p-2`}>
                  <Image src={speaker.image} alt={speaker.name} fill className="rounded-full object-cover" />
                </div>

                <div className="ml-4 flex-1 text-start sm:text-left">
                  <h2 className="text-lg font-semibold text-gray-800">{speaker.name}</h2>
                  {speaker.position && <p className="text-sm font-medium text-gray-600 whitespace-pre-line">{speaker.position}</p>}
                  <p className="text-sm text-gray-700 mt-2 whitespace-pre-line"><strong className="text-gray-700">Topic:</strong> {speaker.topic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgesSpeakersSection;
