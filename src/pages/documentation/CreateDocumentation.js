import React, {useState} from 'react';
import Input from "../../components/input/Input";
import s from "../clubs/defaultClubs/DefaultClubs.module.scss"
import newsStyles from "../news/editNews/EditNews.module.scss"
import newsStyles2 from "../news/createNews/CreateNews.module.scss"
import ss from "./Documentation.module.scss"
import BackButton from "../../components/arrowButton/BackButton";
import {useNavigate} from "react-router";
import inpStyles from "../../components/input/Input.module.scss"
import {camera_icon, file_download, gradient_circle_checkbox, grey_circle_checkbox} from "../../images";
import Button from "../../components/button/Button";
import inputStyles from "../../components/input/Input.module.scss";
import {useFormik} from "formik";
import {auth} from "../../redux/fetchFunctions";
import SuccessModal from "../../components/modals/SuccessModal";

const CreateDocumentation = () => {

    const [format, setFormat] = useState("");
    const handleChooseFormat = (format) => {setFormat(format)}

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: (data) => {
            console.log(data);
            handleOpenSuccessModal()
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={s.form_cont}>
                <BackButton to="/main/documentation/all_documentation" />
                <p className="container_title">Создать документ</p>
                <Input onChange={formik.handleChange} name="name" valueLabel="Название" width="100%" placeholder="Название документа"/>
                <label className={inpStyles.label}>Формат</label>
                <div style={{marginTop: 4}} className="flex">
                    <div className={ss.format_gradient} style={{position: 'relative', cursor: 'pointer'}} onClick={() => handleChooseFormat("word")}>
                        {format === "word" ? <img className={ss.checkbox_circle} src={gradient_circle_checkbox} alt=""/> : <img className={ss.checkbox_circle} src={grey_circle_checkbox} alt=""/>}
                        <p className={ss.format_text}>Word</p>
                    </div>
                    <div className={ss.format_gradient} style={{position: 'relative', cursor: 'pointer'}} onClick={() => handleChooseFormat("excel")}>
                        {format === "excel" ? <img className={ss.checkbox_circle} src={gradient_circle_checkbox} alt=""/> : <img className={ss.checkbox_circle} src={grey_circle_checkbox} alt=""/>}
                        <p className={ss.format_text}>Excel</p>
                    </div>
                    <div className={ss.format_gradient} style={{position: 'relative', cursor: 'pointer'}} onClick={() => handleChooseFormat("pdf")}>
                        {format === "pdf" ? <img className={ss.checkbox_circle} src={gradient_circle_checkbox} alt=""/> : <img className={ss.checkbox_circle} src={grey_circle_checkbox} alt=""/>}
                        <p className={ss.format_text}>PDF</p>
                    </div>
                </div>
                <div style={{width: "100%", height: "112px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                    <img style={{top: "20%"}} className={newsStyles2.img_icon} src={file_download} alt="wrong"/>
                    <label className={`${inputStyles.input} ${newsStyles.label_img}`} htmlFor="image"></label>
                    <input style={{paddingLeft: 0}} id="image" className={newsStyles.img_input} type="file"/>
                    <p style={{top: "70%"}} className={newsStyles2.img_text}>Файл загружен</p>
                </div>
                <Button disabled width="100%" margin="40px auto 199px" classname="button" text="ЗАГРУЗИТЬ ДОКУМЕНТ"/>
                <Button disabled={!formik.values.name} width="100%" margin="0" classname="button" text="СОЗДАТЬ"/>
            </form>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали документ!"/>}
        </>

    );
};

export default CreateDocumentation;
