import React, { useState } from "react";
import { BusinessForm } from "./BusinessForm";
import { IndividualForm } from "./IndividualForm";

export const FormContainer = () => {
  const [formType, setFormType] = useState("business");

  const handleFormTypeChange = (e) => {
    // console.log(e.target.value);
    setFormType(e.target.value);
  };

  return (
    <section>
      <div>
        <div className="w-full flex gap-10 justify-center items-center border-b border-[#D0D5DD]">
          <button
            onClick={handleFormTypeChange}
            value="business"
            className={`
        pb-4
        font-noto
        text-base
        ${
          formType === "business"
            ? "text-[#FF601F] font-bold border-b-4 border-[#FF601F]"
            : "font-normal text-[#344054] border-b-4 border-transparent"
        }`}
          >
            Business
          </button>

          <button
            onClick={handleFormTypeChange}
            value="individual"
            className={`
        pb-4 font-noto
        text-base
        ${
          formType === "individual"
            ? "text-[#FF601F] border-b-4 font-bold border-[#FF601F]"
            : "text-[#344054] font-normal border-b-4 border-transparent"
        }`}
          >
            Individual
          </button>
        </div>
      </div>

      <div className="my-16 max-w-2xl w-full mx-auto p-4 font-plus">
        {formType === "business" ? <BusinessForm /> : <IndividualForm />}
      </div>
    </section>
  );
};
