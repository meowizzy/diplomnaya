import React from 'react';
import s from "../../../users/registered/Registered.module.scss";
import Input from "../../../../components/input/Input";
import {search_icon} from "../../../../images";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";

const ListOfClubSportsmen = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p>ФИО</p>
                    <p>Дата рождения</p>
                    <p>Номер</p>
                    <p>Адрес</p>
                </div>
                <Link to="/main/clubs/all_clubs/all_club_details/list_sportsmen/sportsman_details">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p>Стёпка Киборг Убийца</p>
                        <p>20.02.2002 г.</p>
                        <p>+996 000 123 456</p>
                        <p>Солнечная система, галактика Млечн ...</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default ListOfClubSportsmen;
