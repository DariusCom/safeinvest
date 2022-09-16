const CompanyInformation = ({ companyInfo, toggle }) => {
  const borderToggle = ["border-gray-800", "border-gray-300"];

  return (
    <div
      className={` ${
        toggle ? "text-black bg-slate-200" : "text-stone-300 bg-slate-700"
      } text-center text-xl w-full rounded-lg`}
    >
      <div className={`flex border-b-2 ${borderToggle[+toggle]} lg:flex-col`}>
        <div
          className={`flex items-center w-1/3 border-r-2 ${
            borderToggle[+toggle]
          } pt-3 lg:w-full lg:border-r-0 lg:border-b-2 lg:py-10`}
        >
          <p className="w-full">{companyInfo["companyInfo"]["name"]}</p>
        </div>
        <div className="w-2/3 lg:w-full">
          <div className={`border-b-2 py-3 ${borderToggle[+toggle]}`}>
            <p className="mb-1 text-xs">Exchange</p>
            <p>{companyInfo["companyInfo"]["exchange"]}</p>
          </div>
          <div className="py-3">
            <p className="mb-1 text-xs">Market Cap</p>
            <p>
              {companyInfo["companyInfo"]["marketCapitalization"].toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col">
        <div className={`flex border-b-2 ${borderToggle[+toggle]} lg:flex-col`}>
          <div
            className={`w-1/2 border-r-2 ${
              borderToggle[+toggle]
            } py-3 lg:w-full lg:border-r-0 lg:border-b-2`}
          >
            <p className="mb-1 text-xs">Country</p>
            <p>{companyInfo["companyInfo"]["country"]}</p>
          </div>
          <div className="w-1/2 py-3 lg:w-full">
            <p className="mb-1 text-xs">IPO</p>
            <p>{companyInfo["companyInfo"]["ipo"]}</p>
          </div>
        </div>
        <div className="flex lg:flex-col">
          <div
            className={`w-1/2 border-r-2 ${
              borderToggle[+toggle]
            } py-3 lg:w-full lg:border-r-0 lg:border-b-2`}
          >
            <p className="mb-1 text-xs">Phone</p>
            <p>{companyInfo["companyInfo"]["phone"]}</p>
          </div>
          <div className="w-1/2 py-3 lg:w-full">
            <p className="mb-1 text-xs">Website</p>
            <a
              className="text-blue-400"
              href={companyInfo["companyInfo"]["weburl"]}
            >
              {companyInfo["companyInfo"]["weburl"].split("//")[1]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
