import React, { useEffect } from 'react'
import Input from '../../../../components/input/Input'
import { Pagination } from '../../../../components/pagination/Pagination'
import { search_icon } from '../../../../images'
import s from './SubmittedApplications.module.scss'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getApplicationById, getHistoryApplication } from '../../../../redux/slices/applicationSlice'
import moment from 'moment'
export const SubmittedApplications = () => {
  const dispatch = useDispatch()
  useEffect((data={id:localStorage.getItem('userId'), date:moment().format()})=>{
    dispatch(getHistoryApplication(data))
  },[])

  const getId = (id) =>{
    dispatch(getApplicationById(id))
  }
  const history = useSelector(state=>state.application)
  // console.log(current.currentApplication[0].application_athlete[0].athlete.club.name)
  console.log(history.historyApplication)
  return (
    <div className={s.table_content}>
    <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>

    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p className={s.name}>Название </p>
      <p>Дата</p>
      <p>Спортсмены</p>
      <p>Клуб</p>
    </div>
    {history.statusById==="resolved"?history.historyApplication.map((el,index)=>(
    <Link to="/main/application/submittedApplications/detail" key={index} onClick={()=>getId(el.id)}>
      <div className={s.title}>
        <p className={s.first_p}>1</p>
        <p className={s.name}>{el?.event.name}</p>
        <p>{el?.event.start_datetime}</p>
        <p>{el?.application_athlete.length}</p>
        <p>{el?.application_athlete[0]?.athlete?.club.name}</p>
      </div>
    </Link>)):<p>loading...</p>}
    <Pagination />
  </div>
  )
}
