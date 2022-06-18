import React from 'react';
import {option_button} from "../../images";
import s from "./OptionButton.module.scss"
import ss from "../threeDot/ThreeDot.module.scss"
import three_dot from "../threeDot/dot.svg"

const OptionButton = ({onClick}) => {

    return (
        <button
            // disabled={disabled}
            className={ss.button}
            // type={type}
            onClick={onClick}
        >
            <div className={ss.img}></div>
        </button>
    );
};

export default OptionButton;
