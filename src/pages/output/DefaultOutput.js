import React, {useEffect} from 'react';
import s from "../users/registered/Registered.module.scss";
import Input from "../../components/input/Input";
import {search_icon} from "../../images";
import ss from "../documentation/Documentation.module.scss";
import {Link} from "react-router-dom";
import {Pagination} from "../../components/pagination/Pagination";

const DefaultOutput = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={ss.title} style={{ fontWeight: "500" }}>
                    <p className={ss.flex1}>№</p>
                    <p className={ss.flex10}>Соревнования</p>
                    <p className={ss.flex10}>Подгруппа</p>
                    <p className={ss.flex5}>Кол-во спортсменов</p>
                </div>
                <Link to="/main/output/all_output/details">
                <div className={ss.title}>
                    <p className={ss.flex1}>1</p>
                    <p className={ss.flex10}>Чемпионат Кыргызстана по ушу</p>
                    <p className={ss.flex10}>Мальчики 17-13 лет Цюань шу 37 ф</p>
                    <p className={ss.flex5}>5</p>
                </div>
                </Link>
                <Link to="/main/output/all_output/details">
                    <div className={ss.title}>
                        <p className={ss.flex1}>2</p>
                        <p className={ss.flex10}>Городской чемпионат по ушу</p>
                        <p className={ss.flex10}>Мальчики 11-15 лет Цюань шу 45 ф</p>
                        <p className={ss.flex5}>3</p>
                    </div>
                </Link>

                <Link to="/main/output/all_output/details">
                    <div className={ss.title}>
                        <p className={ss.flex1}>3</p>
                        <p className={ss.flex10}>Чемпионат по ушу</p>
                        <p className={ss.flex10}>Мальчики 8-12 лет Цюань шу 23 ф</p>
                        <p className={ss.flex5}>9</p>
                    </div>
                </Link>
                <Link to="/main/output/all_output/details">
                    <div className={ss.title}>
                        <p className={ss.flex1}>4</p>
                        <p className={ss.flex10}>Республиканский чемпионат по ушу</p>
                        <p className={ss.flex10}>Мальчики 10-12 лет Цюань шу 45 ф</p>
                        <p className={ss.flex5}>4</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default DefaultOutput;
