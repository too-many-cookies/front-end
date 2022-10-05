import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { GraphData } from "../interfaces";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  height: 350px;
`;

const Donut = (graphData: GraphData, title: string) => {
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
      <Doughnut options={options} data={graphData} />
    </ChartWrapper>
  );
};

export default Donut;
