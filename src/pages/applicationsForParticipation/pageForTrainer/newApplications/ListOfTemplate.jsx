import React, { useEffect } from 'react'
import Input from '../../../../components/input/Input'
import { search_icon } from '../../../../images'
import s from '../submittedApplications/SubmittedApplications.module.scss'
import {Link} from 'react-router-dom'
import { Pagination } from '../../../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getApplicationTemplate, getApplicationTemplateById } from '../../../../redux/slices/applicationSlice'

export const ListOfTemplate = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getApplicationTemplate())
    },[])
    const template = useSelector(state=>state.application.applicationTemplate)
    console.log(template)
    const getTemplateById = (id) =>{
        dispatch(getApplicationTemplateById(id))
    }
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
      <p>Адрес</p>
    </div>
    {template.map((el,index)=>(
    <Link to="/main/application/listOfTemplate/newApplications" key={index} onClick={()=>getTemplateById(el.id)}>
      <div className={s.title}>
        <p className={s.first_p}>{index+1}</p>
        <p className={s.name}>{el.event?.name}</p>
        <p>{el.event?.start_datetime}</p>
        <p>{el.event?.place}</p>
      </div>
    </Link>
    ))}
    <Pagination />
  </div>
  )
}
