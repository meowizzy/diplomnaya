import React from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";

const Auth = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className={s.auth}>
      <div className={s.auth_cont}>
        <form className={registerStyles.form}>
          <p className="form_title">ФЕДЕРАЦИЯ УШУ</p>
          <Input
            placeholder="Введите Email"
            valueLabel="Email"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="email"
          />
          <Input
            placeholder="******"
            valueLabel="Пароль"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="password"
          />
          <p className="grey_text">Забыли пароль?</p>
          <Button text="ВОЙТИ" />
          <p className={s.register_text}>Зарегистрироваться</p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
