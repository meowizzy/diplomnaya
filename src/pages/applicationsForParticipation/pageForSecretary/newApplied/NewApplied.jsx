import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Pagination } from "../../../../components/pagination/Pagination";
import ss from "../../pageForSecretary/Applied.module.scss";
import s from "./NewApplied.module.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getApplication, getApplicationById } from "../../../../redux/slices/applicationSlice";


export const NewApplied = () => {
  const dispatch = useDispatch();
  const [clickColor, setClickColor] = useState(false);
  const toggle = (id) => {
    setClickColor(true);
    dispatch(getApplicationById(id))
  };

  useEffect(() => {
    dispatch(getApplication());
  }, []);
  const application = useSelector((state) => state.application.application);
  const applicationById = useSelector(state=>state.application.applicationById)
  console.log(applicationById)
  // console.log(application);
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
        to="/main/applied/newApplied/detailedInformation"
        className={clickColor === true ? s.title : `${s.title} ${s.clicked}`}
        onClick={()=>toggle(el.id)}
      >
        <p className={s.first_p}>1</p>
        <p>{el.trainer.surname} {el.trainer.name} </p>
        <p>{el.event.name}</p>
      </NavLink>
      ))}
      <Pagination />
    </div>
  );
};
