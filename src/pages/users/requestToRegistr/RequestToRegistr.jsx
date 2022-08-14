import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./RequestToRegistr.module.scss";
import ss from '../registered/Registered.module.scss'
import { getAllUser, getUserById } from "../../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";


export const RequestToRegistr = () => {
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
    <div className={ss.table_content}>
      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Номер телефона</p>
        <p>Почта</p>
      </div>
     {user.map((el,index)=>(
      <Link to="/main/users/requestToRegistr/requestUserInfo" key={index} onClick={()=>getId(el.id)}>
        <div className={s.title}>
          <p className={s.first_p}>{index+1}</p>
          <p>{el.name}</p>
          <p>{el.surname}</p>
          <p>{el.number}</p>
          <p>{el.email}</p>
        </div>
      </Link>
      ))}
    </div>
  );
};
