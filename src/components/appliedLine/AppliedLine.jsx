import React from "react";
import s from "./AppliedLine.module.scss";
import { useFormik } from "formik";

export const AppliedLine = ({
  fullName,
  club,
  gender,
  age,
  complex,
  secondComplex,
  tsuanshu,
  tsise,
  partnerName,
  numberOfteam,
  note,
  number,
  onSubmit,
}) => {
  const formik = useFormik({
    initialValues: {
      fullName: fullName,
      club: club,
      gender: gender,
      age: age,
      complex: complex,
      secondComplex: secondComplex,
      tsuanshu: tsuanshu,
      tsise: tsise,
      partnerName: partnerName,
      numberOfteam: numberOfteam,
      note: note,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className={s.table_title} onSubmit={formik.handleSubmit}>
      <p className={s.first_p}>{number}</p>
      <input
        placeholder="ФИО спортсмена"
        className={s.three_hundred_fifty}
        value={formik.values.fullName}
        // value={fullName}
        onChange={formik.handleChange}
        name="fullName"
      />
      <input
        placeholder="Пол"
        className={s.hundred_fifty}
        value={formik.values.gender}
        // value={gender}
        onChange={formik.handleChange}
        name="gender"
      />
      <input
        placeholder="Возраст"
        className={s.hundred_fifty}
        value={formik.values.age}
        // value={age}
        onChange={formik.handleChange}
        name="age"
      />
      <input
        placeholder="Название клуба"
        className={s.two_hundred_fifty}
        value={formik.values.club}
        // value={club}
        onChange={formik.handleChange}
        name="club"
      />
      <input
        placeholder="Название комплекса"
        className={s.two_hundred_fifty}
        value={formik.values.complex}
        // value={complex}
        onChange={formik.handleChange}
        name="complex"
      />
      <input
        placeholder="Название комплекса"
        className={s.two_hundred_fifty}
        value={formik.values.secondComplex}
        // value={secondComplex}
        onChange={formik.handleChange}
        name="secondComplex"
      />

      <div className={s.five_hundred}>
        <span className={s.under}>
          <input
            placeholder="Название комплекса"
            className={s.under_first}
            value={formik.values.tsuanshu}
            // value={tsuanshu}
            onChange={formik.handleChange}
            name="tsuanshu"
          />
          <input
            placeholder="Название комплекса"
            className={s.under_second}
            value={formik.values.tsise}
            // value={tsise}
            onChange={formik.handleChange}
            name="tsise"
          />
        </span>
      </div>
      <input
        placeholder="ФИО партнера"
        className={s.three_hundred_fifty}
        value={formik.values.partnerName}
        // value={partnerName}
        onChange={formik.handleChange}
        name="partnerName"
      />

      <input
        placeholder="Номер команды"
        className={s.two_hundred_fifty}
        value={formik.values.numberOfteam}
        // value={numberOfteam}
        onChange={formik.handleChange}
        name="numberOfteam"
      />

      <input
        placeholder="Введите текст"
        className={s.three_hundred_fifty}
        value={formik.values.note}
        // value={note}
        onChange={formik.handleChange}
        name="note"
      />
    </form>
  );
};
