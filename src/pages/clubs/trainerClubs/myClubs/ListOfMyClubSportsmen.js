import React from 'react';
import s from "../../../users/registered/Registered.module.scss";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";

const ListOfMyClubSportsmen = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p>ФИО</p>
                    <p>Дата рождения</p>
                    <p>Номер</p>
                    <p>Адрес</p>
                </div>
                <Link to="/main/clubs/my_clubs/my_clubs_details/list_sportsmen/sportsman_details">
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

export default ListOfMyClubSportsmen;
