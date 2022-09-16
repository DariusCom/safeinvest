import { useState } from "react";

const Question = ({ nr, question, openQuestion, open }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="mb-5 laptop:mb-3">
      <div
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={() => openQuestion(nr)}
        className="flex w-full"
      >
        <div
          className={`rounded-tl-md ${
            open !== nr && "rounded-bl-md"
          } bg-orange-400 w-1/12 text-center flex flex-col justify-center laptop:w-[14%] sm:w-1/5`}
        >
          <p className="text-3xl text-white font-bold select-none">{nr}</p>
        </div>
        <div
          className={`rounded-tr-md ${
            open !== nr && "rounded-br-md"
          } bg-orange-100 flex items-center justify-between px-4 py-3 w-11/12 laptop:w-[86%] laptop:text-sm tablet:text-[1rem] lg:text-sm sm:w-4/5`}
        >
          <p className="select-none">{question}?</p>
          <svg
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              hovered ? "rotate-90" : ""
            } ease-in duration-100 w-[23px] h-[23px] laptop:w-[18px] laptop:h-[18px]`}
          >
            <path
              d="M10.1818 22.1534V0.573862H13.0966V22.1534H10.1818ZM0.840909 12.8125V9.91477H22.4375V12.8125H0.840909Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div
        className={`flex px-5 py-3 justify-center items-center text-md bg-orange-100 rounded-b-md ${
          open !== nr
            ? "hidden"
            : "border-t-2 border-black laptop:text-sm laptop:px-4 laptop:py-2"
        }`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quidem.
          Quidem non magnam enim tenetur molestias sequi eius molestiae ratione.
        </p>
      </div>
    </div>
  );
};

export default Question;
