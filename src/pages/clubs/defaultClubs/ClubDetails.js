import React, {useState} from 'react';
import Input from "../../../components/input/Input";
import s from "./DefaultClubs.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import OptionButton from "../../../components/optionButton/OptionButton";
import {useNavigate} from "react-router";
import Options from "../../../components/options/Options";
import DeleteModal from "../../../components/modals/DeleteModal";

const ClubDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    return (
        <>
            <div className={s.form_cont}>
                <BackButton to="/main/clubs/all_clubs" />
                <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                {openOption && <Options link="/main/clubs/editClub" handleOpenDeleteModal={handleOpenDeleteModal}/>}
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
            </div>
            { openDeleteModal && <DeleteModal text="Вы уверены, что хотите удалить данный клуб?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default ClubDetails;
