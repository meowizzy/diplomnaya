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
                    <p style={{ flex: 7}}>ФИО</p>
                    <p style={{ flex: 5}}>Дата рождения</p>
                    <p style={{ flex: 5}}>Номер</p>
                    <p style={{ flex: 10}}>Адрес</p>
                </div>
                <Link to="/main/clubs/my_clubs/my_clubs_details/sportsman_details">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p style={{ flex: 7}}>Стёпка Киборг Убийца</p>
                        <p style={{ flex: 5}}>20.02.2002 г.</p>
                        <p style={{ flex: 5}}>+996 000 123 456</p>
                        <p style={{ flex: 10}}>Солнечная система, галактика Млечн ...</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default ListOfMyClubSportsmen;
