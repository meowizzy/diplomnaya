import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Pagination } from '../../../../components/pagination/Pagination'
import { getApplicationById } from '../../../../redux/slices/applicationSlice'
import ss from '../../pageForSecretary/Applied.module.scss'
import s from '../newApplied/NewApplied.module.scss'

export const HistoryOfApplied = () => {
  const application = useSelector((state) => state.application.application);
  const dispatch = useDispatch()
  const toggle = (id) => {
    // setClickColor(true);
    dispatch(getApplicationById(id))
  };
  return (
    <div className={ss.cont}>
    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p>Отправитель</p>
      <p>Название заявки</p>
    </div>
    {application.map((el, index)=>(
      <NavLink
        key={index}
        to="/main/applied/historyOfApplied/detailedInformation"
        className={s.title}
        onClick={()=>toggle(el.id)}
      >
        <p className={s.first_p}>{index+1}</p>
        <p>{el.trainer.surname} {el.trainer.name} </p>
        <p>{el.event.name}</p>
      </NavLink>
      ))}
<Pagination />
  </div>
  )
}
