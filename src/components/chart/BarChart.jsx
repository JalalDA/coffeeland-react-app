import React from 'react'
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index as const',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  {
    id : 1,
    year : 2016,
    userGain : 8000,
    userLost : 1200
},
{
    id : 2,
    year : 2017,
    userGain : 4000,
    userLost : 400
},
{
    id : 3,
    year : 2018,
    userGain : 7500,
    userLost : 650
},
{
    id : 4,
    year : 2019,
    userGain : 9000, 
    userLost : 6000
},
{
    id : 5,
    year : 2020,
    userGain : 10000,
    userLost : 8000
}
];

export const data = {
  labels : [labels.map(data=>data.year)],
  datasets: [{
    label : "User Gain",
    data : labels.map(data=>data.userGain)
  }],
};


const BarChart = () => {
  return (
    <Bar data={data} options={options}/>
  )
}

export default BarChart