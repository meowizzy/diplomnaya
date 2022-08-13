import React from 'react';
import ownStyles2 from "../Protocol.module.scss";
import ownStyles from "../../output/Output.module.scss";
import Button from "../../../components/button/Button";
import {useNavigate} from "react-router";
import BackButton from "../../../components/arrowButton/BackButton";

const FormProtocol = () => {

    const navigate = useNavigate();

    const tempFunc = () => {
        navigate("/main/protocol/all_events/event_details/form_protocol/form_arena");
    }

    return (
        <div style={{textAlign: "center"}} className={ownStyles2.wrapper2}>
            <BackButton to="/main/protocol/all_events/event_details" />
            <div className={ownStyles2.header2}>
                <p style={{ margin: "0px 0 30px", fontSize: "26px", fontWeight:"bold" }}>ПРОТОКОЛ</p>
                <p style={{ margin: "0px 0 20px", fontSize: "20px", fontWeight:"bold" }}>
                    Чемпионат Кыргызской Респубики по традиционному ушу
                </p>
                <p style={{ margin: "0px 0 48px",}}>
                    29.06.2022г. - 30.06.2022г.
                </p>
                <p style={{ margin: "0px 0 20px",}}>
                    День первый
                </p>
                <p style={{ margin: "0px 0 60px",fontWeight:"bold" }}>29 июня</p>
            </div>

            <div className={ownStyles.input_cont} style={{ fontWeight: "500", marginTop: 10 }}>
                <input disabled className={ownStyles.title1} value="№"/>
                <input disabled className={ownStyles.title2} value="Подгруппа/возраст"/>
                <input disabled className={ownStyles.title} value="Кол-во человек"/>
                <input disabled className={ownStyles.title} value="Выступление" />
                <input disabled className={ownStyles.title} value="Кол-во мест на арене" />
                <input disabled className={ownStyles.title} value="Процент призовых мест" />
            </div>
            <div className={ownStyles.input_cont}>
                <input className={ownStyles.input1} type="text" value="1" />
                <input className={ownStyles.input2} style={{width: 300}} type="text" value="Дулянь, мальчики 10-12 лет"/>
                <input className={ownStyles.input} type="text" value="6" />
                <input className={ownStyles.input} type="text" placeholder="1:20 с."/>
                <input className={ownStyles.input} type="text" placeholder="Введите число"/>
                <input className={ownStyles.last_input} type="text" placeholder="Введите число"/>
            </div>
            <Button onClick={tempFunc} width="600px" text="ДАЛЕЕ" />
        </div>
    );
};

export default FormProtocol;
