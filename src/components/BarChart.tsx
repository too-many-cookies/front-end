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
  width: 375px;
`;

const BarChart = (graphData: GraphData, title: string) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: title,
      },
    },
  };

  return (
    <ChartWrapper>
      <Bar options={options} datasetIdKey='label' data={graphData} />
    </ChartWrapper>
  );
};

export default BarChart;
