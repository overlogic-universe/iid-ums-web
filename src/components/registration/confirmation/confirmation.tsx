import { TextConstants } from "@/constants/text-constants";
import { NextPage } from "next";
import { useEffect } from "react";

interface Props {
  onChange: (agree: boolean) => void;
}

const Confirmation: NextPage<Props> = ({ onChange }) => {
  useEffect(()=>{
    onChange(false);
  },[])
  return (
    <div className="w-full bg-main-100 p-3 md:p-20 mt-5 border-2 border-blue-700 rounded-2xl text-center">
      <p>
        {TextConstants.en.agreement}
      </p>
      <div className="items-center justify-center flex pt-5">
        <input
          onChange={(e) => {
            onChange(e.target.checked);
          }}
          type="checkbox"
          name="agree"
          className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg mx-2`}
        />
        <label className="font-semibold">Confirmation</label>
      </div>
    </div>
  );
};

export default Confirmation;
