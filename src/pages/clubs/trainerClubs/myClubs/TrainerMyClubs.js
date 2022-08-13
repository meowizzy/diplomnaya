import React from 'react';
import s from "../../../users/registered/Registered.module.scss";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";

const TrainerMyClubs = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p style={{flex: 7}}>Название клуба</p>
                    <p style={{flex: 7}}>Тренер</p>
                    <p style={{flex: 9}}>Номер</p>
                    <p style={{flex: 5}}>Спортсмены</p>
                </div>
                <Link to="/main/clubs/my_clubs/my_clubs_details/list_sportsmen">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p style={{flex: 7}}>Золотой дракон</p>
                        <p style={{flex: 7}}>Александр Сергеевич</p>
                        <p style={{flex: 9}}>+996 000 123 456</p>
                        <p style={{flex: 5}}>16 человек</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default TrainerMyClubs;
