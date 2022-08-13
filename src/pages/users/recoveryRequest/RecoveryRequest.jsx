import React from "react";
import { Link } from "react-router-dom";
import s from'./RecoveryRequest.module.scss'
import ss from './RecoveryRequest.module.scss'

export const RecoveryRequest = () => {
  return (
    <div className={ss.table_content}>
      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Почта</p>
        <p>Обращение</p>
      </div>
      <Link to="/main/users/recoveryRequest/recoveryInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Admin111@gmal.com </p>
          <p className={s.last_p}>Помогите, пожалуйста, восстановить пароль</p>
        </div>
      </Link>
    </div>
  );
};
