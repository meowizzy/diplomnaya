import React from 'react';
import Input from "../../../components/input/Input";
import s from "./DefaultClubs.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import {useNavigate} from "react-router";
import Button from "../../../components/button/Button";
import SuccessModal from "../../../components/modals/SuccessModal";

const CreateClub = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const navigate = useNavigate()
    return (
        <>
            <div className={s.form_cont}>
                <BackButton onClick={() => navigate("/main/clubs")}/>
                <p className="container_title">Создать клуб</p>
                <Input valueLabel="Клуб" width="100%" placeholder="Название клуба"/>
                <Input valueLabel="Адрес" width="100%" placeholder="Адрес клуба"/>
                <Input valueLabel="Тренер" width="100%" placeholder="Имя тренера"/>
                <Input valueLabel="Кол-во спортсменов" width="100%" placeholder="Кол-во спортсменов"/>
                <div className="flex">
                    <Input valueLabel="Возраст спортсменов" width="285px" placeholder="C"/>
                    <div className={s.inp_plus_cont}>
                        <Input width="285px" placeholder="По"/>
                    </div>
                </div>
                <div className="flex">
                    <Input valueLabel="Возрастная категория" width="285px" placeholder="C"/>
                    <div className={s.inp_plus_cont}>
                        <Input width="285px" placeholder="По" />
                        <p className={s.plus}>+</p>
                    </div>
                </div>
                <Button onClick={handleOpenSuccessModal} disabled width="100%" text="СОЗДАТЬ"/>
            </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали клуб!"/>}
        </>

    );
};

export default CreateClub;
