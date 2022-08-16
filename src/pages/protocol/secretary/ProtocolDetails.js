import React, {useState} from 'react';
import ownStyles from "../../output/Output.module.scss";
import {Pagination} from "../../../components/pagination/Pagination";
import ownStyles2 from "../Protocol.module.scss"
import inputStyles from "../../../components/input/Input.module.scss";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import OptionButton from "../../../components/optionButton/OptionButton";
import Options from "../../../components/options/Options";
import DeleteModal from "../../../components/modals/DeleteModal";
import SuccessModal from "../../../components/modals/SuccessModal";

const ProtocolDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const [editButton, setEditButton] = useState(false);

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    return (
        <>
        <div className={ownStyles2.wrapper2}>
            {
                editButton ? <BackButton onClick={() => setEditButton(false)}/> : <BackButton to="/main/protocol/protocols" />
            }
            {!editButton && (<OptionButton onClick={handleOpenOption} top="30px" right="30px"/>)}
            {openOption && <Options closeOption={handleOpenOption} setEditButton={setEditButton} handleOpenDeleteModal={handleOpenDeleteModal}/>}
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

            <div className={ownStyles2.description3}>
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

            <div style={{textAlign: 'center'}}>
                {editButton && <Button onClick={handleOpenSuccessModal} margin="70px auto 0" width="600px" classname="button" text="СОХРАНИТЬ"/>}
            </div>
        </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данные о протоколе!"/>}
            { openDeleteModal && <DeleteModal text="Вы уверены, что хотите удалить данный протокол?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>
    );
};

export default ProtocolDetails;