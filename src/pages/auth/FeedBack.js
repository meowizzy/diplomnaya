import React from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";
import {feedBack} from "../../redux/fetchFunctions";

const FeedBack = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      text: "",
    },
    onSubmit: (data) => {
      console.log(data);
      feedBack(data);
    },
  });
  return (
    <div className={s.auth}>
      <div className={s.auth_cont}>
        <form onSubmit={formik.handleSubmit} className={registerStyles.form}>
          <p className="form_title">Обратная связь</p>
          <Input
            placeholder="Введите почту"
            valueLabel="Почта"
            onChange={formik.handleChange}
            name="email"
          />
          <Input
              placeholder="Введите текст"
              valueLabel="Обращение"
              onChange={formik.handleChange}
              name="text"
          />
          <Button
            type="submit"
            disabled={!(formik.values.email && formik.values.text)}
            text="ОТПРАВИТЬ"
          />
        </form>
      </div>
    </div>
  );
};

export default FeedBack;
