import React from 'react'
import { Pie } from 'react-chartjs-2';


export const PieChart = () => {
    const data = {
        labels: [
          
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [70, 30],
            backgroundColor: [
                "#3548F5",
              "#F58747",
            ],
            hoverOffset: 4
          }]
      };
  return (
    <div>
    <Pie data={data}/>
    </div>
  )
}
