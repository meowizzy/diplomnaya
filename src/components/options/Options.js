import React from 'react';
import s from "./Options.module.scss"
import ButtonForActiveChanges from "../buttonForActiveChanges/ButtonForActiveChanges";
import {useNavigate} from "react-router";

const Options = ({handleOpenDeleteModal, link, setEditButton, closeOption}) => {

    const navigate =useNavigate()

    const func = () => {
        setEditButton && setEditButton(true);
        closeOption && closeOption(false);
        navigate(link)
    }

    return (
        <div className={ s.option_cont}>
            <div className={s.content}>
                <ButtonForActiveChanges classname="button" onClick={func} margin="0" width="200px" text="Редактировать"/>
                <ButtonForActiveChanges classname="button" onClick={handleOpenDeleteModal} margin="0" width="200px" text="Удалить"/>
            </div>
        </div>
    );
};

export default Options;
