import React, { useState } from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";
import "../../styles/baseStyles.scss";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { userAuth} from "../../redux/slices/authSlice";

const Auth = () => {
  const [open, setOpen] = useState(true);
  const [checkbox, setCheckbox] = useState(true)

  const toggle = () => {
    setOpen(!open);
  };
  const checkboxToggle = () => {
    setCheckbox(!checkbox);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error)

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('token');
  const name = queryParams.get('name');
  const type = queryParams.get('type');
  console.log(id, name, type);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (authData) => {
      console.log(authData);
      // navigate("/main/events");
      const data = {authData: authData, navigate}
      dispatch(userAuth(data))
    },
  });
  return (
    <div className={s.authh}>
      <div id="dragon">
        <img style={{width: "800px"}} className="dragon" src="https://i.gifer.com/XwYs.gif" alt=""/>
      </div>
      <div className={s.auth}>
        <div className={s.auth_cont}>
          <form onSubmit={formik.handleSubmit} className={registerStyles.form}>
            <p className="form_title">ФЕДЕРАЦИЯ УШУ</p>
            <Input
              placeholder="Введите почту"
              valueLabel="Почта"
              onChange={formik.handleChange}
              name="email"
              background={authError && "red"}
            />
            <div className={s.input_cont}>
              <Input
                placeholder="******"
                valueLabel="Пароль"
                type={open ? "password" : "text"}
                onChange={formik.handleChange}
                name="password"
                background={authError && "red"}
              />
              {open === false ? (
                <div onClick={toggle} className={authError ? registerStyles.error_open_eye : registerStyles.open_eye} />
              ) : (
                <div onClick={toggle} className={authError ? registerStyles.error_close_eye : registerStyles.close_eye} />
              )}
            </div>

            {
              authError ? <div style={{paddingLeft: 0}} className={s.checkbox_con}>
                              <p className="basic_text">Пароль или логин введен неверно</p>
                          </div> :
                          <div className={s.checkbox_con}>
                            <p onClick={checkboxToggle} className={checkbox ? s.checkbox_text : s.full_checkbox_text}>Сохранить пароль?</p>
                          </div>
            }
            <div className={s.forgot_p_cont}>
              <Link to="/auth/ForgotPassword" className="grey_text">Забыли пароль?</Link>
            </div>

            <Button
              type="submit"
              disabled={!(formik.values.email && formik.values.password)}
              text="ВОЙТИ"
              margin="35px"
            />
            {/*<ButtonForActiveChanges type="submit" disabled={!(formik.values.email && formik.values.password)} margin="35px" classname="back_button" text="ВОЙТИ"/>*/}
            <div className={s.forgot_p_cont}>
              <Link to="/registr"><p className={s.register_text}>Зарегистрироваться</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
