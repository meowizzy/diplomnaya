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
                    <p>Название клуба</p>
                    <p>Тренер</p>
                    <p>Адрес</p>
                    <p>Спортсмены</p>
                </div>
                <Link to="/main/clubs/my_clubs/my_clubs_details/list_sportsmen">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p>Золотой дракон</p>
                        <p>Александр Сергеевич</p>
                        <p>Бишкек, 7 микр. 20 школа</p>
                        <p>16 человек</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default TrainerMyClubs;
