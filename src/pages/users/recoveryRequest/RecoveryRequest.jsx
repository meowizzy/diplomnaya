import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import s from'./RecoveryRequest.module.scss'
import ss from './RecoveryRequest.module.scss'
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getFeedback, getFeedbackById } from "../../../redux/slices/userSlice";

export const RecoveryRequest = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getFeedback())
  },[])

  const feedUser = useSelector(state=>state.user.feedBackUsers)
  console.log(feedUser)

  const getId = (id) =>{
    dispatch(getFeedbackById(id))
  }
  return (
    <div className={ss.table_content}>
      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Почта</p>
        <p>Обращение</p>
      </div>
      {feedUser.map((el,index)=>(
      <Link to="/main/users/recoveryRequest/recoveryInfo" key={index} onClick={()=>getId(el.id)}>
        <div className={s.title}>
          <p className={s.first_p}>{index+1}</p>
          <p>{el.email}</p>
          <p className={s.last_p}>{el.text}</p>
        </div>
      </Link>
      ))}
    </div>
  );
};
