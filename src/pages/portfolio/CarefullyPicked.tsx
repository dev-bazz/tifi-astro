import React, { useState } from "react";
// import play from './portfolio-icons/play.svg'

const CarefullyPicked = () => {
  const [active, setActive] = useState(1);

  // font

  return (
    <section className="w-full py-24 mt-14 bg-gray-100 flex-col justify-start ">
      <aside className="max-w-[1240px] my-0 mx-auto items-center gap-12 flex flex-col px-3 sm:px-4 md:px-8 xl:px-0">
        <h2 className=" text-center text-slate-800 text-3xl md:text-6xl font-semibold font-redhat">
          Carefully Picked Videos
        </h2>
        <div className="w-full flex-col justify-start items-end gap-14 flex">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full self-center justify-center  items-start gap-10 flex border-b border-gray-300">
              {["Businesses", "Individuals"].map((item, i) => (
                <button
                  key={i + 1}
                  className={`text-center md:translate-x-3/4 lg:translate-x-1/2 pb-4  
                      ${
                        i === 1
                          ? "border-orange-500 border-b-4 text-orange-500"
                          : ""
                      } text-xl font-bold font-noto`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="w-full px-2 md:w-fit py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2 flex">
              <select className="grow shrink basis-0 justify-start items-center gap-2 flex pr-6">
                {["Short Films", "Movies"].map((item, i) => (
                  <option
                    key={i + 1}
                    className="text-slate-800 text-base  font-noto  "
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul className="w-full flex-col justify-start items-start gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <li
                key={i + 1}
                className="w-full h-96 relative rounded-lg overflow-hidden"
              >
                <img
                  className="absolute w-full h-full blur-sm brightness-[75%]"
                  src="https://img.freepik.com/premium-photo/falling-asleep-by-light-his-monitor-shot-exhausted-computer-programmer-sleeping-his-desk-night_590464-20430.jpg"
                  alt="tired"
                />
                <p className="bottom-6 left-10 right-5 absolute text-gray-100 text-2xl font-bold font-noto leading-10">
                  A Day in the life of a Software Developer
                </p>

                <svg
                  className="w-20 h-20 p-4 z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute bg-gray-50 rounded-[50%] shadow"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.49 9.59989L5.6 16.7699C4.9 17.1899 4 16.6899 4 15.8699V7.86989C4 4.37989 7.77 2.19989 10.8 3.93989L15.39 6.57989L17.48 7.77989C18.17 8.18989 18.18 9.18989 17.49 9.59989Z"
                    fill="#101828"
                  />
                  <path
                    d="M18.0898 15.4599L14.0398 17.7999L9.99981 20.1299C8.54981 20.9599 6.90981 20.7899 5.71981 19.9499C5.13981 19.5499 5.20981 18.6599 5.81981 18.2999L18.5298 10.6799C19.1298 10.3199 19.9198 10.6599 20.0298 11.3499C20.2798 12.8999 19.6398 14.5699 18.0898 15.4599Z"
                    fill="#101828"
                  />
                </svg>
              </li>
            ))}
            <li className="w-full h-96 relative rounded-lg overflow-hidden">
              <img
                className="absolute z-10 w-full h-full blur-lg brightness-50"
                src="https://img.freepik.com/premium-photo/falling-asleep-by-light-his-monitor-shot-exhausted-computer-programmer-sleeping-his-desk-night_590464-20430.jpg"
                alt="tired"
              />
              <aside className="absolute z-30 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-10">
                <p className="w-80 text-center text-gray-100 text-2xl font-bold font-noto leading-10">
                  This could be your project as a part of our amazing curation.
                </p>

                <button className="text-gray-900 text-base font-extrabold font-inter leading-normal px-5 py-3 bg-white rounded-lg shadow">
                  LET'S TALK!
                </button>
              </aside>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default CarefullyPicked;
