import { useRef } from "react";
import SearchResult from "./SearchResult";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, reset } from "../features/stockApi/stockApiSlice";
import GridLoader from "react-spinners/GridLoader";
import { useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const SearchModal = ({ switchPopUp }) => {
  const dispatch = useDispatch();

  const searchInput = useRef("");
  const { companies, isSuccess, isCompaniesLoading } = useSelector(
    (state) => state.stockApi
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(getCompanies(searchInput.current.value.toUpperCase()));
  };

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full h-screen top-0 left-0 bg-black bg-opacity-50 z-30"
    >
      <div
        onClick={switchPopUp}
        className="fixed w-full h-screen top-0 left-0 z-10"
      ></div>
      <div
        className={`overflow-auto relative w-[70%] mt-[calc(100vh-85vh-20px)] my-0 mx-auto max-h-[70vh] min-h-[70vh] bg-white rounded-2xl p-5 z-40 tablet:w-[80%] md:w-[90%]`}
      >
        <span
          onClick={switchPopUp}
          className="cursor-pointer fixed right-2 top-2 text-lg"
        >
          x
        </span>
        <form
          onSubmit={onSubmit}
          className="flex justify-center w-full mb-8 mt-4"
        >
          <input
            ref={searchInput}
            type="text"
            placeholder="Symbol"
            className="w-1/3 border-2 border-black border-opacity-20 rounded-l-2xl py-2 px-4 tablet:w-1/2 lg:w-2/3"
          />
          <button
            type="submit"
            className="px-3 border-2 border-black border-opacity-20 py-2 bg-blue-400 rounded-r-2xl hover:bg-blue-300 lg:px-1 lg:text-sm"
          >
            Search
          </button>
        </form>
        <div className={`w-full  select-none cursor-pointer rounded-md`}>
          {isCompaniesLoading ? (
            <div className="flex justify-center items-center max-h-[50vh] min-h-[40vh]">
              <GridLoader color="#67c9aa" loading={isCompaniesLoading} />
            </div>
          ) : companies.length ? (
            companies.map((match) => {
              return (
                <SearchResult
                  name={match["name"]}
                  symbol={match["symbol"]}
                  type={match["type"]}
                  switchPopUp={switchPopUp}
                />
              );
            })
          ) : (
            <div className="max-h-[50vh] min-h-[40vh] flex justify-center items-center">
              {isSuccess ? "No companies found" : ""}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SearchModal;
