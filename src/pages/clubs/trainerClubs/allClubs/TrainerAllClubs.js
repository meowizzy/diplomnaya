import React from 'react';
import s from "../../../users/registered/Registered.module.scss";
import Input from "../../../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";
import {search_icon} from "../../../../images";

const TrainerAllClubs = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p style={{flex: 5}}>Название клуба</p>
                    <p style={{flex: 5}}>Тренер</p>
                    <p style={{flex: 11}}>Адрес</p>
                    <p style={{flex: 5}}>Спортсмены</p>
                </div>
                <Link to="/main/clubs/all_clubs/all_club_details">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p style={{flex: 5}}>Золотой дракон</p>
                        <p style={{flex: 5}}>Кот  Леопольд</p>
                        <p style={{flex: 11}}>Бишкек, 7 микр. 20 школа</p>
                        <p style={{flex: 5}}>16 человек</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default TrainerAllClubs;
