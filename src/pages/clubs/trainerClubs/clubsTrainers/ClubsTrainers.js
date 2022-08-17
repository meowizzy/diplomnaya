import React, {useEffect} from 'react';
import s from "../../../users/registered/Registered.module.scss";
import Input from "../../../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";
import {search_icon} from "../../../../images";
import {useDispatch, useSelector} from "react-redux";
import {getTrainerUser} from "../../../../redux/slices/userSlice";

const ClubsTrainers = () => {

    const dispatch = useDispatch();
    const trainers = useSelector(state => state.user.userTrainer)

    useEffect(() => {
        dispatch(getTrainerUser())
    },[])

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
                {
                    trainers.map((trainer, index) => {
                        return <Link to={`/main/clubs/trainers/details/${trainer.id}`}>
                                    <div className={s.title}>
                                        <p className={s.first_p}>{index+1}</p>
                                        <p style={{flex: 10}}> {trainer.name} {trainer.surname}</p>
                                        <p style={{flex: 8}}>{trainer.number}</p>
                                        <p style={{flex: 11}}>{trainer.email}</p>
                                        <p style={{flex: 8}}>{trainer.address}</p>
                                    </div>
                                </Link>
                    })
                }
                <Pagination/>
            </div>
        </div>
    );
};

export default ClubsTrainers;
