import React from "react";
import s from "./ButtonForActiveChanges.module.scss";

const ButtonForActiveChanges = ({ classname,disabled, text = "", type, width, margin, onClick }) => {
    return (
        <button
            disabled={disabled}
            className={s[classname]}
            type={type}
            style={{ width: width, margin: margin }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ButtonForActiveChanges;
