import React from 'react';
import {option_button} from "../../images";
import s from "./OptionButton.module.scss"

const OptionButton = ({onClick}) => {

    return (
        <img onClick={onClick} className={s.button} src={option_button} alt="wrong"/>
    );
};

export default OptionButton;
