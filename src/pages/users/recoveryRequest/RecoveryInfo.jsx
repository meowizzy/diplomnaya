import classNames from "classnames";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import TextArea from "../../../components/input/TextArea";
import SuccessModal from "../../../components/modals/SuccessModal";
import s from "./RecoveryRequest.module.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getFeedback } from "../../../redux/slices/userSlice";

export const RecoveryInfo = () => {

  const user = useSelector(state=>state.user.feedBackUser)
  console.log(user)
  const formik = useFormik({
    initialValues: {
      text: user.text,
      email: user.email,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className={s.info}>
        <BackButton to="/main/users/recoveryRequest" />

        <p className={s.text}>Информация о пользователе</p>
        <p className={s.second_p}>Заявка № 1</p>

        <form onSubmit={formik.handleSubmit}>
          <Input
            valueLabel="Электронная почта"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            width="600px"
            type="email"
          />
          <div className="relative">
            <p className={s.obr}>Обращение</p>
            <div className={s.help}>
              {user.text}
            </div>
          </div>
          {/* <Input
            valueLabel="Обращение"
            value={formik.values.recovery}
            onChange={formik.handleChange}
            name="surname"
            width="600px"
            minHeight="200px"
          /> */}
          {/* <div className={s.area_container}>
            <label className={s.label}>dsa</label>
            <textarea
              rows="10"
              cols="45"
        className={s.input}

            />
          </div> */}

          <p style={{ marginTop: "50px" }}>Принять заявку?</p>

          <Button width="210px" margin="0 30px 0 0" text="НЕТ" disabled />
          <Button width="210px" text="ДА" margin="31px 0 0" type="submit" />
        </form>
      </div>
    </>
  );
};
