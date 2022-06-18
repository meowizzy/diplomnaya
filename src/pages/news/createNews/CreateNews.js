import React from 'react';
import Input from "../../../components/input/Input";
import s from "./../editNews/EditNews.module.scss"
import ss from "./CreateNews.module.scss"
import Button from "../../../components/button/Button";
// import ArrowButton from "../../../components/arrowButton/ForwardButton";
import inputStyles from "../../../components/input/Input.module.scss";
import classNames from "classnames";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {camera_icon, checkbox_icon_turned_on} from "../../../images";
import NewsTab from "../defaultNews/NewsTab";
import SuccessModal from "../../../components/modals/SuccessModal";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import BackButton from "../../../components/arrowButton/BackButton";
import ButtonForActiveChanges from "../../../components/buttonForActiveChanges/ButtonForActiveChanges";

const CreateNews = () => {
    // const classname = classNames()
    const navigate = useNavigate()

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const formik = useFormik({
        initialValues: {
            img: "",
            title: "",
            date: null,
            text: "",
            more: ""
        },
        onSubmit: data => {
            console.log("data: ",data)
            handleOpenSuccessModal()
        }
    })
    return (
        <>
            <div>
                <NewsTab/>
                <div className="container container_data_flexed">
                        <BackButton onClick={ () => navigate("/main/news")} rotate="rotate(180deg)" />

                    <form onSubmit={formik.handleSubmit} style={{width: 600}}>
                        <h2 className="container_title">Создание новости</h2>
                        <label className={inputStyles.label}>Изображение</label>
                        <div style={{width: "100%", height: "200px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                            <img className={ss.img_icon} src={camera_icon} alt="wrong"/>
                            <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                            <input id="image" className={s.img_input} type="file"/>
                            <p className={ss.img_text}>Добавить фото</p>
                        </div>
                        <Input name="title" placeholder="Добавить заголовок" onChange={formik.handleChange} type="text" width="100%" valueLabel="Заголовок"/>
                        <Input name="date" placeholder="Дата публикации" onChange={formik.handleChange} type="text" width="100%" valueLabel="Дата"/>
                        <Input name="text" placeholder="Добавить описание" onChange={formik.handleChange} type="text" width="100%" valueLabel="Текст"/>
                        <Input name="more" placeholder="Добавить текст" onChange={formik.handleChange} type="text" width="100%" valueLabel="Дополнительно"/>
                        <div className={ss.checkbox_cont}>
                            <p className="basic_text">Отправить всем?</p>
                            <img src={checkbox_icon_turned_on} alt="wrong"/>
                        </div>
                        <Button disabled={!(formik.values.date && formik.values.title && formik.values.text && formik.values.more)} type="submit" width="100%" margin="70px 0px 0px" text="СОХРАНИТЬ"/>
                    </form>
                </div>
            </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали новость!"/>}
        </>
    );
};

export default CreateNews;
