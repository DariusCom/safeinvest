import { useState } from "react";
import ProfileChart from "../components/ProfileChart";
import ProfileCard from "../components/ProfileCard";
import Nav from "../components/Nav";
import RecentComponent from "../components/RecentComponent";
import ProfilePieChart from "../components/ProfilePieChart";
import Investment from "../components/Investment";
import { useSelector, useDispatch } from "react-redux";
import {
  reorderInvestments,
  getUserInfo,
  reset,
} from "../features/auth/authSlice";
import { useEffect } from "react";
import InvestmentInfo from "../components/InvestmentInfo";
import { motion } from "framer-motion";

const investmentItems = [
  "Name",
  "Ticker",
  "Total gain",
  "Shares",
  "Price",
  "Cost per share",
  "Market value",
  "% of portfolio",
];

const ProfilePage2 = () => {
  const [dataTime, setDataTime] = useState(0);
  const [selected, setSelected] = useState(0);
  const [toggle, setToggle] = useState(false);
  const { investments, recentActivity, info, chartData, isSuccess } =
    useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const reorder = (e, n) => {
    e.preventDefault();
    setSelected(n);
    dispatch(reorderInvestments(e.target.innerText.toLowerCase()));
  };

  const switchToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  return (
    <div>
      <Nav switchToggle={switchToggle} toggle={toggle} location="profile" />
      <div
        className={`${
          toggle ? "bg-slate-200" : "bg-slate-700"
        } flex flex-col px-10 pt-10 tablet:px-6 tablet:pt-8 sm:px-3`}
      >
        <div className="mb-12 flex justify-between tablet:mb-8 lg:flex-wrap">
          {info.map((data, i) => {
            return (
              <ProfileCard
                key={i}
                image={data.image}
                title={data.title}
                number={data.number}
                toggle={toggle}
              />
            );
          })}
        </div>
        <div className="flex justify-between mb-5 lg:flex-col">
          <div
            className={`w-3/5 ${
              toggle ? "bg-white" : "bg-gray-800"
            } rounded-2xl pb-5 px-4 relative laptop:w-[55%] lg:w-full lg:mb-5`}
          >
            <div
              className={`flex ${
                toggle
                  ? "text-slate-800 border-black"
                  : "text-white border-white"
              } text-white items-center justify-between px-8 py-7 mb-5 border-b-2 border-opacity-20 select-none laptop:px-6 lg:flex-col lg:py-5 sm:px-2`}
            >
              <p className="text-2xl w-1/2 lg:w-full lg:text-center lg:mb-6">
                Profit
              </p>
              <div className="flex items-center text-lg cursor-pointer laptop:text-[1rem] w-1/2 text-center lg:w-full">
                <div
                  className={`relative py-3 w-1/3 md:py-2`}
                  onClick={() => {
                    setDataTime(0);
                  }}
                >
                  {dataTime === 0 && (
                    <motion.div
                      layoutId="switch"
                      className={`absolute w-full h-full ${
                        toggle ? "bg-green-500" : "bg-green-700"
                      } rounded-lg top-0`}
                    ></motion.div>
                  )}
                  <p className="relative z-10">Day</p>
                </div>
                <div
                  className={`relative py-3 w-1/3 md:py-2`}
                  onClick={() => {
                    setDataTime(1);
                  }}
                >
                  {dataTime === 1 && (
                    <motion.div
                      layoutId="switch"
                      className={`absolute w-full h-full ${
                        toggle ? "bg-green-500" : "bg-green-700"
                      } rounded-lg top-0`}
                    ></motion.div>
                  )}
                  <p className="relative z-10">Week</p>
                </div>
                <div
                  className={`relative py-3 w-1/3 md:py-2`}
                  onClick={() => {
                    setDataTime(2);
                  }}
                >
                  {dataTime === 2 && (
                    <motion.div
                      layoutId="switch"
                      className={`switch absolute w-full h-full ${
                        toggle ? "bg-green-500" : "bg-green-700"
                      } rounded-lg top-0`}
                    ></motion.div>
                  )}
                  <p className="relative z-10">Month</p>
                </div>
              </div>
            </div>
            <ProfileChart
              data={chartData}
              dataTime={dataTime}
              toggle={toggle}
            />
          </div>
          <div
            className={`w-1/3 ${
              toggle ? "bg-white" : "bg-gray-800"
            } rounded-2xl pb-5 px-4 laptop:w-[40%] tablet:pb-0 lg:w-full lg:h-[400px]`}
          >
            <ProfilePieChart
              data={
                investments.length
                  ? investments
                      .reduce((prev, curr) => {
                        prev.push({ name: curr.name, value: curr.percent });
                        return prev;
                      }, [])
                      .sort((a, b) => b.value - a.value)
                  : [{ name: "No data", value: 100 }]
              }
              toggle={toggle}
            />
          </div>
        </div>
        <div className="my-5">
          <div
            className={`flex flex-col items-center ${
              toggle ? "bg-white" : "bg-gray-800"
            } rounded-xl pb-7`}
          >
            <h2
              className={`text-2xl ${
                toggle ? "text-black" : "text-white"
              } my-4`}
            >
              Recent Activity
            </h2>
            <div className="flex w-full overflow-x-auto">
              {recentActivity.map((data, i) => {
                return (
                  <RecentComponent
                    key={i}
                    name={data.name}
                    action={data.action}
                    amount={data.amount}
                    index={i}
                    toggle={toggle}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="my-6 overflow-x-auto rounded-lg">
          <table className="w-full">
            <thead>
              <tr>
                {investmentItems.map((item, i) => {
                  return (
                    <InvestmentInfo
                      key={i}
                      reorder={reorder}
                      selected={selected}
                      toggle={toggle}
                      name={item}
                      index={i}
                    />
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {investments.map((data, i) => {
                return (
                  <Investment
                    key={data.key}
                    name={data.name}
                    ticker={data.ticker}
                    gain={data.gain}
                    shares={data.shares}
                    price={data.price}
                    cps={data.cps}
                    value={data.value}
                    percent={data.percent}
                    index={[i, investments.length - 1]}
                    toggle={toggle}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage2;
