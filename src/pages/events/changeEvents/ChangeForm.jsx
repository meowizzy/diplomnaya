import { useFormik } from "formik";
import React from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import s from "./ChangeEvents.module.scss";

export const ChangeForm = ({onClick}) => {
  const formik = useFormik({
    initialValues: {
      name: "Чемпионат Кыргызской Респубики по традиционному ушу",
      date: "29.06.2022г. - 30.06.2022г.",
      place: "Дворец спорта им. К. Кожомкула",
      referee: "Белоусова Карина",
      secretary: "Елена Малышева",
      note: "Тренерам необходимо подать заявку до 20.06.2022г.",
      agePre: "С 9",
      ageAfter: "По 15",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={s.cont}>
      <p style={{ fontSize: "30px", marginBottom: "40px" }}>Мероприятие</p>
      <Input
        valueLabel="Наименование мероприятия"
        value={formik.values.name}
        onChange={formik.handleChange}
        name="name"
        width="600px"
      />
      <Input
        valueLabel="Введите дату"
        value={formik.values.date}
        onChange={formik.handleChange}
        name="date"
        width="600px"
      />
      <Input
        valueLabel="Место проведения"
        value={formik.values.place}
        onChange={formik.handleChange}
        width="600px"
        name="place"
      />
      <Input
        valueLabel="Информация о мероприятии - главный судья"
        value={formik.values.referee}
        onChange={formik.handleChange}
        width="600px"
        name="referee"
      />
      <Input
        valueLabel="Информация о мероприятии- секретарь"
        value={formik.values.secretary}
        onChange={formik.handleChange}
        width="600px"
        name="secretary"
      />
      <Input
        valueLabel="Примечание"
        value={formik.values.note}
        onChange={formik.handleChange}
        width="600px"
        name="note"
      />

      <div className={s.age}>
        <div>
          <Input
            width="285px"
            valueLabel="Возрастная категория"
            value={formik.values.agePre}
            onChange={formik.handleChange}
            name="agePre"
          />

          <Input
            valueLabel=""
            width="285px"
            value={formik.values.ageAfter}
            onChange={formik.handleChange}
            name="ageAfter"
          />
          <span></span>
        </div>
        
      </div>
      <div onClick={onClick}><Button width="600px" text="СОХРАНИТЬ" /></div>
    </div>
  );
};
