import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from '../../../components/input/Input'
import { Pagination } from '../../../components/pagination/Pagination'
import { search_icon } from '../../../images'
import { getAthletes } from '../../../redux/slices/athletesSlice'
import { getSportsman } from '../../../redux/slices/sportsmenSlice'
import s from '../Statistics.module.scss'

export const InfoAthletes = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAthletes())
  },[])

  const athletes = useSelector(state=>state.athletes.athletes)
  console.log(athletes)

  const getSportsmenById = (id)=>{
    dispatch(getSportsman(id))
  }

  return (
    <div className={s.table_content}>
         <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>
    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p className={s.name}>ФИО спортсмена </p>
      <p className={s.name}>Название клуба</p>
      <p>Возраст</p>
      <p>ОФП</p>
    </div>
    {athletes.map((el,index)=>(
    <Link to="/main/statistics/clubStats/InfoAthletesMore" key={index} onClick={()=>getSportsmenById(el.id)}>
      <div className={s.title}>
        <p className={s.first_p}>{index+1}</p>
        <p className={s.name}>{el.surname} {el.name}</p>
        <p className={s.name}>{el.club.name}</p>
        <p>{el.age}</p>
        <p>{el.average_of_PHI}</p>
      </div>
    </Link>
    ))}
    <Pagination />
  </div>
  )
}
