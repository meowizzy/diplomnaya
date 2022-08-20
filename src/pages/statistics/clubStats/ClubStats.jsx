import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from '../../../components/input/Input'
import { Pagination } from '../../../components/pagination/Pagination'
import { search_icon } from '../../../images'
import { getClub, getClubs } from '../../../redux/slices/clubSlice'
import s from "../Statistics.module.scss"

export const ClubStats = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getClubs())
  },[])

  const getClubById = (id)=>{
    dispatch(getClub(id))
  }

  const clubs = useSelector(state=>state.clubs.clubs)
  console.log(clubs)
  return (
    <div className={s.table_content}>
    <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>

    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p className={s.name}>Клуб </p>
      <p>Кол-во спортсменов</p>
    
    </div>
    {clubs.map((el,index)=>(
    <Link to="/main/statistics/clubStats/clubStatsMore" key={index} onClick={()=>getClubById(el.id)}>
      <div className={s.title}>
        <p className={s.first_p}>{index+1}</p>
        <p className={s.name}>{el.name}</p>
        <p>{el.sum_of_people}</p>
        
      </div>
    </Link>
    ))}
    <Pagination />
  </div>
  )
}
