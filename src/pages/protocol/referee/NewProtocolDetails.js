import React, {useState} from 'react';
import ownStyles from "../../output/Output.module.scss";
import {Pagination} from "../../../components/pagination/Pagination";
import ownStyles2 from "../Protocol.module.scss"
import inputStyles from "../../../components/input/Input.module.scss";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import SuccessModal from "../../../components/modals/SuccessModal";
import ButtonForActiveChanges from "../../../components/buttonForActiveChanges/ButtonForActiveChanges";
import Input from "../../../components/input/Input";

const NewProtocolDetails = () => {


    const [acceptButton, setAcceptButton] = useState("choice");

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    return (
        <>
            <div className={ownStyles2.wrapper2}>
                {
                    acceptButton === "choice" ? <BackButton to="/main/protocol/new_protocols"/> : <BackButton onClick={() => setAcceptButton("choice")} />
                }
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
                <p style={{ marginBottom: "30px", marginTop: "100px", fontWeight:"bold", textAlign: "center" }}>
                    Выберите номер подгруппы
                </p>
                <Pagination/>

                <div className={ownStyles2.description2}>
                    <p style={{ marginBottom: "20px", marginTop: "70px", fontWeight:"bold" }}>
                        Подгруппа 1. {""}
                        <span style={{fontWeight:"normal" }}>
                            Дуйлянь, 8-10 лет
                          </span>
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                        Школа/клуб: Золотой дракон
                    </p>

                    <p style={{ marginBottom: "30px" }}>
                        Время: 10:30
                    </p>
                </div>

                <div className={ownStyles2.arena_cont}>
                    <label className={inputStyles.label}>Арена</label>
                    <div style={{width: "100%", height: "200px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                        <div className={`${inputStyles.input} ${ownStyles2.arena}`}>
                            <div className={ownStyles2.arena_place}>Участник 1</div>
                            <div className={ownStyles2.arena_place}>Участник 2</div>
                            <div className={ownStyles2.arena_place}>Участник 3</div>
                            <div className={ownStyles2.arena_place}>Участник 4</div>
                            <div className={ownStyles2.arena_place}>Участник 5</div>
                            <div className={ownStyles2.arena_place}>Участник 6</div>
                        </div>
                    </div>

                </div>


                {
                    (() =>  {switch(acceptButton){
                    case "choice":
                        return <div className={ownStyles2.header2}>
                                    <p style={{margin: "70px 0 30px", fontWeight: "bold"}}>
                                    Утвердить протокол и арены?
                                    </p>
                                    <div className={ownStyles2.button_cont}>
                                    <ButtonForActiveChanges onClick={() => setAcceptButton("yes")} classname="yes_button" margin="0" width="210px" text="ДА" />
                                    <ButtonForActiveChanges onClick={() => setAcceptButton("no")} classname="no_button" margin="0" width="210px" text="НЕТ"/>
                                    </div>
                                </div>
                    case "no":
                        return  <div className={ownStyles2.header2}>
                                    <p style={{margin: "70px 0 30px", fontWeight: "bold"}}>
                                    Протокол и арены отклонены, опишите причину.
                                    </p>
                                    <Input margin="auto" width="600px" placeholder="Введите текст"/>
                                    <Button margin="70px 0 0" width="600px" text="ОТПРАВИТЬ"/>
                                </div>
                    case "yes":
                        return <div style={{textAlign: "center"}}>
                                    <p style={{margin: "100px 0 30px", fontSize: "26px", fontWeight:"bold"}}>Судейская бригада</p>
                                    <div className={ownStyles.input_cont} style={{fontWeight: "500", marginTop: 10}}>

                                        <input disabled className={ownStyles.title1} value="№"/>
                                        <input style={{flex: 5}} disabled className={ownStyles.title2} value="Время"/>
                                        <input style={{flex: 7}} disabled className={ownStyles.title} value="Подгруппа"/>
                                        <input style={{flex: 10}} disabled className={ownStyles.title} value="Судейская бригада" />
                                        <input style={{flex: 7}} disabled className={ownStyles.title} value="Арена" />

                                    </div>
                                    <div className={ownStyles.input_cont}>
                                        <input className={ownStyles.input11} type="text" placeholder="1"/>
                                        <input style={{flex: 5}} className={ownStyles.input2} type="text" placeholder="00:00 - 00:00"/>
                                        <input style={{flex: 7}} className={ownStyles.input} type="text" placeholder="Введите подгруппу"/>
                                        <input style={{flex: 10}} className={ownStyles.input} type="text" placeholder="Введите ФИО"/>
                                        <input style={{flex: 7,borderRight: "none"}} className={ownStyles.input} type="text" placeholder="Наименование арены"/>
                                    </div>

                                    <ButtonForActiveChanges margin="70px 0 70px" width="600px" classname="yes_button" text="ДОБАВИТЬ СТРОКУ" />
                                    <ButtonForActiveChanges onClick={handleOpenSuccessModal} width="600px" classname="yes_button" text="СОХРАНИТЬ" />
                                </div>
                }})()
                }



        </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно добавили судейскую бригаду!"/>}
        </>
    );
};

export default NewProtocolDetails;
