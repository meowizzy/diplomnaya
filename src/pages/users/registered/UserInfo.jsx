import { useFormik } from "formik";
import React,{useEffect, useState} from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import Input from "../../../components/input/Input";
import { ThreeDot } from "../../../components/threeDot/ThreeDot";
import s from "./Registered.module.scss";
import Button from '../../../components/button/Button' 
import { Link, useNavigate } from "react-router-dom"
import { close_eye, list_img, open_eye, plus, radio_user__checked, radio_user__unchecked } from "../../../images";
import SuccessModal from "../../../components/modals/SuccessModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, editUser, getUserById } from "../../../redux/slices/userSlice";

export const UserInfo = () => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);

  const dispatch = useDispatch()
  
  const user = useSelector(state=>state.user.userId)
  const status = useSelector(state=>state.user.status)
  console.log(user)
  const [userForm, setUserForm] = useState({})
  const onChange = (str, value) => {
    if(str==="is_assistant"){
      setUserForm({ ...userForm, [str]: value, is_judge:false});
    }else if(str==="is_judge"){
      setUserForm({ ...userForm, [str]: value, is_assistant:false});
    }else if(str==="is_active"){
      setUserForm({ ...userForm, [str]: !user.is_active});
    }else if(str==="password"){
      setUserForm({ ...userForm, [str]: value});
    }else{
      setUserForm({ ...userForm, is_judge:false, is_assistant:false});
    }
    console.log(userForm)
  }

  // useEffect(()=>{
  //   setActive(active)
  // },[active])

  const formik = useFormik({
    initialValues: {
      name:user.name,
      surname: user.surname,
      phone: user.number,
      email: user.email,
      city: user.address,
      is_active: user.is_active,
      role:user.role,
      ...userForm
    },
    enableReinitialize:true,
    onSubmit: (values) => {
      const id = user.id
      const data = {handleOpenSuccessModal, values, id}
      dispatch(editUser(data))
      alert(JSON.stringify(values, null, 2));
    },
  });


  const [pos, setPos]=useState(false)
  const [position, setPosition] = useState(false)
  const [buttonState, setButtonState] = useState(true);
  const foggle = () => {
    setButtonState(!buttonState);
  };

  const [eye, setEye] = useState(false)
  const toggle = () =>{
    setEye(!eye)
  } 

  const navigate = useNavigate()
  const back =()=>{
    navigate("/main/users/registered")
  }
  return (
    <>
      <div className={s.info}>
        <BackButton to="/main/users/registered" />

        <p className={s.text}>Информация о пользователе</p>
        {buttonState === true && (
          <ThreeDot
            onClick={foggle}
            text="Вы уверены, что хотите удалить данного пользователя?"
            back={back}
            id={user.id}
            // open={openSuccessModal}
            take={deleteUser}
          />
        )}

        {status === "resolved" ? (
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
                value={formik.values.role === "TRAINER" ? "Тренер" : "Админ"}
                onChange={formik.handleChange}
                width="600px"
                readOnly
                name="role"
              />
              {buttonState === false && (
                <img
                  src={plus}
                  alt="wrong"
                  className={s.plus}
                  onClick={() => setPos(true)}
                />
              )}
              {pos === true && (
                <div className="relative">
                  <Input
                    valueLabel="Дополнительная должность"
                    readOnly
                    value={
                      userForm.is_assistant
                        ? "Секретарь"
                        : userForm.is_judge
                        ? "Судья"
                        : formik.values.position
                        ? "Судья"
                        : formik.values.position
                        ? "Секретарь"
                        : "Тренер"
                    }
                    onChange={formik.handleChange}
                    width="600px"
                    name="position"
                  />
                  <img
                    src={list_img}
                    alt="wrong"
                    className={s.list}
                    onClick={() => setPosition(!position)}
                  />
                  {position === true && (
                    <>
                      <p
                        className={s.list_cont}
                        onClick={() => onChange("is_assistant", true)}
                      >
                        Секретарь
                      </p>
                      <p
                        className={s.list_cont}
                        onClick={() => onChange("is_judge", true)}
                      >
                        Судья
                      </p>
                    </>
                  )}
                </div>
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
              value="Золотой дракон"
              onChange={formik.handleChange}
              width="600px"
              name="club"
            />
            <div className="relative">
              <Input
                valueLabel="Пароль"
                value={userForm.password}
                onChange={(e) => onChange("password", e.target.value)}
                width="600px"
                type={eye === true ? "text" : "password"}
                name="password"
                margin="0 0 32px"
                placeholder="Изменить пароьль"
              />
              <img
                src={eye === true ? open_eye : close_eye}
                onClick={toggle}
                className="pass"
              />
            </div>
            <label className={s.status}>
              <p>Активен / Неактивен</p>
              {user.is_active === false ? (
                <img
                  src={radio_user__unchecked}
                  onClick={() => onChange("is_active", user.is_active)}
                />
              ) : (
                <img
                  src={radio_user__checked}
                  onClick={() => onChange("is_active", user.is_active)}
                />
              )}
            </label>

            {buttonState === false && (
              <Button
                width="600px"
                text="СОХРАНИТЬ"
                margin="70px 0 0"
                type="submit"
              />
            )}
          </form>
        ) : (
          <p>loading...</p>
        )}
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
