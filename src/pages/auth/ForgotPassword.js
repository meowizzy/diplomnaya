import React, { useState } from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [text, setText] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (data) => {
      console.log(data);
      setText(true);
    },
  });
  return (
    <div className={s.auth}>
      <div className={s.auth_cont}>
        <form onSubmit={formik.handleSubmit} className={registerStyles.form}>
          <p className="form_title">Забыли пароль?</p>
          <Input
            placeholder="Введите Email"
            valueLabel="Email"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="email"
          />
          {text ? (
            <p className={s.simple_text}>
              На вашу почту была отправлена
              <br /> ссылка для сброса пароля.
            </p>
          ) : (
            <>
              <br />
              <br />
            </>
          )}
          <br />
          <br />
          <Button type="submit" disabled={!formik.values.email} text="ДАЛЕЕ" />
          <div className={s.forgot_p_cont}>
            <Link to="/auth/FeedBack" className="grey_text">Обратная связь</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
