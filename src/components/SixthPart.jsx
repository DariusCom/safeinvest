import { useState } from "react";
import Question from "./Question";
import faqImage from "./images/faq-image.png";

const SixthPart = () => {
  const questions = [
    "This is a question",
    "Or is this one",
    "Maybe this one",
    "How about this one",
    "Surely this one will be",
    "I bet this one is",
    "No shot this one is not",
  ];

  const [open, setOpen] = useState(0);

  const openQuestion = (nr) => {
    if (open === nr) {
      setOpen(0);
    } else {
      setOpen(nr);
    }
  };

  return (
    <div className="bg-violet-800 flex">
      <div className="bg-violet-800 flex flex-col px-44 pt-12 mb-10 w-1/2 laptop:px-24 tablet:w-full tablet:px-44 lg:px-12 sm:px-4">
        <div className="flex flex-col items-center text-center text-white mb-10 laptop:mb-5">
          <div className="flex items-center">
            <svg
              width="31"
              height="6"
              viewBox="0 0 31 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3.00002L31 3" stroke="#DE4A4A" stroke-width="5" />
            </svg>
            <h6 className="text-xl ml-3 mr-8 tablet:text-2xl sm:text-xl">
              FAQ
            </h6>
          </div>
          <h2 className="text-3xl py-5 font-bold laptop:text-2xl tablet:text-3xl sm:text-2xl sm:py-3">
            Frequently Asked Questions
          </h2>
          <p className="text-lg tablet:text-xl sm:text-lg">
            Know more about us before you decide to use our services
          </p>
        </div>
        <div className="w-full flex flex-col">
          {questions.map((question, i) => (
            <Question
              openQuestion={openQuestion}
              open={open}
              key={i}
              nr={i + 1}
              question={question}
            />
          ))}
        </div>
      </div>
      <div className="w-1/2 tablet:hidden">
        <img src={faqImage} alt="faq" className="w-full h-full" />
      </div>
    </div>
  );
};

export default SixthPart;
