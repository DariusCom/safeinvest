import { useDispatch } from "react-redux";
import { getStockInfo } from "../features/stockApi/stockApiSlice";
import { changeCompany } from "../features/auth/authSlice";

const SearchResult = ({ name, symbol, type, switchPopUp }) => {
  const dispatch = useDispatch();

  const onClick = (symbol, name) => {
    dispatch(changeCompany(name));
    dispatch(getStockInfo(symbol));
    switchPopUp();
  };

  return (
    <div
      onClick={() => onClick(symbol, name)}
      className="flex px-10 py-2 shadow-md hover:scale-[101%] transition-all text-lg text-black lg:text-base lg:px-6 sm:text-sm sm:px-4"
    >
      <div className="w-5/6">
        <p>{name}</p>
        <p>{symbol}</p>
      </div>
      <div className="flex flex-col items-center w-1/6">
        <p>{type}</p>
      </div>
    </div>
  );
};

export default SearchResult;
