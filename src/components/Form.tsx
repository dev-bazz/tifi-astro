import React from "react";

const Form = () => {
  return (
    <form className="w-full max-w-[607px] my-0 mx-auto px-3 sm:px-4 md:px-8 xl:px-0 flex-col justify-end items-center gap-6 md:gap-8 flex md:text-lg ">
      <label className="w-full flex-col justify-start items-start gap-1.5 flex">
        Company Name
        <input
          type="text"
          placeholder="Enter business name"
          className="w-full text-gray-400  font-normal font-['Plus Jakarta Sans'] leading-normal bg-white rounded-lg border border-gray-300 px-3.5 py-4"
          required
        />
      </label>
      <label className="w-full flex-col justify-start items-start gap-1.5 flex">
        Business Email Address
        <input
          type="text"
          placeholder="Enter email address"
          className="w-full text-gray-400  font-normal font-['Plus Jakarta Sans'] leading-normal bg-white rounded-lg border border-gray-300 px-3.5 py-4"
          required
        />
      </label>
      <label className="w-full flex-col justify-start items-start gap-1.5 flex">
        Subject (Optional)
        <input
          type="text"
          placeholder="Enter subject"
          className="w-full text-gray-400  font-normal font-['Plus Jakarta Sans'] leading-normal bg-white rounded-lg border border-gray-300 px-3.5 py-4"
        />
      </label>

      <label className="w-full flex-col justify-start items-start gap-1.5 flex">
        Tell us what you need.
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full text-gray-400  font-normal font-['Plus Jakarta Sans'] leading-normal bg-white rounded-lg border border-gray-300 px-3.5 py-4 pb-16"
          required
        />
      </label>

      <button
        type="submit"
        className="text-white  font-extrabold font-inter leading-normal px-5 py-3 bg-gray-900 sm:bg-orange-500 rounded-lg shadow w-full"
      >
        SEND MESSAGE
      </button>
    </form>
  );
};
export default Form;
