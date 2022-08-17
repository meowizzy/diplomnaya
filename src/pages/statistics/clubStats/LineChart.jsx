import React from 'react'
import { Line } from 'react-chartjs-2';


export const LineChart = () => {
    const data = {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40,32,42,53,64,76],
          fill: false,
          borderColor: '#F58747',
          tension: 0.1
        }]
      };
      const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        gridLines: {
          drawBorder: true,
          display: false
      }
      };
  return (
    <div>
        <Line data={data} options={options}/>
    </div>
  )
}
