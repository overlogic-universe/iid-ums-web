import { Input } from "@/components/ui/input";
import { NextPage } from "next";
import styles from "./styles.module.css";

interface Props {}

const Confirmation: NextPage<Props> = ({}) => {
  return (
    <div className="w-full bg-main-100 p-20 mt-5 border-2 border-main rounded-2xl font-serif text-3xl text-center">
      <p>
        I agree to switch from on-site participation to online competition if
        government regulations tighten activities or travel around the event
        date. I will cancel my participation, and an adjusted refund may be
        processed after the event. (Please check the box) and upload.
      </p>
      <div className="items-center justify-center flex pt-5">
        <input type="checkbox" name="agree" className={`${styles.checkbox} rounded-full mx-4 w-6 h-6`}/>
        <label className="font-semibold">Confirmation</label>
      </div>
    </div>
  );
};

export default Confirmation;
