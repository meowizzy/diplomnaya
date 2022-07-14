import React from "react";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";
import s from "./ChangeEvents.module.scss";
import Button from "../../../components/button/Button";
import BackButton from "../../../components/arrowButton/BackButton";

export const CreateEvents = ({ active, setActive }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      place: "",
      referee: "",
      secretary: "",
      note: "",
      agePre: "",
      ageAfter: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={active ? s.cont : s.unactive}>
      <BackButton onClick={() => setActive(false)} to="/main/events/allEvents"/>

      <p style={{ fontSize: "30px", marginBottom: "40px" }}>
        Создание мероприятие
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Введите название"
          valueLabel="Наименование мероприятия"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          width="600px"
        />
        <Input
          placeholder="Введите дату"
          valueLabel="Введите дату"
          value={formik.values.date}
          onChange={formik.handleChange}
          name="date"
          width="600px"
        />
        <Input
          placeholder="Введите место"
          valueLabel="Место проведения"
          value={formik.values.place}
          onChange={formik.handleChange}
          width="600px"
          name="place"
        />
        <Input
          placeholder="Главный судья"
          valueLabel="Информация о мероприятии - главный судья"
          value={formik.values.referee}
          onChange={formik.handleChange}
          width="600px"
          name="referee"
        />
        <Input
          placeholder="Секретарь"
          valueLabel="Информация о мероприятии- секретарь"
          value={formik.values.secretary}
          onChange={formik.handleChange}
          width="600px"
          name="secretary"
        />
        <Input
          placeholder="Введите текст"
          valueLabel="Примечание"
          value={formik.values.note}
          onChange={formik.handleChange}
          width="600px"
          name="note"
        />

        <div className={s.age}>
          <div>
            <Input
              placeholder="С"
              width="285px"
              valueLabel="Возрастная категория"
              value={formik.values.agePre}
              onChange={formik.handleChange}
              name="agePre"
            />

            <Input
              placeholder="По"
              valueLabel=""
              width="285px"
              value={formik.values.ageAfter}
              onChange={formik.handleChange}
              name="ageAfter"
            />
            <span className={s.age_span}></span>
          </div>
        </div>
        <Button
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.date &&
              formik.values.place &&
              formik.values.referee &&
              formik.values.secretary &&
              formik.values.ageAfter &&
              formik.values.agePre &&
              formik.values.note
            )
          }
          width="600px"
          type="submit"
        />
      </form>
    </div>
  );
};
