import EChartsReact from "echarts-for-react";

const ProfilePieChart = ({ data, toggle }) => {
  let option = {
    title: {
      text: "Investments",
      left: "center",
      textStyle: {
        color: `${toggle ? "#000" : "#fff"}`,
      },
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Investments",
        type: "pie",
        radius: "70%",
        label: {
          position: "inside",
          color: `#000`,
        },
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <EChartsReact
      style={{ height: "100%", paddingTop: "2.25rem" }}
      option={option}
    />
  );
};

export default ProfilePieChart;
