import React from "react";
import Tabs from "../components/FormComponents/Tabs";
import FlightInput from "./FormComponents/FlightInput";

const Form = () => {
  return (
    <div className="mt-10 w-full max-w-[1120px] rounded-2xl bg-white p-4">
      <Tabs />
      <FlightInput />
    </div>
  );
};

export default Form;
