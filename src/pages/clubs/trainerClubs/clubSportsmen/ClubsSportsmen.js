import React, {useEffect} from 'react';
import s from "../../../users/registered/Registered.module.scss";
import Input from "../../../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";
import {search_icon} from "../../../../images";
import {useDispatch, useSelector} from "react-redux";
import {getSportsmen} from "../../../../redux/slices/sportsmenSlice";

const ClubSportsmen = () => {

    const dispatch = useDispatch();
    const sportsmen = useSelector(state => state.sportsmen.sportsmen)

    useEffect(() => {
        dispatch(getSportsmen())
    }, [])

    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p style={{ flex: 7}}>ФИО</p>
                    <p style={{ flex: 5}}>Дата рождения</p>
                    <p style={{ flex: 5}}>Номер</p>
                    <p style={{ flex: 10}}>Адрес</p>
                </div>
                {
                    sportsmen.map((sportsman, index) => {
                        return <Link key={sportsman.id} to={`/main/clubs/sportsmen/sportsman_details/${sportsman.id}`}>
                                    <div className={s.title}>
                                        <p className={s.first_p}>{index + 1}</p>
                                        <p style={{ flex: 7}}>{sportsman.name} {sportsman.surname}</p>
                                        <p style={{ flex: 5}}>{sportsman.birthday}</p>
                                        <p style={{ flex: 5}}>{sportsman.phone_number}</p>
                                        <p style={{ flex: 10}}>{sportsman.address}</p>
                                    </div>
                                </Link>
                    })
                }
                <Pagination/>
            </div>
        </div>
    );
};

export default ClubSportsmen;
