import { useFormik } from "formik";
import React,{useEffect, useState} from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import Input from "../../../components/input/Input";
import { ThreeDot } from "../../../components/threeDot/ThreeDot";
import s from "./Registered.module.scss";
import Button from '../../../components/button/Button' 
import { Link } from "react-router-dom"
import { close_eye, open_eye, plus } from "../../../images";
import SuccessModal from "../../../components/modals/SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../../redux/slices/userSlice";

export const UserInfo = () => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getUserById(localStorage.getItem("idForUser")))
  // },[])

  const user = useSelector(state=>state.user.userId)
  const status = useSelector(state=>state.user.status)
  console.log(user)
  const [active, setActive] = useState(user)
  const onChange = ()=>{
    setActive(...active)
    console.log(active)
  }
  const formik = useFormik({
    initialValues: {
      name: user?.name,
      surname: user.surname,
      position: user.is_judge?"Судья":user.is_assistant?"Секретарь":"Тренер",
      phone: user.number,
      email: user.email,
      city: user.address,
      club: "Золотой дракон",
      password: user.password,
      is_active:active.is_active
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [buttonState, setButtonState] = useState(true);

  const foggle = () => {
    setButtonState(!buttonState);
  };


  const [eye, setEye] = useState(false)

  const toggle = () =>{
    setEye(!eye)
  } 

  return (
    <>
      <div className={s.info}>
        <BackButton to="/main/users/registered" />

        <p className={s.text}>Информация о пользователе</p>
        {buttonState === true && <ThreeDot onClick={foggle} text="Вы уверены, что хотите удалить данного пользователя?"/>}

    {status==="resolved"?
        <form onSubmit={formik.handleSubmit}>
          <Input
            valueLabel="Имя"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            width="600px"
          />
          <Input
            valueLabel="Фамилия"
            value={formik.values.surname}
            onChange={formik.handleChange}
            name="surname"
            width="600px"
          />
          <div style={{ position: "relative" }}>
            <Input
              valueLabel="Должность"
              value={formik.values.position}
              onChange={formik.handleChange}
              width="600px"
              name="position"
            />
            {buttonState === false && (
              <img src={plus} alt="wrong" className={s.plus} />
            )}
          </div>
          <Input
            valueLabel="Номер телефона"
            value={formik.values.phone}
            onChange={formik.handleChange}
            width="600px"
            name="phone"
          />

          <Input
            valueLabel="Почта"
            value={formik.values.email}
            onChange={formik.handleChange}
            width="600px"
            name="email"
            type="email"
          />
          <Input
            valueLabel="Страна, город"
            value={formik.values.city}
            onChange={formik.handleChange}
            width="600px"
            name="city"
          />
          <Input
            valueLabel="Клуб"
            value={formik.values.club}
            onChange={formik.handleChange}
            width="600px"
            name="club"
          />
          <div className="relative">
          <Input
            valueLabel="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            width="600px"
            type={eye===true?"text":"password"}
            name="password"
            margin="0 0 32px"
          />
          <img src={eye===true?open_eye:close_eye} onClick={toggle} className="pass"/>
          </div>
          <label className={s.status}>
            <p>Активен / Неактивен</p>
            <input type="radio" className={s.input} value={!formik.values.is_active} onChange={(e)=>onChange(e.target.checked)} checked={formik.values.is_active}/>
          </label>

          {buttonState === false && (
            <Button
              width="600px"
              text="СОХРАНИТЬ"
              margin="70px 0 0"
              onClick={handleOpenSuccessModal}
            />
          )}
        </form>:<p>loading...</p>}
      </div>
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно отредактировали данные о пользователе!"
        />
      )}
    </>
  );
};
