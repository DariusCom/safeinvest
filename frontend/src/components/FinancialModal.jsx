import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const FinancialModal = ({ switchPopUp, name, data, years, toggle }) => {
  const [year, setYear] = useState(years[years.length - 1]);

  const light = `${toggle ? "bg-white" : "bg-slate-600"}`;
  const dark = `${
    toggle ? "bg-slate-200 lg:bg-slate-300" : "bg-slate-700 lg:bg-slate-800"
  }`;

  let abbreviation = "";
  if (name === "Balance Sheet") {
    abbreviation = "bs";
  } else if (name === "Income Statement") {
    abbreviation = "ic";
  } else {
    abbreviation = "cf";
  }

  const onChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full h-screen top-0 left-0 bg-black bg-opacity-50 z-30"
    >
      <div
        onClick={switchPopUp}
        className="fixed w-full h-screen top-0 left-0"
      ></div>
      <motion.div
        className={`overflow-auto relative w-[70%] mt-[calc(100vh-85vh-20px)] my-0 mx-auto max-h-[70vh] min-h-[70vh] ${
          toggle ? "bg-white" : "bg-slate-700"
        } rounded-2xl p-5 z-40 lg:w-[85%] lg:min-h-[85%] lg:mt-[calc(100vh-85vh-40px)]`}
      >
        <span
          onClick={switchPopUp}
          className="cursor-pointer fixed right-2 top-2 text-lg"
        >
          x
        </span>
        <div className="flex justify-between px-6 my-5 lg:flex-col">
          <h5
            className={`text-2xl ${toggle ? "text-black" : "text-stone-300"}`}
          >
            {name}
          </h5>
          <div className="flex flex-col lg:my-3">
            <label
              className={`${toggle ? "text-black" : "text-stone-300"}`}
              htmlFor="years"
            >
              Choose a year:
            </label>
            <select
              className={`${
                toggle ? "text-black bg-slate-300" : "text-slate-700 bg-white"
              }`}
              onChange={onChange}
              name="years"
              id="years"
            >
              {years.map((year) => {
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="w-full">
          {data[year][abbreviation].map((metric, i) => {
            return (
              <div
                key={i}
                className={`${i % 2 === 0 ? light : dark} flex items-center ${
                  toggle ? "text-black" : "text-stone-300"
                } px-4 lg:flex-col lg:px-0 lg:py-2`}
              >
                <div
                  className={`w-2/3 border-r-2 ${
                    toggle ? "border-slate-300" : "border-slate-500"
                  } py-1 lg:w-full lg:border-r-0 lg:border-b-2 lg:px-2`}
                >
                  <p>{metric["concept"].split(/(?=[A-Z])/).join(" ")}</p>
                </div>
                <p className="w-1/3 text-right lg:w-full lg:text-center">
                  {metric["value"] !== "N/A" && "$"}
                  {metric["value"].toLocaleString("en-US")}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinancialModal;
