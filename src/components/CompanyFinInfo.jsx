import { useState } from "react";
import FinancialModal from "./FinancialModal";

const CompanyFinInfo = ({ data, years, toggle }) => {
  const [popUp, setPopUp] = useState(false);
  const [name, setName] = useState("");

  const switchName = (e) => {
    setName(e.target.innerText);
  };

  const switchPopUp = (e) => {
    setPopUp(!popUp);
  };

  return (
    <div
      className={`flex flex-col items-center w-full ${
        toggle ? "text-black" : "text-stone-300"
      }`}
    >
      <h2>Financial Information</h2>
      <div className="flex flex-col w-full">
        <div
          onClick={(e) => {
            switchName(e);
            switchPopUp();
          }}
          className={`${
            toggle
              ? "bg-slate-200 hover:bg-slate-100"
              : "bg-slate-700 hover:bg-slate-600"
          } py-2 pl-3 cursor-pointer rounded-t-md hover:scale-[101%]`}
        >
          Balance Sheet
        </div>
        <div
          onClick={(e) => {
            switchName(e);
            switchPopUp();
          }}
          className={`${
            toggle
              ? "bg-slate-200 hover:bg-slate-100 border-gray-300"
              : "bg-slate-700 hover:bg-slate-600 border-gray-800"
          } py-2 pl-3 cursor-pointer border-y-2 hover:scale-[101%]`}
        >
          Income Statement
        </div>
        <div
          onClick={(e) => {
            switchName(e);
            switchPopUp();
          }}
          className={`${
            toggle
              ? "bg-slate-200 hover:bg-slate-100"
              : "bg-slate-700 hover:bg-slate-600"
          } py-2 pl-3 cursor-pointer rounded-b-md hover:scale-[101%]`}
        >
          Cash Flow
        </div>
      </div>
      {popUp && (
        <FinancialModal
          switchPopUp={switchPopUp}
          name={name}
          data={data}
          years={years}
          toggle={toggle}
        />
      )}
    </div>
  );
};

export default CompanyFinInfo;
