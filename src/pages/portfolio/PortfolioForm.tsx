import React from "react";
import Vector from "./Vector";

const PortfolioForm = () => {
  return (
    <section className="py-16 bg-white flex-col justify-end items-center gap-12 flex relative">
      <Vector />
      <div className="flex-col justify-start items-center gap-6 flex max-w-[1240px] my-0 mx-auto px-3 sm:px-8 md:px-24 xl:px-32">
        <h3 className="text-center text-gray-1100 text-3xl md:text-6xl font-semibold font-redhat uppercase">
          Let us know how we can help you.
        </h3>
        <p className="self-stretch text-center text-gray-1100 text-xl font-normal font-noto leading-relaxed lg:hidden">
          In just 48 hours, our experts will meticulously assess your video
          content and reveal untapped opportunities for enhancing your
          <span className="font-semibold"> brand </span>
          and visual storytelling.
        </p>
      </div>
    </section>
  );
};

export default PortfolioForm;
