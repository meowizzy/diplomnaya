import React from 'react';
import ss from "../threeDot/ThreeDot.module.scss"

const OptionButton = ({onClick}) => {

    return (
        <button
            className={ss.button}
            onClick={onClick}
        >
            <div className={ss.img}></div>
        </button>
    );
};

export default OptionButton;
