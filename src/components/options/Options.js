import React from 'react';
// import s from "../../pages/news/defaultNews/DefaultNews.module.scss";
import s from "./Options.module.scss"
import ButtonForActiveChanges from "../buttonForActiveChanges/ButtonForActiveChanges";
import {useNavigate} from "react-router";

const Options = ({handleOpenDeleteModal, link}) => {

    const navigate =useNavigate()

    return (
        <div className={ s.option_cont}>
            <div className={s.content}>
                <ButtonForActiveChanges classname="button" onClick={ () => navigate(link)} margin="0" width="200px" text="Редактировать"/>
                <ButtonForActiveChanges classname="button" onClick={handleOpenDeleteModal} margin="0" width="200px" text="Удалить"/>
            </div>
        </div>
    );
};

export default Options;
