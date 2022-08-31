import { useState } from "react";
import EarthTestimonials from "./EarthTestimonials";

const FourthPart = () => {
  const partQuery =
    "laptop:pt-18 tablet:flex-col-reverse tablet:pb-10 tablet:pt-10";

  const textDivQuery =
    "laptop:w-[45%] laptop:pt-24 laptop:px-20 tablet:w-full tablet:h-[350px] tablet:pt-6 tablet:pb-24 lg:h-[300px] lg:px-10 lg:mb-6 sm:mb-16";

  const titleQuery = "laptop:text-lg lg:text-sm";
  const usersQuery = "laptop:text-3xl lg:text-xl";
  const testimonyQuery = "laptop:text-2xl lg:text-lg";
  const quoteQuery = "laptop:text-3xl lg:text-xl";
  const namesQuery = " lg:text-xl";
  const earthQuery =
    "laptop:w-[55%] tablet:w-full tablet:h-[400px] lg:h-[300px]";

  const reviews = {
    africa: {
      name: "Musa Obie",
      testimony:
        "I have been using the service for quite some time and it helped me find strategies without risking the limited money I had",
    },
    europe: {
      name: "Vladimir Munteanu",
      testimony:
        "I saved so much money by using this service, you have to try it as well!",
    },
    us1: {
      name: "Brittany Evans",
      testimony:
        "Do you want to be the next Buffet? Then start using this service and discover incredible strategies!",
    },
    us2: {
      name: "John Smith",
      testimony: "Idk... Low-key kinda garbo, ngl, on god.",
    },
    australia: {
      name: "Iffy Ivory",
      testimony:
        "This is a paid review, please delete this from the front of the message! It's such a great product, I will always use it!",
    },
    brazil: {
      name: "Igor Bolsanaro",
      testimony:
        "My wife said it is a scam. It's a scam, it's a scam... She did not believe in me, but now I showed her!",
    },
    india: {
      name: "Rhadia Buckano",
      testimony:
        "I will never go back to risking my HARD EARNED money just to find a good strategy. This service saved me!",
    },
  };

  const [reviewRegion, setReviewRegion] = useState("africa");

  const changeReviewRegion = (region) => {
    setReviewRegion(region);
  };

  return (
    <div className={`flex bg-[#030413] pt-24 pb-10 ${partQuery}`}>
      <div
        className={`flex pt-36 pb-44 flex-col items-center w-1/2 px-28 text-center ${textDivQuery}`}
      >
        <div className="text-white flex flex-col items-center mb-10">
          <div className="flex items-center justify-center">
            <svg
              width="51"
              height="5"
              viewBox="0 0 51 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2.18557e-07"
                y1="2.5"
                x2="51"
                y2="2.5"
                stroke="#DE4A4A"
                stroke-width="5"
              />
            </svg>
            <h3 className={`text-2xl font-bold mr-5 ml-2 ${titleQuery}`}>
              Testimonials
            </h3>
          </div>
          <h2 className={`text-5xl font-bold ${usersQuery}`}>
            What our users say
          </h2>
        </div>
        <div className="text-white mb-10">
          <p className={`text-4xl font-bold ${testimonyQuery}`}>
            <span className={`text-5xl ${quoteQuery}`}>"</span>
            {reviews[reviewRegion]["testimony"]}
            <span className={`text-5xl ${quoteQuery}`}>"</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <svg
            width="27"
            height="5"
            viewBox="0 0 27 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.18557e-07"
              y1="2.5"
              x2="27"
              y2="2.5"
              stroke="white"
              stroke-width="5"
            />
          </svg>
          <h2 className={`text-red-500 text-3xl ml-2 ${namesQuery}`}>
            {reviews[reviewRegion]["name"]}
          </h2>
        </div>
      </div>
      <div
        className={`relative w-1/2 flex items-center justify-center ${earthQuery}`}
      >
        <EarthTestimonials changeReviewRegion={changeReviewRegion} />
      </div>
    </div>
  );
};

export default FourthPart;
