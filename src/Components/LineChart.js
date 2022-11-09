import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {

  const data = {
    labels: props.datax,
    datasets: [
      {
        label: props.GraphLabel,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: props.datay,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;