import React, {useState} from 'react';
import Input from "../../components/input/Input";
import s from "../clubs/defaultClubs/DefaultClubs.module.scss"
import ss from "./Documentation.module.scss"
import BackButton from "../../components/arrowButton/BackButton";
import {useNavigate} from "react-router";
import inpStyles from "../../components/input/Input.module.scss"
import {gradient_circle_checkbox, grey_circle_checkbox} from "../../images";
import Button from "../../components/button/Button";
import SuccessModal from "../../components/modals/SuccessModal";

const EditDocumentationDetails = () => {

    const [format, setFormat] = useState("");
    const handleChooseFormat = (format) => {setFormat(format)}

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const navigate = useNavigate()
    return (
        <>
            <div className={s.form_cont}>
                <BackButton onClick={() => navigate("/main/documentation/all_documentation/doc_details")}/>
                <p className="container_title">Редактировать документ</p>
                <Input valueLabel="Название" width="100%" value="Единые всекыргызские правила соревнований по ушу    2022 года"/>
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
                <Button onClick={handleOpenSuccessModal} width="100%" className="button" text="СОХРАНИТЬ" />
            </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данный документ!"/>}
        </>
    );
};

export default EditDocumentationDetails;
