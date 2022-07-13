import React from 'react';
import Input from "../../../../components/input/Input";
import ForwardButton from "../../../../components/arrowButton/ForwardButton";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useNavigate} from "react-router";

const AllClubDetails = () => {

    return (
        <div className={dfClubsStyles.form_cont}>
            <p className="container_title">Информация о клубе</p>
            <Input valueLabel="Клуб" width="100%" value="Золотой дракон"/>
            <Input valueLabel="Адрес" width="100%" value="Бишкек, 7 микр. 20 школа"/>
            <Input valueLabel="Тренер" width="100%" value="Кот Леопольд"/>
            <Input valueLabel="Кол-во спортсменов" width="100%" value="15"/>
            <div style={{marginTop: 30, position: "relative", alignItems: "center"}}  className="flex">
                <p className="basic_text">Посмотреть список спортсменов</p>
                <ForwardButton position="sticky" to="/main/clubs/all_clubs/all_club_details/list_sportsmen" />
            </div>
        </div>
    );
};

export default AllClubDetails;
