import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import s from './NotRegistered.module.scss'

export const Role = () => {

  const navigate=useNavigate()
    const trainerSignIn = () => {
      // localStorage.removeItem('role')
      navigate("/main/events");
      localStorage.setItem("role", "trainer");
    };
    const adminSignIn = () => {
      navigate("/main/events");
      localStorage.setItem("role", "admin");
    };
    const refereeSignIn = () => {
      navigate("/main/events");
      localStorage.setItem("role", "referee");
    };
    const secretarySignIn = () => {
      navigate("/main/events");
      localStorage.setItem("role", "secretary");
    };

  return (
    <div className={s.role}>
        <p className={s.choise}>Как ты хочешь войти?</p>
        <div className={s.roles}>
        <p onClick={trainerSignIn}>Тренер</p>
        <p onClick={refereeSignIn}>Главный судья</p>
        <p onClick={secretarySignIn}>Секретарь</p>
        <p onClick={adminSignIn}>Админ</p>
        </div>
    </div>
  )
}
