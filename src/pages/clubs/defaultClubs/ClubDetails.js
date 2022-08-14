import React, {useEffect, useState} from 'react';
import Input from "../../../components/input/Input";
import s from "./DefaultClubs.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import OptionButton from "../../../components/optionButton/OptionButton";
import {useParams} from "react-router";
import Options from "../../../components/options/Options";
import DeleteModal from "../../../components/modals/DeleteModal";
import {useDispatch, useSelector} from "react-redux";
import {deleteClub, getClub} from "../../../redux/slices/clubSlice";

const ClubDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const {id} = useParams();
    const dispatch = useDispatch();
    const club = useSelector(state => state.clubs.club)

    useEffect(() => {
        dispatch(getClub(id))
    }, [])

    return (
        <>
            <div className={s.form_cont}>
                <BackButton to="/main/clubs/all_clubs" />
                <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                {openOption && <Options link={`/main/clubs/editClub/${club.id}`} handleOpenDeleteModal={handleOpenDeleteModal}/>}
                <p className="container_title">Информация о клубе</p>
                <Input valueLabel="Клуб" width="100%" value={club.name}/>
                <Input valueLabel="Адрес" width="100%" value={club.address}/>
                {/*<Input valueLabel="Тренер" width="100%" value="Тренер"/>*/}
                {/*<Input valueLabel="Кол-во спортсменов" width="100%" value={club.sum_of_people}/>*/}
                <div className="flex">
                    <Input valueLabel="Возраст спортсменов" width="285px" value={`С ${club.min_age} лет`}/>
                    <div className={s.inp_plus_cont}>
                        <Input width="285px" value={`По ${club.max_age} лет`}/>
                    </div>
                </div>
            </div>
            { openDeleteModal && <DeleteModal nav_link="/main/clubs/all_clubs" dispatchFunc={deleteClub(club.id)}  text="Вы уверены, что хотите удалить данный клуб?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default ClubDetails;
