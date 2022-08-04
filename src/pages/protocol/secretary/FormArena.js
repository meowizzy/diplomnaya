import React from 'react';
import ownStyles2 from "../Protocol.module.scss";
import Button from "../../../components/button/Button";
import {useNavigate} from "react-router";
import BackButton from "../../../components/arrowButton/BackButton";
import SuccessModal from "../../../components/modals/SuccessModal";
import inputStyles from "../../../components/input/Input.module.scss";

const FormArena = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false)

    const navigate = useNavigate();

    const tempFunc = () => {
        navigate("/main/protocol/all_events/form_protocol/approve_formed_protocol");
        handleOpenSuccessModal()
    }

    return (
        <>
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

            <p style={{ marginBottom: "30px", marginTop: "100px", fontWeight:"bold", textAlign: "center" }}>
                Выберите номер подгруппы
            </p>
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
            <Button onClick={tempFunc} width="600px" text="СФОРМИРОВАТЬ ПРОТОКОЛ" />
        </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали протокол!"/>}
        </>
    );
};

export default FormArena;
