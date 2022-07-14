import React, {useState} from 'react';
import Input from "../../components/input/Input";
import s from "../clubs/defaultClubs/DefaultClubs.module.scss"
import ss from "./Documentation.module.scss"
import BackButton from "../../components/arrowButton/BackButton";
import OptionButton from "../../components/optionButton/OptionButton";
import {useNavigate} from "react-router";
import Options from "../../components/options/Options";
import DeleteModal from "../../components/modals/DeleteModal";
import inpStyles from "../../components/input/Input.module.scss"
import {download, gradient_circle_checkbox, grey_circle_checkbox} from "../../images";

const DocumentationDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const [format, setFormat] = useState("");
    const handleChooseFormat = (format) => {setFormat(format)}

    const navigate = useNavigate()
    return (
        <>
            <div className={s.form_cont}>
                <BackButton to="/main/documentation/all_documentation" />
                <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                {openOption && <Options link="/main/documentation/all_documentation/doc_details/edit_details" handleOpenDeleteModal={handleOpenDeleteModal}/>}
                <p className="container_title">Информация о документе</p>
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
                <div style={{margin: "30px 20px 0"}}  className="input_flex">
                    <p className="basic_text">Скачать файл</p>
                    <img style={{cursor: "pointer"}} src={download} alt="wrong"/>
                </div>
            </div>
            { openDeleteModal && <DeleteModal text="Вы уверены, что хотите удалить данный клуб?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default DocumentationDetails;
