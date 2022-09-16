import { Link } from "react-router-dom";
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const titleQuery =
  "laptop:text-4xl tablet:text-2xl lg:text-5xl md:text-[2.8rem] md:mb-1 sm:text-4xl";
const subTitleQuery =
  "laptop:text-2xl tablet:text-lg lg:text-3xl md:text-[2.1rem] sm:text-[1.8rem]";
const splineQuery = "";
const paragraphQuery =
  "laptop:text-lg laptop:w-2/3 lg:w-[90%] tablet:text-sm lg:text-lg lg:mb-8";
const buttonQuery =
  "laptop:text-sm laptop:h-10 tablet:text-[0.5rem] tablet:h-6 lg:h-12 lg:text-lg lg:w-[90%]";
const alreadyQuery =
  "laptop:text-[0.5rem] tablet:text-[0.35rem] lg:text-[0.9rem]";

const FirstPart = () => {
  return (
    <div className="flex items-center relative overflow-hidden lg:justify-center lg:mobile-landing-background lg:bg-cover lg:bg-no-repeat">
      <div className="w-[40%] z-10 mb-52 mt-[11.6rem] justify-between flex flex-col items-center text-white font-bold laptop:w-[45%] laptop:mb-32 laptop:mt-[7rem] tablet:mb-24 tablet:mt-20 lg:w-2/3 lg:mt-32 sm:w-3/4">
        <div className="flex flex-col items-center mb-5 lg:mb-8">
          <h1 className={`text-6xl ${titleQuery} `}>
            Make <span className="text-green-500">Profit</span>
          </h1>
          <h2 className={`text-4xl ${subTitleQuery}`}>
            Invest <span className="text-green-500">Safely</span>
          </h2>
        </div>
        <p className={`w-1/2 text-center text-2xl mb-5 ${paragraphQuery}`}>
          Find the perfect strategy with our product and start making profit
        </p>
        <Link
          to="/signup"
          className={`flex justify-center items-center w-1/3 h-12 rounded-full text-lg bg-gradient-to-r from-orange-600 to-orange-400 ease-in duration-100 hover:scale-105 ${buttonQuery}`}
        >
          <span>GET STARTED</span>
        </Link>
        <div className={`mt-1 flex text-[0.75rem] font-normal ${alreadyQuery}`}>
          <p>Already have an account?</p>
          <Link to="/login">
            <span className="ml-1 text-blue-500">Login</span>
          </Link>
        </div>
      </div>
      <div className="w-[60%] flex items-center justify-center laptop:w-[55%] laptop:h-[350px] tablet:h-[200px] lg:hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <Spline
            className={`m-0 ${splineQuery} tablet:-translate-x-10`}
            scene="https://prod.spline.design/qRjNAvrfnyQ4bHzf/scene.splinecode"
          />
        </Suspense>
      </div>
    </div>
  );
};

export default FirstPart;
