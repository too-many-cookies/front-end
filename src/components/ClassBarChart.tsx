import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { GraphData } from "../interfaces";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  height: 375px;
  width: 700px;
`;

const ClassBarChart = (graphData: GraphData) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Failed Logins Per Class",
        font: {
          size: 20
        }
      },
    },
  };
  console.log(graphData)
  return (
    <ChartWrapper>
      <Bar options={options} datasetIdKey='label' data={graphData} />
    </ChartWrapper>
  );
};

export default ClassBarChart;
