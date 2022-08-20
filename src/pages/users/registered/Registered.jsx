import React, { useEffect } from "react";
import Input from "../../../components/input/Input";
import { Pagination } from "../../../components/pagination/Pagination";
import s from "./Registered.module.scss";
import { Link } from "react-router-dom";
import { search_icon } from "../../../images";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, getUserById } from "../../../redux/slices/userSlice";

export const Registered = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllUser())
  },[])
  const user = useSelector(state=>state.user.allUser)

  const getId =(id)=>{
    dispatch(getUserById(id))
    // localStorage.setItem("idForUser", id)
  }
  return (
    <div className={s.table_content}>
      <div className={s.search}>
        <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
          <img className={s.search_icon} src={search_icon} alt="wrong"/>
      </div>

      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Должность</p>
        <p>Почта</p>
      </div>
      {user.map((el,index)=>(
      <Link to="/main/users/registered/userInfo" key={index} onClick={()=>getId(el.id)}>
        <div className={s.title}>
          <p className={s.first_p}>{index+1}</p>
          <p>{el.name}</p>
          <p>{el.surname}</p>
          <p>{el.is_judge?"Судья":el.is_assistant?"Секретарь":"Тренер"}</p>
          <p>{el.email}</p>
        </div>
      </Link>
      ))}
      <Pagination />
    </div>
  );
};
