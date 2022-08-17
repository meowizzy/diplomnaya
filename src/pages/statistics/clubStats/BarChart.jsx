import React from 'react'
import { Bar } from 'react-chartjs-2';
import s from "../Statistics.module.scss"


export const BarChart = () => {
    const data = {
        labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40,32,42,12,51,21],
          backgroundColor: [
            'rgb(255, 159, 64)',
            'color:"#D9D9D9"',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            // 'rgb(255, 99, 132)',
            // 'rgb(255, 205, 86)',
            // 'rgb(75, 192, 192)',
            // 'rgb(54, 162, 235)',
            // 'rgb(153, 102, 255)',
            // 'rgb(201, 203, 207)'
          ],
          borderRadius:50,
          borderWidth: 1
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
    <div className={s.bar_chart}>
    <Bar data={data} options={options}/>
        
    </div>
  )
}
