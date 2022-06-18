import React from 'react';
import Input from "../../../components/input/Input";
import s from "./DefaultClubs.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import {useNavigate} from "react-router";
import Button from "../../../components/button/Button";
import SuccessModal from "../../../components/modals/SuccessModal";

const EditClub = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const navigate = useNavigate()
    return (
        <>
            <div className={s.form_cont}>
                <BackButton onClick={() => navigate("/main/clubs/clubDetails")}/>
                <p className="container_title">Информация о клубе</p>
                <Input valueLabel="Клуб" width="100%" value="Золотой дракон"/>
                <Input valueLabel="Адрес" width="100%" value="Бишкек, 7 микр. 20 школа"/>
                <Input valueLabel="Тренер" width="100%" value="Кот Леопольд"/>
                <Input valueLabel="Кол-во спортсменов" width="100%" value="16"/>
                <div className="flex">
                    <Input valueLabel="Возраст спортсменов" width="285px" value="С 8 лет"/>
                    <div className={s.inp_plus_cont}>
                        <Input width="285px" value="По 19 лет"/>
                    </div>
                </div>
                <div className="flex">
                    <Input valueLabel="Возрастная категория" width="285px" value="с 9"/>
                    <div className={s.inp_plus_cont}>
                        <Input width="285px" value="По 15"/>
                        <p className={s.plus}>+</p>
                    </div>
                </div>
                <Button onClick={handleOpenSuccessModal} width="100%" text="СОХРАНИТЬ"/>
            </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данные о клубе!"/>}
        </>

    );
};

export default EditClub;
