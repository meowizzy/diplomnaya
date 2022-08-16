import React, { useState } from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";
import {auth, newPassword} from "../../redux/fetchFunctions";

const NewPassword = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  const [secondOpen, setSecondOpen] = useState(true);

  const foggle = () => {
    setSecondOpen(!secondOpen);
  };

  let params = new URLSearchParams(document.location.search);
  let token = params.get("token");
  console.log("token: ", token)

  const formik = useFormik({
    initialValues: {
      password: "",
      token: token,
    },
    onSubmit: (data) => {
      console.log(data);
      newPassword(data);
    },
  });
  return (
    <div className={s.auth}>
      <div className={s.auth_cont}>
        <form onSubmit={formik.handleSubmit} className={registerStyles.form}>
          <p className="form_title">Новый пароль</p>
          <div className={s.input_cont}>
            <Input
              placeholder="******"
              valueLabel="Новый пароль"
              type={open ? "password" : "text"}
              onChange={formik.handleChange}
              name="password"
            />
            {open === false ? (
              <div onClick={toggle} className={registerStyles.open_eye} />
            ) : (
              <div onClick={toggle} className={registerStyles.close_eye} />
            )}
          </div>
          <div className={s.input_cont}>
            <Input
              placeholder="******"
              valueLabel="Подтвердить пароль"
              type={secondOpen ? "password" : "text"}
              name="confirm_password"
            />
            {secondOpen === false ? (
              <div onClick={foggle} className={registerStyles.open_eye} />
            ) : (
              <div onClick={foggle} className={registerStyles.close_eye} />
            )}
          </div>
          <Button
            type="submit"
            disabled={!formik.values.password}
            text="СОХРАНИТЬ"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
