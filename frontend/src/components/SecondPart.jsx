import humanPng from "./images/human.png";
import coinsPng from "./images/coins.png";
import ideasPng from "./images/ideas.png";

const SecondPart = () => {
  const cardQuery =
    "laptop:pb-24 laptop:pt-8 laptop:mx-24 tablet:pb-16 tablet:pt-6 tablet:mx-16 lg:mx-6 lg:bg-none shadow-none lg:pt-16 lg:mb-5";

  const topDivQuery =
    "laptop:w-1/3 laptop:mb-12 tablet:mb-8 lg:w-2/3 md:w-3/4 sm:w-[90%]";

  const titleQuery =
    "laptop:text-3xl tablet:text-xl laptopL:text-[2.5rem] lg:text-4xl";

  const subtitleQuery = "laptop:text-lg tablet:text-sm lg:text-lg";

  const segmentQuery = "laptop:px-14 tablet:px-6 lg:w-full lg:rounded-lg";

  const imageQuery =
    "laptop:w-[68px] laptop:h-[68px] tablet:w-[48px] tablet:h-[48px] lg:w-[68px] lg:h-[68px]";

  const stepQuery = "laptop:text-lg tablet:text-sm lg:text-xl";

  const descriptionQuery = "laptop:text-sm tablet:text-[0.70rem] lg:text-lg";

  return (
    <div
      className={`flex flex-col items-center pb-36 pt-10 bg-gradient-to-br from-slate-700 to-slate-900 mx-28 mb-28 rounded-[3rem] shadow-red-400 shadow-md ${cardQuery}`}
    >
      <div className={`w-1/4 mb-20 text-center px-3 ${topDivQuery}`}>
        <h1 className={`text-[2.8rem] text-white mb-2 font-bold ${titleQuery}`}>
          How To Start
        </h1>
        <p className={`text-2xl text-white ${subtitleQuery}`}>
          Go through the proccess and
          <span className="text-green-500"> start making money</span>
        </p>
      </div>
      <div className="flex justify-between lg:flex-col">
        <div
          className={`w-1/3 flex flex-col items-center justify-between px-28 text-center bg-amber-800 py-5 rounded-r-3xl ${segmentQuery}`}
        >
          <img
            className={`mb-2 w-[80px] h-[80px] ${imageQuery}`}
            src={humanPng}
            alt="Human Vector"
          />
          <h3 className={`text-2xl text-white mb-2 font-bold ${stepQuery}`}>
            <span className="text-green-500">Create</span> Account
          </h3>
          <p className={`text-md text-white ${descriptionQuery}`}>
            Easily create an account by going through the sign-up proccess
          </p>
        </div>
        <div
          className={`w-1/3 flex flex-col items-center justify-between px-20 text-center py-5 laptop:px-14 ${segmentQuery}`}
        >
          <img
            className={`mb-2 w-[80px] h-[80px] ${imageQuery}`}
            src={coinsPng}
            alt="coin icons"
          />
          <h3 className={`text-2xl text-white mb-2 font-bold ${stepQuery}`}>
            <span className="text-green-500">Make</span> Investments
          </h3>
          <p className={`text-md text-white ${descriptionQuery}`}>
            Use the sum provided to test strategies in your quest for profit
          </p>
        </div>
        <div
          className={`w-1/3 flex flex-col items-center justify-between px-20 text-center bg-amber-800 py-5 rounded-l-3xl laptop:px-14 ${segmentQuery}`}
        >
          <img
            className={`mb-2 w-[80px] h-[80px] ${imageQuery}`}
            src={ideasPng}
            alt="creative icons"
          />
          <h3 className={`text-2xl text-white mb-2 font-bold ${stepQuery}`}>
            <span className="text-green-500">Find</span> Strategy
          </h3>
          <p className={`text-md text-white ${descriptionQuery}`}>
            You will find the strategy that will bring you the most profit
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
