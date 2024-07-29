import { NextPage } from "next";

interface Props {
  onChange: (agree: boolean) => void;
}

const Confirmation: NextPage<Props> = ({ onChange }) => {
  return (
    <div className="w-full bg-main-100 p-20 mt-5 border-2 border-main rounded-2xl text-center">
      <p>
        I agree to switch from on-site participation to online competition if
        government regulations tighten activities or travel around the event
        date. I will cancel my participation, and an adjusted refund may be
        processed after the event. (Please check the box) and upload.
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
