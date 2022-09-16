const Investment = ({
  name,
  ticker,
  gain,
  shares,
  price,
  cps,
  value,
  percent,
  index,
  toggle,
}) => {
  const positive = gain[0] >= 0;

  const border = `border-b-2 ${
    toggle ? "border-black" : "border-white"
  } border-opacity-20`;

  return (
    <tr
      className={`text-center ${
        toggle ? "bg-white text-black" : "bg-gray-800 text-white"
      } ${index[0] !== index[1] ? border : ""} lg:text-sm sm:text-xs`}
    >
      <th
        className={`py-2 px-8 sticky left-0 z-10 ${
          toggle ? "bg-white" : "bg-gray-800"
        } sm:px-5`}
      >
        {name}
      </th>
      <td className="py-2 px-8 sm:px-5">{ticker}</td>
      <td className="flex flex-col justify-around py-2 px-8 sm:px-5">
        <p className={`${positive ? "text-lime-400" : "text-red-500"}`}>
          {positive ? "+" : ""}
          {gain[0]}%
        </p>
        <p className={`${positive ? "text-lime-400" : "text-red-500"}`}>
          {positive ? "+" : ""}${gain[1]}
        </p>
      </td>
      <td className="py-2 px-8 sm:px-5">{shares}</td>
      <td className="py-2 px-8 sm:px-5">${price}</td>
      <td className="py-2 px-8 sm:px-5">${cps}</td>
      <td className="py-2 px-8 sm:px-5">${value}</td>
      <td className="py-2 px-8 sm:px-5">{percent}%</td>
    </tr>
  );
};

export default Investment;
