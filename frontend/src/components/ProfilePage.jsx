import { useState } from "react";
import ProfileChart from "./ProfileChart";
import ProfileCard from "./ProfileCard";
import ProfileNav from "./ProfileNav";
import RecentComponent from "./RecentComponent";

const data = [
  [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
  [
    {
      name: "1",
      uv: 2000,
      pv: 400,
      amt: 900,
    },
    {
      name: "2",
      uv: -1000,
      pv: 3980,
      amt: 2210,
    },
    {
      name: "3",
      uv: 3400,
      pv: 6400,
      amt: 2090,
    },
    {
      name: "4",
      uv: -500,
      pv: 3208,
      amt: 2000,
    },
    {
      name: "5",
      uv: 200,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6",
      uv: 2250,
      pv: 3020,
      amt: 1500,
    },
    {
      name: "7",
      uv: -1100,
      pv: 4300,
      amt: 2100,
    },
  ],
  [
    {
      name: "Mon",
      uv: 1500,
      pv: 1400,
      amt: 2000,
    },
    {
      name: "Tue",
      uv: -2500,
      pv: 1100,
      amt: 3210,
    },
    {
      name: "Wed",
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Thu",
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Fri",
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Sat",
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sun",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
];

const info = [
  {
    image: "available.png",
    title: "Amount available",
    number: 946654,
  },
  {
    image: "invested.png",
    title: "Amount invested",
    number: 53346,
  },
  {
    image: "currentPositive.png",
    title: "Current Value",
    number: 58423,
  },
  {
    image: "ROI.png",
    title: "ROI",
    number: "+9.51%",
  },
];

const recentActivity = [
  {
    name: "Apple Inc (AAPL)",
    action: "Bought",
    amount: 5000,
  },
  {
    name: "Microsoft (MSFT)",
    action: "Bought",
    amount: 3500,
  },
  {
    name: "Netflix Inc (NFLX)",
    action: "Sold",
    amount: 7500,
  },
  {
    name: "GameStop Corp (GME)",
    action: "Bought",
    amount: 1250,
  },
  {
    name: "Tesla Inc (TSLA)",
    action: "Sold",
    amount: 15000,
  },
];

const optionStyle = "bg-green-700 rounded-lg";

const ProfilePage = () => {
  const [option, setOption] = useState(0);

  return (
    <>
      <ProfileNav />
      <div className=" bg-slate-700 flex">
        <div className="px-6 w-3/4 pt-12">
          <div className="mb-12 flex justify-between">
            {info.map((data) => {
              return (
                <ProfileCard
                  image={data.image}
                  title={data.title}
                  number={data.number}
                />
              );
            })}
          </div>
          <div className="w-full bg-gray-800 mb-5 rounded-2xl pb-5 px-4">
            <div className="flex justify-between text-white items-center px-8 py-7 mb-5 border-b-2 border-white border-opacity-20 select-none">
              <p className="text-2xl">Profit</p>
              <div className="flex items-center text-lg cursor-pointer">
                <p
                  className={`${option === 0 ? optionStyle : ""} p-2`}
                  onClick={() => {
                    setOption(0);
                  }}
                >
                  Month
                </p>
                <p
                  className={`mx-7 ${option === 1 ? optionStyle : ""} p-2`}
                  onClick={() => {
                    setOption(1);
                  }}
                >
                  Week
                </p>
                <p
                  className={`${option === 2 ? optionStyle : ""} p-2`}
                  onClick={() => {
                    setOption(2);
                  }}
                >
                  Day
                </p>
              </div>
            </div>
            <ProfileChart data={data} option={option} />
          </div>
        </div>
        <div className="w-1/4">
          <div className="flex flex-col items-center bg-gray-800 rounded-l-xl">
            <h2 className="text-2xl text-white">Recent Activity</h2>
            <div className="flex flex-col w-full items-center">
              {recentActivity.map((data, i) => {
                return (
                  <RecentComponent
                    name={data.name}
                    action={data.action}
                    amount={data.amount}
                    index={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
