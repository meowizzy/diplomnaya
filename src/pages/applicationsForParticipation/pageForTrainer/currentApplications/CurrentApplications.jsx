import React, { useEffect } from 'react'
import Input from '../../../../components/input/Input'
import s from '../submittedApplications/SubmittedApplications.module.scss'
import {Link} from 'react-router-dom'
import { search_icon } from '../../../../images'
import { Pagination } from '../../../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicationById, getCurrentApplication } from '../../../../redux/slices/applicationSlice'
import moment from 'moment'

export const CurrentApplications = () => {
  const dispatch = useDispatch()
  // data={id:localStorage.getItem('userId'), date:moment().format()}
  useEffect((data={id:localStorage.getItem('userId'), date:moment().format()})=>{
    dispatch(getCurrentApplication(data))
  },[])

  const getId=(id)=>{
    dispatch(getApplicationById(id))
  }
  const current = useSelector(state=>state.application)
  // console.log(current.currentApplication[0].application_athlete[0].athlete.club.name)
  console.log(current.currentApplication)
  return (
    <div className={s.table_content}>
    <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>

    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p className={s.name}>Название </p>
      <p className={s.date}>Дата</p>
      <p>Спортсмены</p>
      <p>Клуб</p>
    </div>
    {current.statusById==="resolved"?current.currentApplication.map((el,index)=>(
    <Link to="/main/application/currentApplications/detail" key={index} onClick={()=>getId(el.id)}>
      <div className={s.title}>
        <p className={s.first_p}>{index+1}</p>
        <p className={s.name}>{el?.event.name}</p>
        <p className={s.date}>{el?.event.start_datetime}</p>
        <p>{el?.application_athlete.length}</p>
        <p>{el?.application_athlete[0]?.athlete?.club.name}</p>
      </div>
    </Link>
    )):<p>loading...</p>}
    <Pagination />
  </div>
  )
}
