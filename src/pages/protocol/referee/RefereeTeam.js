import React from 'react';
import s from "../../users/registered/Registered.module.scss";
import Input from "../../../components/input/Input";
import {search_icon} from "../../../images";
import {Link} from "react-router-dom";
import {Pagination} from "../../../components/pagination/Pagination";

const RefereeTeam = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p style={{flex: 1, textAlign: "center"}}>№</p>
                    <p style={{flex: 12}}>Название</p>
                    <p style={{flex: 4}}>Дата</p>
                    <p style={{flex: 4}}>Спортсмены</p>
                    <p style={{flex: 4}}>Судьи</p>
                </div>
                <Link to="/main/protocol/referee_team/details">
                    <div className={s.title}>
                        <p style={{flex: 1, textAlign: "center"}}>1</p>
                        <p style={{flex: 12}}>Чемпионат Кыргызской Республики по традицион ...</p>
                        <p style={{flex: 4}}>29 - 30.06.2022г.</p>
                        <p style={{flex: 4}}>19</p>
                        <p style={{flex: 4}}>Тестовчи, Тесто ...</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default RefereeTeam;
