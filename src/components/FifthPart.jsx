import membersImage from "./images/members.png";
import profitsImage from "./images/profits.png";
import savedImage from "./images/saved.png";
import newsletterImage from "./images/newsletter.jpg";

const FifthPart = () => {
  const topDivQuery = "laptop:py-20 tablet:py-16 lg:flex-wrap lg:pt-5 lg:pb-20";

  const cardQuery = "tablet:px-2 tablet:py-3";

  const cardImageQuery =
    "laptop:w-[50px] laptop:h-[50px] tablet:w-[35px] tablet:h-[35px] md:w-[25px] md:h-[25px]";

  const statQuery = "laptop:text-3xl tablet:text-2xl md:text-xl";

  const descriptionQuery =
    "laptop:text-xl tablet:text-lg md:text-[1rem] sm:text-sm";

  const bottomDivQuery =
    "laptop:pr-32 laptop:py-8 tablet:pr-16 tablet:py-5 lg:w-full lg:pl-[5rem] md:pl-[3rem] md:pr-6";

  const bottomDivImageQuery = "lg:hidden";

  const subscribeDivQuery = "md:pl-10 sm:pl-6";

  const subscribeTextQuery =
    "laptop:text-2xl tablet:text-xl lg:text-2xl md:text-xl";

  const newsletterQuery =
    "laptop:text-4xl tablet:text-3xl lg:text-4xl md:text-3xl md:pl-9 sm:pl-3";

  const callToActionQuery =
    "laptop:text-[1rem] tablet:text-sm lg:text-[1rem] md:text-sm md:pl-8 md:pr-6 sm:pl-3 sm:pr-3";

  const inputQuery =
    "laptop:text-[1rem] laptop:py-3 laptop:my-6 tablet:text-sm tablet:py-2 tablet:my-5 lg:py-3 md:py-4 sm:py-3";

  const buttonQuery =
    "laptop:text-xl laptop:py-2 tablet:text-lg tablet:py-1 lg:py-2 md:py-3 sm:py-2";

  return (
    <div className="bg-white">
      <div
        className={`clip-background justify-evenly flex bg-violet-800 text-white font-bold py-24 select-none ${topDivQuery}`}
      >
        <div className="p-1 w-1/5 bg-gradient-to-r from-pink-400 to-pink-600 lg:w-[40%] lg:mb-4">
          <div
            className={`bg-violet-800 px-3 py-4 flex flex-col items-center h-full justify-around ${cardQuery}`}
          >
            <div className="flex items-center mb-5 lg:mb-2">
              <img
                className={`w-[75px] h-[75px] ${cardImageQuery}`}
                src={membersImage}
                alt="members"
              />
              <h2 className={`text-5xl ml-3 ${statQuery} `}>15K</h2>
            </div>
            <h4 className={`text-2xl ${descriptionQuery}`}>Total Members</h4>
          </div>
        </div>
        <div className="p-1 w-1/5 bg-gradient-to-r from-pink-300 to-pink-400 lg:w-[40%] lg:mb-4">
          <div
            className={`bg-violet-800 px-3 py-4 flex flex-col items-center h-full justify-around ${cardQuery}`}
          >
            <div className="flex items-center mb-5 lg:mb-2">
              <img
                className={`w-[75px] h-[75px] ${cardImageQuery}`}
                src={profitsImage}
                alt="profits"
              />
              <h2 className={`text-5xl ml-3 ${statQuery} `}>3M</h2>
            </div>
            <h4 className={`text-2xl ${descriptionQuery}`}>Total Profits</h4>
          </div>
        </div>
        <div className="p-1 w-1/5 bg-gradient-to-r from-orange-300 to-orange-200 lg:w-[40%]">
          <div
            className={`bg-violet-800 px-3 py-4 flex flex-col items-center h-full justify-around ${cardQuery}`}
          >
            <div className="flex items-center mb-5 lg:mb-2">
              <img
                className={`w-[75px] h-[75px] ${cardImageQuery}`}
                src={savedImage}
                alt="money saved"
              />
              <h2 className={`text-5xl ml-3 ${statQuery} `}>5M</h2>
            </div>
            <h4 className={`text-2xl ${descriptionQuery}`}>Money Saved</h4>
          </div>
        </div>
        <div className="p-1 w-1/5 bg-gradient-to-r from-blue-400 to-blue-600 lg:w-[40%]">
          <div
            className={`bg-violet-800 px-3 py-4 flex flex-col items-center h-full justify-around ${cardQuery}`}
          >
            <div className="flex items-center mb-5 lg:mb-2">
              <img
                className={`w-[75px] h-[75px] ${cardImageQuery}`}
                src={membersImage}
                alt="members"
              />
              <h2 className={`text-5xl ml-3 ${statQuery} `}>15K</h2>
            </div>
            <h4 className={`text-2xl ${descriptionQuery}`}>Total Members</h4>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className={`w-1/2 ${bottomDivImageQuery}`}>
          <img src={newsletterImage} alt="newsletter" />
        </div>
        <div
          className={`flex flex-col py-14 w-1/2 pr-64 pl-24 mb-10 ${bottomDivQuery}`}
        >
          <div className={`flex items-center ${subscribeDivQuery}`}>
            <svg
              width="31"
              height="5"
              viewBox="0 0 31 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2.50002L31 2.5" stroke="#DE4A4A" stroke-width="5" />
            </svg>
            <h5 className={`ml-3 text-3xl ${subscribeTextQuery}`}>
              Subscribe To
            </h5>
          </div>
          <h3 className={`text-5xl my-2 ${newsletterQuery}`}>Our Newsletter</h3>
          <p className={`text-lg ${callToActionQuery}`}>
            Get tips about investing and be the first to know about breakthrough
            strategies
          </p>
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={`rounded-full shadow-lg pl-7 py-4 my-8 text-lg ${inputQuery}`}
          />
          <button
            className={`bg-purple-900 text-white rounded-md py-3 text-2xl font-bold ease-in duration-150 hover:scale-105 ${buttonQuery}`}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FifthPart;
