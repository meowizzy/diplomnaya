import React, {useEffect} from 'react';
import Input from "../../../../components/input/Input";
import ForwardButton from "../../../../components/arrowButton/ForwardButton";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getClub} from "../../../../redux/slices/clubSlice";
import BackButton from "../../../../components/arrowButton/BackButton";

const AllClubDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const club = useSelector(state => state.clubs.club)

    useEffect(() => {
        dispatch(getClub(id))
    }, [])


    return (
        <div className={dfClubsStyles.form_cont}>
            <BackButton to="/main/clubs/all_clubs"/>
            <p className="container_title">Информация о клубе</p>
            <Input valueLabel="Клуб" width="100%" value={club.name}/>
            <Input valueLabel="Адрес" width="100%" value={club.address}/>
            <Input valueLabel="Тренер" width="100%" value="Trainer"/>
            <Input valueLabel="Кол-во спортсменов" width="100%" value={club.sum_of_people}/>
            <div style={{marginTop: 30, position: "relative", alignItems: "center"}}  className="flex">
                <p className="basic_text">Посмотреть список спортсменов</p>
                <ForwardButton position="sticky" to={`/main/clubs/all_clubs/all_club_details/list_sportsmen/${club.id}`} />
            </div>
        </div>
    );
};

export default AllClubDetails;
