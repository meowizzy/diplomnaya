import React from 'react'
import s from '../Statistics.module.scss'
// import { Bar } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';


export const ProgressStats = () => {
  const data = {
    labels: [
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 32, 42, 12, 51, 21],
        backgroundColor: "rgb(255, 159, 64)",
        borderColor: "rgb(255, 159, 64)",
        borderWidth:1,
        borderRadius: 50,
      },
    ],
    legend: {
      display: false
   },
   tooltips: {
      enabled: false
}
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
    <>
        <p className={s.top_text}>  
         Общая статистика по ОФП клубов
        </p>

    <Bar data={data} options={options}/>
    
    <p className={s.bot_text}>Сведения по годам</p>
    </>
  )
}
