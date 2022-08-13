import React from "react";
import s from "./AppliedLine.module.scss";
import { useFormik } from "formik";

export const AppliedLineLogic = ({
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
  handleSubmit,
  handleChange
}) => {
  // const formik = useFormik({
  //   initialValues: {
  //     fullName: fullName,
  //     club: club,
  //     gender: gender,
  //     age: age,
  //     complex: complex,
  //     secondComplex: secondComplex,
  //     tsuanshu: tsuanshu,
  //     tsise: tsise,
  //     partnerName: partnerName,
  //     numberOfteam: numberOfteam,
  //     note: note,
  //   },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <div className={s.table_title} >
      <p className={s.first_p}>{number}</p>
      <input
        placeholder="ФИО спортсмена"
        className={s.three_hundred_fifty}
        // value={formik.values.fullName}
        value={fullName}
        onChange={handleChange}
        name="name"
      />
      <input
        placeholder="Пол"
        className={s.hundred_fifty}
        // value={formik.values.gender}
        value={gender}
        onChange={handleChange}
        name="gender"
      />
      <input
        placeholder="Возраст"
        className={s.hundred_fifty}
        // value={formik.values.age}
        value={age}
        onChange={handleChange}
        name="age"
      />
      <input
        placeholder="Название клуба"
        className={s.two_hundred_fifty}
        // value={formik.values.club}
        value={club}
        onChange={handleChange}
        name="club"
      />
      <input
        placeholder="Название комплекса"
        className={s.two_hundred_fifty}
        // value={formik.values.complex}
        value={complex}
        onChange={handleChange}
        name="complex"
      />
      <input
        placeholder="Название комплекса"
        className={s.two_hundred_fifty}
        // value={formik.values.secondComplex}
        value={secondComplex}
        onChange={handleChange}
        name="secondComplex"
      />

      <div className={s.five_hundred}>
        <span className={s.under}>
          <input
            placeholder="Название комплекса"
            className={s.under_first}
            // value={formik.values.tsuanshu}
            value={tsuanshu}
            onChange={handleChange}
            name="tsuanshu"
          />
          <input
            placeholder="Название комплекса"
            className={s.under_second}
            // value={formik.values.tsise}
            value={tsise}
            onChange={handleChange}
            name="tsise"
          />
        </span>
      </div>
      <input
        placeholder="ФИО партнера"
        className={s.three_hundred_fifty}
        // value={formik.values.partnerName}
        value={partnerName}
        onChange={handleChange}
        name="partnerName"
      />

      <input
        placeholder="Номер команды"
        className={s.two_hundred_fifty}
        // value={formik.values.numberOfteam}
        value={numberOfteam}
        onChange={handleChange}
        name="numberOfteam"
      />

      <input
        placeholder="Введите текст"
        className={s.three_hundred_fifty}
        // value={formik.values.note}
        value={note}
        onChange={handleChange}
        name="note"
      />
    </div>
  );
};
