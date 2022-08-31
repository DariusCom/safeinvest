import EChartsReact from "echarts-for-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../features/stockApi/stockApiSlice";

const upColor = "#ec0000";
const upBorderColor = "#8A0000";
const downColor = "#00da3c";
const downBorderColor = "#008F28";

let letsTry = true;

const InvestingChart = ({ toggle }) => {
  const { data, isSuccess } = useSelector((state) => state.stockApi);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  function calculateMA(dayCount) {
    var result = [];
    for (
      var i = 0, len = data["stockInfoResponse"]["info"]["values"].length;
      i < len;
      i++
    ) {
      if (i < dayCount) {
        result.push("-");
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
        sum += +data["stockInfoResponse"]["info"]["values"][i - j][1];
      }
      result.push((sum / dayCount).toFixed(2));
    }
    return result;
  }

  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    backgroundColor: `${toggle ? "#fff" : "rgb(31 41 55)"}`,
    legend: {
      data: ["MA5", "MA10", "MA20", "MA30"],
      textStyle: {
        color: `${toggle ? "#000" : "#fff"}`,
      },
    },
    grid: {
      left: "12%",
      right: "5%",
      bottom: "15%",
      top: "8%",
    },
    xAxis: {
      type: "category",
      data: data["stockInfoResponse"]["info"]["categoryData"],
      boundaryGap: false,
      axisLine: { onZero: false },
      splitLine: { show: false },
      min: "dataMin",
      max: "dataMax",
    },
    yAxis: {
      scale: true,
      splitArea: {
        show: true,
      },
    },
    dataZoom: [
      {
        type: "inside",
        [`${letsTry && "start"}`]: `50`,
        [`${letsTry && "end"}`]: `100`,
      },
      {
        show: true,
        type: "slider",
        top: "90%",
        [`${letsTry && "start"}`]: `50`,
        [`${letsTry && "end"}`]: `100`,
      },
    ],
    animation: false,
    series: [
      {
        name: "stonks",
        type: "candlestick",
        data: data["stockInfoResponse"]["info"]["values"],
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor,
        },
      },
      {
        name: "MA5",
        type: "line",
        data: calculateMA(5),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
      {
        name: "MA10",
        type: "line",
        data: calculateMA(10),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
      {
        name: "MA20",
        type: "line",
        data: calculateMA(20),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
      {
        name: "MA30",
        type: "line",
        data: calculateMA(30),
        smooth: true,
        lineStyle: {
          opacity: 0.5,
        },
      },
    ],
  };

  return (
    <div
      className={`w-4/5 ${
        toggle ? "bg-white" : "bg-gray-800"
      } mb-5 py-5 h-1/5 relative laptop:w-3/4 tablet:w-full`}
    >
      <EChartsReact style={{ height: "550%" }} option={option} />
    </div>
  );
};

export default InvestingChart;
