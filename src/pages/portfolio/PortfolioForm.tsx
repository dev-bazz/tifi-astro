import React from "react";
import Vector from "./Vector";
import Form from "../../components/Form";

const PortfolioForm = () => {
  return (
    <section className="py-16 bg-white flex-col justify-end items-center gap-12 flex relative">
      <Vector />
      <div className="flex-col justify-start items-center gap-6 flex max-w-[1240px] my-0 mx-auto px-3 sm:px-8 md:px-24 xl:px-32">
        <h3 className="text-center text-slate-800 text-3xl md:text-6xl font-semibold font-redhat uppercase">
          Let us know how we can help you.
        </h3>
        <p className="self-stretch text-center text-slate-800 text-xl font-normal font-noto leading-relaxed lg:hidden">
          In just 48 hours, our experts will meticulously assess your video
          content and reveal untapped opportunities for enhancing your
          <span className="font-semibold"> brand </span>
          and visual storytelling.
        </p>
      </div>
      {/*  */}
      <div className="w-full self-center justify-center  items-start gap-10 flex border-b border-gray-300">
        {["Businesses", "Individuals"].map((item, i) => (
          <button
            key={i + 1}
            className={`text-center pb-4  
                      ${
                        i === 0
                          ? "border-orange-500 border-b-4 text-orange-500"
                          : ""
                      } text-xl font-bold font-noto`}
          >
            {item}
          </button>
        ))}
      </div>
      {/*  */}
      <Form />
    </section>
  );
};

export default PortfolioForm;
