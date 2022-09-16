const ThirdPart = () => {
  const partQuery =
    "laptop:py-20 tablet:py-14 lg:bg-slate-700 lg:bg-none lg:py-10 lg:bg-mobile-million lg:bg-cover lg:bg-no-repeat";

  const rectangleQuery =
    "laptop:px-7 laptop:py-10 tablet:px-5 tablet:py-6 lg:flex-col lg:w-[90%] lg:px-4 lg:pt-4 lg:pb-4 lg:border-0";

  const millionQuery =
    "laptop:text-[4rem] tablet:text-[2.8rem] lg:text-6xl lg:w-full lg:justify-center lg:mb-8 md:text-[3.5rem] sm:text-5xl";

  const descriptionQuery =
    "laptop:text-xl tablet:text-base lg:text-lg lg:w-full lg:px-7 md:text-base md:px-9 sm:px-7 sm:text-sm";

  return (
    <div
      className={`relative bg-first-cosmos bg-no-repeat bg-contain flex items-center justify-center py-28 ${partQuery}`}
    >
      {/* <div className="mlg:hidden absolute top-0 right-0 h-[238px] w-full bg-mobile-million bg-contain bg-no-repeat"></div> */}
      <div
        className={`w-[75%] h-[75%] border-8 border-amber-100 flex items-center text-center py-16 px-10 ${rectangleQuery}`}
      >
        <div
          className={`font-['Modak'] text-[5.5rem] flex z-30 select-none items-center w-1/2 text-orange-300 ${millionQuery}`}
        >
          <span
            className={`transition ease-in-out duration-300 hover:text-rose-400 hover:scale-y-[85%] mr-2`}
          >
            $
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            1
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            ,
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            0
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            0
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            0
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            ,
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            0
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            0
          </span>
          <span
            className={`transition ease-in-out duration-300 hover:scale-y-[85%] hover:text-rose-400`}
          >
            0
          </span>
        </div>
        <p className={`text-3xl w-1/2 text-white ${descriptionQuery}`}>
          We provide you with $1,000,000 of virtual currency to be able to start
          investing without risking your hard earned money. Use that sum to find
          the perfect strategy and then start investing and making profit.
        </p>
      </div>
    </div>
  );
};

export default ThirdPart;
