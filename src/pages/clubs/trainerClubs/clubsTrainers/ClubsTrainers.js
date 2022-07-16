import React from 'react';
import s from "../../../users/registered/Registered.module.scss";
import Input from "../../../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";
import {search_icon} from "../../../../images";

const ClubsTrainers = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p  style={{flex: 10}}>ФИО</p>
                    <p style={{flex: 8}}>Номер</p>
                    <p style={{flex: 11}}>Почта</p>
                    <p style={{flex: 8}}>Город / страна</p>
                </div>
                <Link to="/main/clubs/trainers/details">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p style={{flex: 10}}>Леонид Ильич Брежнев</p>
                        <p style={{flex: 8}}>+996 000 123 456</p>
                        <p style={{flex: 11}}>leonid_ilic_brezhnev@gmail.com</p>
                        <p style={{flex: 8}}>Бишкек, Кыргызстан</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default ClubsTrainers;
