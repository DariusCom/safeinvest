const RecentComponent = ({ name, action, amount, index, toggle }) => {
  return (
    <div
      className={`${
        index === 4
          ? ""
          : `border-r-2 border-dashed ${
              toggle ? "border-black" : "border-white"
            } border-opacity-30`
      } px-2 ${
        toggle ? "bg-white" : "bg-gray-800"
      } py-3 items-center w-1/5 flex flex-col justify-center h-[25vh] lg:w-[30%] lg:flex-none`}
    >
      {name && (
        <>
          <p
            className={`${
              toggle ? "text-black" : "text-white"
            } text-4xl laptop:text-3xl lg:text-2xl sm:text-xl`}
          >
            {name}
          </p>
          <p
            className={`${
              toggle ? "text-black" : "text-white"
            } text-2xl my-6 lg:text-xl lg:my-3 sm:text-lg`}
          >
            ${amount}
          </p>
          <div
            className={`items-center rounded-full ${
              action === "Bought" ? "bg-green-500" : "bg-red-500"
            } px-4 py-1 text-xs lg:px-3 lg:py-0 lg:text-[0.6rem]`}
          >
            {action}
          </div>
        </>
      )}
    </div>
  );
};

export default RecentComponent;
