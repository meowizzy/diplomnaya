import React from 'react';
import s from "../../users/registered/Registered.module.scss";
import Input from "../../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../../components/pagination/Pagination";
import {search_icon} from "../../../images";

const DefaultClubs = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p>Название клуба</p>
                    <p>Тренер</p>
                    <p>Адрес</p>
                    <p>Спортсмены</p>
                </div>
                <Link to="/main/clubs/clubDetails">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p>Золотой дракон</p>
                        <p>Кот  Леопольд</p>
                        <p>Бишкек, 7 микр. 20 школа</p>
                        <p>16 человек</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default DefaultClubs;
