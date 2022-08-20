import React from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import { NavLink } from "react-router-dom";
import s from "../registered/Registered.module.scss";
import ss from "./CreateUser.module.scss";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";
import SuccessModal from "../../../components/modals/SuccessModal";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { getClubs } from "../../../redux/slices/clubSlice";
import { list_img } from "../../../images";
import { useState } from "react";
import sss from "../../../components/input/Input.module.scss"
import { createUser } from "../../../redux/slices/registerSlice";

export const CreateUser = () => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);
  const [state, setState] = useState();
  const toggle = () =>{
    setState(!state)
  }
  const [pos, setPos] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClubs());
  }, []);
  const clubs = useSelector((state) => state.clubs.clubs);
  // console.log(clubs);
  const [club, setClub] = useState({name:"", id:""})
  const [check, setCheck] = useState(false)
  const [role, setRole] = useState({
    role:"ADMIN",
    name: "",
    surname: "",
    number: "+996",
    email: "",
    address: "",
    password: "",
    is_active:false, 
    referral_code:"",
    // achievements: "",
  })
  
  const onChange = (value, str)=>{
    if(str==="club"){
      toggle()
      setClub({...club, name:value})
      // console.log(value)
    }else if(str==="active"){
      console.log(value)
      setRole({...role, is_active:!role.is_active})
      console.log(role)
    }else if(str==="ad"){
    console.log(str, value)
      setRole({...role, role:value})
    }else if(str==="tr"){
    console.log(str, value)

      setRole({...role, role:value})
    }else if(str==="name"){
      setRole({...role, name:value})
    }else if(str==="surname"){
      setRole({...role, surname:value})
    }else if(str==="number"){
      setRole({...role, number:value})
    }else if(str==="email"){
      setRole({...role, email:value})
    }else if(str==="address"){
      setRole({...role, address:value})
    }else if(str==="password"){
      setRole({...role, password:value})
    }
  }
  // const formik = useFormik({
  //   initialValues: role,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //     const data = {values, handleOpenSuccessModal}
  //     dispatch(createUser(data))
  //   },
  // });

  const onSubmit=(e)=>{
    e.preventDefault();
    const data = {handleOpenSuccessModal, role}
    dispatch(createUser(data))
    console.log(role)
  }
  console.log(role)
  return (
    <div className={s.info}>
      <BackButton to="/main/users/registered" />

      <p style={{ fontSize: "22px", marginBottom: "30px", marginTop: "50px" }}>
        Создание пользователя
      </p>
      <form onSubmit={onSubmit}>
        <Input
          valueLabel="Имя"
          placeholder="Введите имя"
          value={role.name}
          onChange={(e)=>onChange(e.target.value, "name")}
          name="name"
          width="600px"
        />

        <Input
          placeholder="Введите фамилию"
          valueLabel="Фамилия"
          value={role.surname}
          onChange={(e)=>onChange(e.target.value, "surname")}
          name="surname"
          width="600px"
        />
        <div className="relative">
          <Input
            placeholder="Введите должность"
            valueLabel="Должность"
            value={role.role === "TRAINER" ? "Тренер" : "Админ"}
            onChange={(e)=>onChange(e.target.value, "role")}
            width="600px"
            name="role"
          />
          <img
            src={list_img}
            className={ss.list}
            onClick={() => setPos(!pos)}
          />
          {pos === true && (
            <>
              <p className={ss.pos} onClick={() => onChange("ADMIN", "ad")}>
                Админ
              </p>
              <p className={ss.pos} onClick={() => onChange("TRAINER", "tr")}>
                Тренер
              </p>
            </>
          )}
        </div>
        <Input
          placeholder="+996"
          valueLabel="Номер телефона"
          value={role.number}
          onChange={(e)=>onChange(e.target.value, "number")}
          width="600px"
          name="number"
        />
        <Input
          placeholder="Введите Email"
          valueLabel="Почта"
          value={role.email}
          onChange={(e)=>onChange(e.target.value, "email")}
          width="600px"
          name="email"
          type="email"
        />
        <Input
          placeholder="Веедите страну и город"
          valueLabel="Введите страну и город"
          value={role.address}
          onChange={(e)=>onChange(e.target.value, "address")}
          width="600px"
          name="address"
        />
        <div className="relative">
          <Input
            placeholder="Выберите клуб"
            valueLabel="Клуб"
            value={club.name}
            onChange
            width="600px"
            readOnly
          />

          <img src={list_img} className={ss.list} onClick={toggle} />

          {state === true &&
            clubs.map((el, index) => (
              <p
                key={index}
                className={ss.name}
                onClick={() => {
                  onChange(el.name, "club");
                }}
              >
                {el.name}
              </p>
            ))}
        </div>

        <Input
          placeholder="Пароль не менее 6 цифр"
          valueLabel="Пароль"
          value={role.password}
          onChange={(e)=>onChange(e.target.value, "password")}
          width="600px"
          type="password"
          name="password"
          margin="0 0 32px"
        />
        <label className={s.status}>
          <p>Активен / Неактивен</p>
          <input
            type="radio"
            className={s.input}
            // value={role.is_active}
            checked={role.is_active}
            onClick={(e)=>onChange(e.target.checked, "active")}
            // onChange={(e)=>onChange(e.target.checked, "active")}
          />
        </label>
        <Button
          width="600px"
          text="СОЗДАТЬ"
          disabled={
            !(
              role.name &&
              role.surname &&
              role.role &&
              role.number &&
              role.email &&
              role.address &&
              role.password
            )
          }
          margin="82px 0 0"
          type="submit"
          // onClick={onSubmit}
        />
      </form>
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно создали пользователя!"
        />
      )}
    </div>
  );
};
