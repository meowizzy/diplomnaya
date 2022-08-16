import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Checkbox } from '../../../../components/checkbox/Checkbox'
import Input from '../../../../components/input/Input'
import { Pagination } from '../../../../components/pagination/Pagination'
import { search_icon } from '../../../../images'
import { getTrainerUser } from '../../../../redux/slices/userSlice'
import s from './SendTemplate.module.scss'

export const SendTemplate = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTrainerUser())
  },[])

  const trainers = useSelector(state=>state.user.userTrainer)
  console.log(trainers)
  const [check, setCheck] = useState([])
  console.log(check)
  const onChange = (value)=>{
    setCheck(check.push({ user: value }));
  }
  return (
    <div className="cont">
    <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>

    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p>Тренер</p>
      <p>Номер</p>
      <p>Клуб</p>
      <p>Отправить всем</p>
      <Checkbox />
    </div>

      {trainers.map((el, index)=>(
      <div className={s.title} key={index}>
        <p className={s.first_p}>{index+1}</p>
        <p>{el.name}</p>
        <p>{el.number}</p>
        <p>Золотой дракон</p>
        <p>Отправить</p>
        <Checkbox value={el.id} onChange={(e)=>onChange(e.target.value)}/>
      </div>
      ))}
    <Pagination />
  </div>
  )
}
