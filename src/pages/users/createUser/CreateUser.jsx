import React from 'react'
import BackButton from '../../../components/arrowButton/BackButton'
import { NavLink } from "react-router-dom";
import s from '../registered/Registered.module.scss'
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import { useFormik } from 'formik';
import SuccessModal from '../../../components/modals/SuccessModal';

export const CreateUser = () => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);
    const formik = useFormik({
        initialValues: {
          name: "",
          surname: "",
          position: "",
          phone: "+996",
          email: "",
          city: "",
          club: "",
          password: "",
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
     <div className={s.info}>
  
        <BackButton to="/main/users/registered"/>
  
      <p style={{ fontSize: "22px", marginBottom: "30px", marginTop:"50px" }}>
      Создание пользователя
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          valueLabel="Имя"
          placeholder="Введите имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          width="600px"
        />
        <Input
          placeholder="Введите фамилию"
          valueLabel="Фамилия"
          value={formik.values.surname}
          onChange={formik.handleChange}
          name="surname"
          width="600px"
        />
        <Input
        placeholder="Введите должность"
          valueLabel="Должность"
          value={formik.values.position}
          onChange={formik.handleChange}
          width="600px"
          name="position"
        />
        <Input
         placeholder="+996"
          valueLabel="Номер телефона"
          value={formik.values.phone}
          onChange={formik.handleChange}
          width="600px"
          name="phone"
        />
        <Input
         placeholder="Введите Email"
          valueLabel="Почта"
          value={formik.values.email}
          onChange={formik.handleChange}
          width="600px"
          name="email"
          type="email"
        />
        <Input
         placeholder="Веедите страну и город"
          valueLabel="введите страну и город"
          value={formik.values.city}
          onChange={formik.handleChange}
          width="600px"
          name="city"
        />
        <Input
         placeholder="Название клуба"
          valueLabel="Клуб"
          value={formik.values.club}
          onChange={formik.handleChange}
          width="600px"
          name="club"
        />
        <Input
         placeholder="Пароль не менее 6 цифр"
          valueLabel="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          width="600px"
          type="password"
          name="password"
          margin="0 0 32px"
        />
        <label className={s.status}>
          <p>Активен / Неактивен</p>
          <input type="radio" className={s.input} />
        </label>
        <Button width="600px" text="СОЗДАТЬ"  disabled={
            !(
              formik.values.name &&
              formik.values.surname &&
              formik.values.position &&
              formik.values.phone &&
              formik.values.email &&
              formik.values.city &&
              formik.values.club &&
              formik.values.password
            )
          } margin="82px 0 0" onClick={handleOpenSuccessModal}/>
      </form>
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно отредактировали данные о пользователе!"
        />
      )}
    </div>
  );
}