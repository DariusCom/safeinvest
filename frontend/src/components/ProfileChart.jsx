import EChartsReact from "echarts-for-react";

const ProfileChart = ({ data, dataTime, toggle }) => {
  // To implement the above chart you just have to redo how chartData is storing the data, and you have to make it to have 2 arrays
  // for each one of the 3 arrays, and the first array should be the names and the second one should be the values

  const gradientOffset = () => {
    const dataMax = Math.max(...data[dataTime]["values"]);
    const dataMin = Math.min(...data[dataTime]["values"]);

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  let option = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data[dataTime]["names"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data[dataTime]["values"],
        type: "line",
        symbol: "circle",
        symbolSize: 5,
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: off,
                color: `${toggle ? "#63c788" : "green"}`, // color at 0%
              },
              {
                offset: off,
                color: `${toggle ? "#c7636d" : "red"}`, // color at 100%
              },
            ],
          },
          opacity: 1,
        },
        emphasis: {
          disabled: true,
        },
        lineStyle: {
          color: `${toggle ? "#000" : "#fff"}`,
          width: 1,
        },
        itemStyle: {
          color: `${toggle ? "#000" : "#fff"}`,
          borderWidth: 0,
        },
      },
    ],
  };

  return (
    <>
      <EChartsReact option={option} />
      {/* {data[option].length === 0 && (
        <div className="absolute top-[55%] left-[42%] text-white text-2xl">
          No data yet
        </div>
      )} */}
    </>
  );
};

export default ProfileChart;
