import React from "react";
import { Line } from "react-chartjs-2";

function Stock_chart(props) {
  var color;

  if (parseFloat(props.rate.replace(/\s*\(.*?\)\s*/g, "")) < 0) {
    color = "#f30606";
  } else {
    color = "#0fff1a";
  }

  // color = "#0fff1a";
  const data = {
    labels: props.ChartData[0].y,
    datasets: [
      {
        label: "First dataset",
        data: props.ChartData[0].x,
        fill: false,

        borderColor: color,
      },
    ],
  };
  return (
    <div style={{ height: "200px", width: "200px" }}>
      <Line
        data={data}
        options={{
          Responsive: true,
          legend: false,
        }}
      />
    </div>
  );
}

export default Stock_chart;
