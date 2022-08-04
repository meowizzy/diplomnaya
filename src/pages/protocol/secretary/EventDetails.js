import React from 'react';
import ownStyles from "../../output/Output.module.scss";
import ownStyles2 from "../Protocol.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import {useNavigate} from "react-router";

const EventDetails = () => {

    const navigate = useNavigate();

    return (
        <div className={ownStyles2.wrapper2}>
            <BackButton to="/main/protocol/all_events" />
            <div className={ownStyles2.header2}>
                <p style={{ margin: "0 0 70px", fontSize: "26px", fontWeight:"bold" }}>Информация о протоколе</p>
                <p style={{ margin: "0 0 20px", fontSize: "20px", fontWeight:"bold" }}>
                    Чемпионат Кыргызской Респубики по традиционному ушу
                </p>
                <p style={{ margin: "0 0 50px",}}>
                    29.06.2022г. - 30.06.2022г.
                </p>
                <p style={{ margin: "0 0 20px",}}>
                    День первый
                </p>
                <p style={{ margin: "0 0 58px",fontWeight:"bold" }}>29 июня</p>
            </div>

            <div className={ownStyles2.description2}>
                <p style={{ marginBottom: "20px",fontWeight:"bold" }}>
                    Открытие первых видов соревнований
                </p>
                <p style={{ marginBottom: "30px" }}>
                    Время: 10:15
                </p>
                <p style={{ marginBottom: "20px", fontWeight:"bold" }}>
                    Подгруппа 1. {""}
                    <span style={{fontWeight:"normal" }}>
                            Дуйлянь, 8-10 лет
                          </span>
                </p>
                <p style={{ marginBottom: "40px" }}>
                    Время: 10:30
                </p>
            </div>

            <div className={ownStyles.input_cont} style={{ fontWeight: "500", marginTop: 10 }}>
                <input disabled className={ownStyles.title1} value="№"/>
                <input style={{flex: 8}} disabled className={ownStyles.title2} value="Спортсмен"/>
                <input style={{flex: 5.5}} disabled className={ownStyles.title} value="Школа/клуб"/>
                <input style={{flex: 5.5}} disabled className={ownStyles.title} value="Арена" />
                <input style={{flex: 10}} disabled className={ownStyles.title} value="Примечание" />
            </div>
            <div className={ownStyles.input_cont}>
                <input className={ownStyles.input11} type="text" value="1" />
                <input style={{flex: 8}} className={ownStyles.input2} type="text" value="Стёпка Киборг Убийца"/>
                <input style={{flex: 5.5}} className={ownStyles.input} type="text" value="Золотой дракон" />
                <input style={{flex: 5.5}} className={ownStyles.input} type="text" value="Красная (первая)"/>
                <input style={{flex: 10}} className={ownStyles.last_input} type="text" value="Выступление с шестом"/>
            </div>

            <div className={ownStyles2.description2}>
                <p style={{ marginBottom: "20px", marginTop: "100px", fontWeight:"bold" }}>
                    Подгруппа 1. {""}
                    <span style={{fontWeight:"normal" }}>
                            Дуйлянь, 8-10 лет
                          </span>
                </p>
                <p style={{ marginBottom: "40px" }}>
                    Время: 10:30
                </p>
            </div>

            <div className={ownStyles.input_cont} style={{ fontWeight: "500", marginTop: 10 }}>
                <input disabled className={ownStyles.title1} value="№"/>
                <input style={{flex: 8}} disabled className={ownStyles.title2} value="Спортсмен"/>
                <input style={{flex: 5.5}} disabled className={ownStyles.title} value="Школа/клуб"/>
                <input style={{flex: 5.5}} disabled className={ownStyles.title} value="Арена" />
                <input style={{flex: 10}} disabled className={ownStyles.title} value="Примечание" />
            </div>
            <div className={ownStyles.input_cont}>
                <input className={ownStyles.input11} type="text" value="1" />
                <input style={{flex: 8}} className={ownStyles.input2} type="text" value="Стёпка Киборг Убийца"/>
                <input style={{flex: 5.5}} className={ownStyles.input} type="text" value="Золотой дракон" />
                <input style={{flex: 5.5}} className={ownStyles.input} type="text" value="Красная (первая)"/>
                <input style={{flex: 10}} className={ownStyles.last_input} type="text" value="Выступление с шестом"/>
            </div>

            <div style={{textAlign: 'center'}}>
                <Button onClick={() => navigate("/main/protocol/all_events/event_details/form_protocol")} margin="70px auto 0" width="600px" text="СФОРМИРОВАТЬ АРЕНЫ" />
            </div>

        </div>
    );
};

export default EventDetails;
