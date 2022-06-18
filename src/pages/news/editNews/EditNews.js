import React from 'react';
import Input from "../../../components/input/Input";
import s from "./EditNews.module.scss"
import Button from "../../../components/button/Button";
// import ArrowButton from "../../../components/arrowButton/ArrowButton";
import inputStyles from "../../../components/input/Input.module.scss";
import classNames from "classnames";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {News} from "../News";
import NewsTab from "../defaultNews/NewsTab";
import SuccessModal from "../../../components/modals/SuccessModal";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import BackButton from "../../../components/arrowButton/BackButton";
import ButtonForActiveChanges from "../../../components/buttonForActiveChanges/ButtonForActiveChanges";

const EditNews = () => {
    // const classname = classNames()
    const navigate = useNavigate()

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const formik = useFormik({
        initialValues: "data",
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
                    {/*<divclassName={s.prev_button}>*/}
                        <BackButton onClick={ () => navigate("/main/news")}  rotate="rotate(180deg)" />

                    <form onSubmit={formik.handleSubmit} style={{width: 600}}>
                        <h2 className="container_title">Новости</h2>
                        <label className={inputStyles.label}>Изображение</label>
                        <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                            <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                            <input id="image" className={s.img_input} type="file"/>
                        </div>
                        <Input onChange={formik.handleChange} value={formik.values} type="text" width="100%" valueLabel="Заголовок"/>
                        <Input onChange={formik.handleChange} value={formik.values} type="text" width="100%" valueLabel="Дата"/>
                        <Input onChange={formik.handleChange} value={formik.values} type="text" width="100%" valueLabel="Текст"/>
                        <Input onChange={formik.handleChange} value={formik.values}  type="text" width="100%" valueLabel="Дополнительно"/>
                        <ButtonForActiveChanges classname="no_button"  type="submit" width="100%" margin="70px 0px 0px" text="СОХРАНИТЬ"/>
                    </form>

                </div>
            </div>
            { openSuccessModal && <SuccessModal title="Вы успешно отредактировали данную новость!" open={openSuccessModal} handleClose={handleCloseSuccessModal}/>}
        </>

    );
};

export default EditNews;
