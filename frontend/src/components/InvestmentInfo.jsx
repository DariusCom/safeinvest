const InvestmentInfo = ({ name, index, reorder, selected, toggle }) => {
  return (
    <th
      className={`px-2 py-6 first:sticky first:left-0 first:z-10 ${
        toggle ? "bg-slate-100" : "bg-slate-600"
      }`}
    >
      <div className="flex justify-center lg:text-sm sm:text-xs">
        <h6
          className={`flex ${
            toggle ? "text-black" : "text-white"
          } items-center whitespace-nowrap cursor-pointer select-none`}
          onClick={(e) => reorder(e, index)}
        >
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[18px] h-[18px] laptop:w-[12px] laptop:h-[12px]"
          >
            <path
              d="M3.96526 8.39014H14.0345C14.6435 8.39014 14.5936 7.38684 14.5305 6.8846C14.5111 6.72966 14.4141 6.50145 14.3244 6.37355L9.72876 0.529159C9.32622 -0.176386 8.67359 -0.176386 8.27085 0.529159L3.67576 6.37279C3.58605 6.50068 3.4891 6.72889 3.46971 6.88383C3.40643 7.38626 3.35628 8.39014 3.96526 8.39014Z"
              fill={`${selected === index ? "lime" : "black"}`}
            />
            <path
              d="M3.67576 11.627L8.27085 17.4709C8.67339 18.1764 9.32603 18.1764 9.72876 17.4709L14.3244 11.6262C14.4142 11.4983 14.5109 11.2704 14.5305 11.1152C14.5936 10.613 14.6435 9.60968 14.0345 9.60968H3.96526C3.35628 9.60968 3.40643 10.6136 3.46971 11.116C3.48929 11.2709 3.58605 11.4991 3.67576 11.627Z"
              fill={`${selected === index ? "lime" : "black"}`}
            />
          </svg>
          {name}
        </h6>
      </div>
    </th>
  );
};

export default InvestmentInfo;
