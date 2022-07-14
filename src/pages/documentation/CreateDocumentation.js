import React, {useState} from 'react';
import Input from "../../components/input/Input";
import s from "../clubs/defaultClubs/DefaultClubs.module.scss"
import ss from "./Documentation.module.scss"
import BackButton from "../../components/arrowButton/BackButton";
import {useNavigate} from "react-router";
import inpStyles from "../../components/input/Input.module.scss"
import {gradient_circle_checkbox, grey_circle_checkbox} from "../../images";
import Button from "../../components/button/Button";

const CreateDocumentation = () => {

    const [format, setFormat] = useState("");
    const handleChooseFormat = (format) => {setFormat(format)}

    const navigate = useNavigate()
    return (
        <>
            <div className={s.form_cont}>
                <BackButton onClick={() => navigate("/main/documentation/all_documentation")}/>
                <p className="container_title">Создать документ</p>
                <Input valueLabel="Название" width="100%" placeholder="Название документа"/>
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
                <Button disabled width="100%" classname="button" text="СОЗДАТЬ"/>
            </div>
        </>

    );
};

export default CreateDocumentation;
