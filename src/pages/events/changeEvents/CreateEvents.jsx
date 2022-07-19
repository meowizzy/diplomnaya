import React from "react";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";
import s from "./ChangeEvents.module.scss";
import Button from "../../../components/button/Button";
import BackButton from "../../../components/arrowButton/BackButton";
import { createEvent } from "../../../redux/slices/eventSlice";
import { useDispatch } from "react-redux/es/exports";


export const CreateEvents = ({ active, setActive }) => {

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: "",
      finish_datetime: "",
      start_datetime:"",
      place: "",
      lead_judge: "",
      assistant: "",
      note: "",
      age_groupe: [
        {
          min_age: 2,
          max_age: 2,
          name: "",
        },
      ],
    },
    onSubmit: (values) => {
      dispatch(createEvent(values));
      // alert(JSON.stringify(values, null, 2));
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
          placeholder="Введите дату начала"
          valueLabel="Введите дату начала"
          value={formik.values.start_datetime}
          onChange={formik.handleChange}
          name="start_datetime"
          width="600px"
        />
         <Input
          placeholder="Введите дату конца"
          valueLabel="Введите дату конца"
          value={formik.values.finish_datetime}
          onChange={formik.handleChange}
          name="finish_datetime"
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
          value={formik.values.lead_judge}
          onChange={formik.handleChange}
          width="600px"
          name="lead_judge"
        />
        <Input
          placeholder="Секретарь"
          valueLabel="Информация о мероприятии- секретарь"
          value={formik.values.assistant}
          onChange={formik.handleChange}
          width="600px"
          name="assistant"
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
              value={formik.values.age_groupe[0].min_age}
              // value={formik.values.age_groupe.forEach(el=>{return el.min_age})}
              onChange={formik.handleChange}
              name="age_groupe[0].min_age"
            />

            <Input
              placeholder="По"
              valueLabel=""
              width="285px"
              value={formik.values.age_groupe[0].max_age}
              onChange={formik.handleChange}
              name="age_groupe[0].max_age"
            />
            <span className={s.age_span}></span>
          </div>
        </div>
        <Button
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.finish_datetime &&
              formik.values.start_datetime&&
              formik.values.place &&
              formik.values.lead_judge &&
              formik.values.assistant &&
              // formik.values.age_groupe.forEach(el=>{return el.max_age}) &&
              // formik.values.age_groupe.forEach(el=>{return el.min_age}) &&
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
