import { useFormik } from "formik";
import React from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import SuccessModal from "../../../components/modals/SuccessModal";
import s from "./ChangeEvents.module.scss";

export const ChangeForm = ({
  onClick,
  name,
  start_datetime,
  finish_datetime,
  place,
  lead_judge,
  assistant,
  note,
  min_age,
  max_age,
  min_age_second,
  max_age_second,
}) => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);

  const formik = useFormik({
    initialValues: {
      name: name,
      start_datetime: start_datetime,
      finish_datetime: finish_datetime,
      place: place,
      lead_judge: lead_judge,
      assistant: assistant,
      note: note,
      age_groupe: [
        {
          min_age: min_age,
          max_age: max_age,
        },
        {
          min_age_second: min_age_second,
          max_age_second: max_age_second,
        },
      ],
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      
      handleOpenSuccessModal();
    },
  });
  return (
    <div className={s.cont}>
      <BackButton onClick={onClick} />

      <p style={{ fontSize: "30px", marginBottom: "40px" }}>
        Информация о мероприятии
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          valueLabel="Наименование мероприятия"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          width="600px"
        />
        <Input
          valueLabel="Введите дату начала"
          value={formik.values.start_datetime}
          onChange={formik.handleChange}
          name="date"
          width="600px"
        />
         <Input
          valueLabel="Введите дату конца"
          value={formik.values.finish_datetime}
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
          value={formik.values.lead_judge}
          onChange={formik.handleChange}
          width="600px"
          name="lead_judge"
        />
        <Input
          valueLabel="Информация о мероприятии- секретарь"
          value={formik.values.assistant}
          onChange={formik.handleChange}
          width="600px"
          name="assistant"
        />
        <Input
          valueLabel="Примечание"
          value={formik.values.note}
          onChange={formik.handleChange}
          width="600px"
          name="note"
          placeholder="Пусто"
        />

        <div className={s.age}>
          <div>
            <Input
              width="285px"
              valueLabel="Возрастная категория"
              value={formik.values.age_groupe[0].min_age}
              // value={formik.values.age_groupe.forEach(el=>{return el.min_age})}
              onChange={formik.handleChange}
              name="agePre"
            />

            <Input
              valueLabel=""
              width="285px"
              value={formik.values.age_groupe[0].max_age}
              // value={formik.values.age_groupe.forEach(el=>{return el.max_age})}
              onChange={formik.handleChange}
              name="ageAfter"
            />
            <span className={s.age_span}></span>
          </div>
        </div>
        <Button width="600px" text="СОХРАНИТЬ" type="submit" />
      </form>
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно отредактировали данные о мероприятии!"
        />
      )}
    </div>
  );
};
