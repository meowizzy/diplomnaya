import React, { useState } from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";
import "../../styles/baseStyles.scss";
import { Link } from "react-router-dom";
import {empty_checkbox} from "../../images";

const Auth = () => {
  const [open, setOpen] = useState(true);
  const [checkbox, setCheckbox] = useState(false)

  const toggle = () => {
    setOpen(!open);
  };
  const checkboxToggle = () => {
    setCheckbox(!checkbox);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <div className={s.authh}>
      <div id="dragon">
        <img className="dragon" src="https://i.gifer.com/XwYs.gif" />
      </div>
      <div className={s.auth}>
        <div className={s.auth_cont}>
          <form onSubmit={formik.handleSubmit} className={registerStyles.form}>
            <p className="form_title">ФЕДЕРАЦИЯ УШУ</p>
            <Input
              placeholder="Введите Почту"
              valueLabel="Почта"
              // value={formik.values.name}
              onChange={formik.handleChange}
              name="email"
            />
            <div className={s.input_cont}>
              <Input
                placeholder="******"
                valueLabel="Пароль"
                type={open ? "password" : "text"}
                // value={formik.values.name}
                onChange={formik.handleChange}
                name="password"
              />
              {open === false ? (
                <div onClick={toggle} className={registerStyles.open_eye} />
              ) : (
                <div onClick={toggle} className={registerStyles.close_eye} />
              )}
            </div>
            <div className={s.checkbox_con}>
              {/*<img src={empty_checkbox} alt="wrong"/>*/}
              <p className={s.checkbox_text}>Сохранить пароль?</p>
            </div>
            <div className={s.forgot_p_cont}>
              <Link to="/auth/ForgotPassword" className="grey_text">Забыли пароль?</Link>
            </div>

            <Button
              type="submit"
              disabled={!(formik.values.email && formik.values.password)}
              text="ВОЙТИ"
              margin="30"
            />
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
