import React, { useState } from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";

const NewPassword = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  const [secondOpen, setSecondOpen] = useState(true);

  const foggle = () => {
    setSecondOpen(!secondOpen);
  };
  const formik = useFormik({
    initialValues: {
      confirm_password: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
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
          <div className={s.input_cont}>
            <Input
              placeholder="******"
              valueLabel="Подтвердить пароль"
              type={secondOpen ? "password" : "text"}
              // value={formik.values.name}
              onChange={formik.handleChange}
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
            disabled={
              !(formik.values.confirm_password && formik.values.password)
            }
            text="СОХРАНИТЬ"
          />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
