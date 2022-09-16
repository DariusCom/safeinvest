import { useState } from "react";
import Nav from "../components/Nav";
import InvestingChart from "../components/InvestingChart";
import SearchModal from "../components/SearchModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset, getStockInfo } from "../features/stockApi/stockApiSlice";
import CompanyFinInfo from "../components/CompanyFinInfo";
import { updateUserInfo } from "../features/auth/authSlice";
import { v4 as uuidv4 } from "uuid";
import CompanyInformation from "../components/CompanyInformation";
import PacmanLoader from "react-spinners/PacmanLoader";
import { motion } from "framer-motion";

const calculations = (amount, data) => {
  let result = {};
  result["shares"] = amount[1];
  result["value"] = Math.floor(data * amount[1]);
  result["close"] = data;
  result["gain"] = [
    ((amount[0] - amount[0]) / amount[0]) * 100,
    (data - data) * amount[1],
  ];
  return result;
};

const InvestingPage = () => {
  const [toggle, setToggle] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [buySell, setBuySell] = useState("Buy");
  const [amountShare, setAmountShare] = useState([0, 0]);
  const { data, companyInfo, isSuccess, isChartLoading } = useSelector(
    (state) => state.stockApi
  );

  const toggleColors = ["border-gray-700", "border-gray-300"];

  const { recentActivity, investments, chartData, info, currentCompany } =
    useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const buyStock = (amountShare, data1) => {
    console.log(data1);
    if (amountShare[0] <= info[0].number) {
      let alreadyBought = false;
      let tempRecentActivity = [...recentActivity];
      let tempInvestments = [];
      for (let i = 0; i < investments.length; i++) {
        tempInvestments.push({ ...investments[i] });
      }
      let tempInfo = [
        { ...info[0] },
        { ...info[1] },
        { ...info[2] },
        { ...info[3] },
      ];
      tempRecentActivity.pop();
      tempRecentActivity.unshift({
        name: data1["symbol"],
        action: "Bought",
        amount: amountShare[0],
      });
      for (let i = 0; i < tempInvestments.length; i++) {
        if (tempInvestments[i]["ticker"] === data1["symbol"]) {
          alreadyBought = true;
          tempInfo[0].number -= amountShare[0];
          tempInfo[1].number += amountShare[0];
          tempInfo[2].number += amountShare[0];
          tempInvestments[i].shares = +(
            tempInvestments[i].shares + amountShare[1]
          ).toFixed(2);
          tempInvestments[i].price += amountShare[0];
          tempInvestments[i].cps = +(
            tempInvestments[i].price / tempInvestments[i].shares
          ).toFixed(2);
          tempInvestments[i].value = +(
            tempInvestments[i].value + amountShare[0]
          ).toFixed(2);
          tempInvestments[i].percent =
            tempInvestments[i].value / tempInfo[2].number;
          tempInvestments[i].gain = [
            +(
              ((tempInvestments[i].value - tempInvestments[i].price) /
                tempInvestments[i].price) *
              100
            ).toFixed(2),
            +(tempInvestments[i].value - tempInvestments[i].price).toFixed(2),
          ];
          break;
        }
      }
      if (!alreadyBought) {
        let financialInfo = calculations(
          amountShare,
          data1["info"]["values"][data1["info"]["values"].length - 1][1]
        );
        tempInfo[0].number -= amountShare[0];
        tempInfo[1].number += amountShare[0];
        tempInfo[2].number += amountShare[0];
        tempInvestments.push({
          name: currentCompany,
          ticker: data1["symbol"],
          shares: +financialInfo["shares"].toFixed(2),
          price: amountShare[0],
          cps: financialInfo["close"],
          value: Number(financialInfo["value"]),
          percent: +((amountShare[0] / tempInfo[1].number) * 100).toFixed(2),
          gain: financialInfo["gain"],
          key: uuidv4(),
        });
      }
      for (let i = 0; i < tempInvestments.length; i++) {
        tempInvestments[i].percent = Math.floor(
          (tempInvestments[i].value / tempInfo[2].number) * 100
        );
      }
      let userInfo = {
        investments: tempInvestments,
        recentActivity: tempRecentActivity,
        info: tempInfo,
      };
      dispatch(updateUserInfo(userInfo));
    }
  };

  const sellStock = (amountShare, data1) => {
    let tempRecentActivity = [...recentActivity];
    let tempInvestments = [];
    for (let i = 0; i < investments.length; i++) {
      tempInvestments.push({ ...investments[i] });
    }
    let tempInfo = [
      { ...info[0] },
      { ...info[1] },
      { ...info[2] },
      { ...info[3] },
    ];
    let tempChartData = [...chartData];
    for (let i = 0; i < tempInvestments.length; i++) {
      if (tempInvestments[i]["ticker"] === data1["symbol"]) {
        if (tempInvestments[i].value > amountShare[0]) {
          tempRecentActivity.pop();
          tempRecentActivity.unshift({
            name: data1["symbol"],
            action: "Sold",
            amount: amountShare[0],
          });
          console.log(tempInvestments[i].price);
          console.log(amountShare[0]);
          console.log(tempInvestments[i].gain[0]);
          console.log(
            tempInvestments[i].price -
              (amountShare[0] - amountShare[0] * tempInvestments[i].gain[0])
          );
          tempInvestments[i].price = +(
            tempInvestments[i].price -
            (amountShare[0] -
              (amountShare[0] * tempInvestments[i].gain[0]) / 100)
          ).toFixed(2);
          console.log(tempInvestments[i].price);
          tempInfo[2].number -= amountShare[0];
          tempInfo[1].number -= amountShare[0];
          tempInfo[0].number += amountShare[0];
          tempInvestments[i].shares = +(
            tempInvestments[i].shares - amountShare[1]
          ).toFixed(2);
          tempInvestments[i].cps = +(
            tempInvestments[i].price / tempInvestments[i].shares
          ).toFixed(2);
          tempInvestments[i].value = +(
            tempInvestments[i].value - amountShare[0]
          ) // tempInvestments[i].cps * tempInvestments[i].shares
            .toFixed(2);
          tempInvestments[i].percent =
            tempInvestments[i].value / tempInfo[2].number;
          tempInvestments[i].gain = [
            +(
              ((tempInvestments[i].value - tempInvestments[i].price) /
                tempInvestments[i].price) *
              100
            ).toFixed(2),
            +(tempInvestments[i].value - tempInvestments[i].price).toFixed(2),
          ];
        } else if (tempInvestments[i].value === amountShare[0]) {
          tempRecentActivity.pop();
          tempRecentActivity.unshift({
            name: data1["symbol"],
            action: "Sold",
            amount: amountShare[0],
          });
          tempInvestments.splice(i, 1);
          tempInfo[2].number -= amountShare[0];
          tempInfo[1].number -= amountShare[0];
          tempInfo[0].number += amountShare[0];
        }
        for (let i = 0; i < tempInvestments.length; i++) {
          tempInvestments[i].percent = Math.floor(
            (tempInvestments[i].value / tempInfo[2].number) * 100
          );
        }
        let userInfo = {
          investments: tempInvestments,
          recentActivity: tempRecentActivity,
          info: tempInfo,
          chartData: tempChartData,
        };
        dispatch(updateUserInfo(userInfo));
        break;
      }
    }
  };

  const switchToggle = () => {
    setToggle(!toggle);
  };

  const switchPopUp = () => {
    setPopUp(!popUp);
  };

  const onChange = (e) => {
    let closeAmount =
      data["stockInfoResponse"]["info"]["values"][
        data["stockInfoResponse"]["info"]["values"].length - 1
      ][1];
    let buyingAmount = e.target.valueAsNumber;
    setAmountShare([buyingAmount, +(buyingAmount / closeAmount).toFixed(2)]);
  };

  const correctDispatch = () => {
    let data1 = data["stockInfoResponse"];
    if (buySell === "Buy") {
      buyStock(amountShare, data1);
    } else {
      sellStock(amountShare, data1);
    }
  };

  if (!data["financialResponse"]) {
    dispatch(getStockInfo("IBM"));
  }

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  return (
    <div>
      <Nav switchToggle={switchToggle} toggle={toggle} location="invest" />
      <div
        className={`flex ${toggle ? "bg-white" : "bg-gray-800"} ${
          toggleColors[+toggle]
        } border-y-4 tablet:flex-col`}
      >
        {!isChartLoading ? (
          <InvestingChart toggle={toggle} />
        ) : (
          <div className="w-4/5 flex justify-center items-center text-white text-3xl">
            <PacmanLoader
              loading={isChartLoading}
              color="#67c9aa"
            ></PacmanLoader>
          </div>
        )}
        <div
          className={`w-1/4 ${toggle ? "bg-white" : "bg-gray-800"} ${
            toggleColors[+toggle]
          } flex flex-col items-center pt-7 border-l-4 tablet:flex-row tablet:w-full tablet:pt-0 tablet:px-0 tablet:border-l-0 tablet:border-t-4 lg:flex-col`}
        >
          <div className="w-5/6 tablet:w-[30%] tablet:px-4 lg:w-full lg:pt-6">
            <button
              onClick={switchPopUp}
              className={`${
                toggle
                  ? "bg-green-500 hover:bg-green-400"
                  : "bg-green-700 hover:bg-green-600"
              } rounded-lg py-2 w-full`}
            >
              Search
            </button>
          </div>
          <div
            className={`w-full px-7 border-b-4 ${toggleColors[+toggle]} ${
              toggle ? "text-black" : "text-white"
            } tablet:border-b-0 tablet:border-x-4 tablet:w-[40%] lg:w-full lg:border-x-0 lg:border-b-4`}
          >
            <div
              className={`flex flex-col items-center ${
                toggle ? "bg-slate-200" : "bg-slate-700"
              } w-full mt-9 mb-6`}
            >
              <div className="flex text-3xl items-center w-full select-none">
                <div
                  onClick={() => {
                    setBuySell("Buy");
                  }}
                  className={`relative cursor-pointer ${
                    toggle ? "bg-white" : "bg-slate-800"
                  } w-1/2 text-center py-2`}
                >
                  {buySell === "Buy" && (
                    <motion.div
                      layoutId="action"
                      className={`absolute w-full h-full ${
                        toggle ? "bg-slate-200" : "bg-slate-700"
                      } top-0`}
                    ></motion.div>
                  )}
                  <p className="relative z-20">BUY</p>
                </div>
                <div
                  onClick={() => {
                    setBuySell("Sell");
                  }}
                  className={`relative cursor-pointer ${
                    toggle ? "bg-white" : "bg-slate-800"
                  } w-1/2 text-center py-2`}
                >
                  {buySell === "Sell" && (
                    <motion.div
                      layoutId="action"
                      className={`absolute w-full h-full ${
                        toggle ? "bg-slate-200" : "bg-slate-700"
                      } top-0`}
                    ></motion.div>
                  )}
                  <p className="relative z-20">SELL</p>
                </div>
              </div>
              <div className="flex flex-col my-10 w-[90%] laptop:my-7">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  min={1}
                  onChange={onChange}
                  id="amount"
                  className="py-1 rounded-xl px-3 mb-3 text-gray-700"
                />
                <label htmlFor="shares">Shares</label>
                <input
                  type="number"
                  id="shares"
                  placeholder={amountShare[1]}
                  disabled
                  className="py-1 rounded-xl px-3 bg-white text-gray-700"
                />
              </div>
              <button
                onClick={correctDispatch}
                className={`w-full ${
                  buySell === "Buy"
                    ? `${
                        toggle
                          ? "bg-green-500 hover:bg-green-400"
                          : "bg-green-700 hover:bg-green-600"
                      }`
                    : `${
                        toggle
                          ? "bg-red-500 hover:bg-red-400"
                          : "bg-red-700 hover:bg-red-600"
                      }`
                } py-2 text-xl`}
              >
                {buySell}
              </button>
            </div>
          </div>
          <div className="flex justify-center w-5/6 items-center h-full tablet:w-[30%] tablet:px-4 lg:w-full lg:py-6 lg:text-center">
            {data["financialResponse"] ? (
              <CompanyFinInfo
                data={data["financialResponse"]}
                years={Object.keys(data["financialResponse"])}
                toggle={toggle}
              />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`flex ${
          toggle ? "bg-white" : "bg-gray-800"
        } px-10 py-10 lg:px-0`}
      >
        <div className="flex justify-center items-center w-full px-10 lg:px-4">
          {companyInfo["companyInfo"] ? (
            <CompanyInformation companyInfo={companyInfo} toggle={toggle} />
          ) : (
            <div className="text-stone-300 bg-slate-700 flex justify-center items-center h-72 text-xl w-full rounded-lg px-10 text-center">
              <p>No information about the company was found</p>
            </div>
          )}
        </div>
      </div>
      {popUp && <SearchModal switchPopUp={switchPopUp} />}
    </div>
  );
};

export default InvestingPage;
