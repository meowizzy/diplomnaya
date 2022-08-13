import React, {useEffect} from 'react';
import s from "../../../users/registered/Registered.module.scss";
import Input from "../../../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../../../components/pagination/Pagination";
import {search_icon} from "../../../../images";
import {useDispatch, useSelector} from "react-redux";
import {getClubs} from "../../../../redux/slices/clubSlice";
import {requests} from "../../../../redux/api";

const TrainerAllClubs = () => {
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubs.clubs)

    useEffect(() => {
        dispatch(getClubs())
        window.scrollTo(0, 0);
        requests.getTrainerUser().then(res => console.log("userss: ", res))
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
                    <p>Название клуба</p>
                    <p>Тренер</p>
                    <p>Адрес</p>
                    <p>Спортсмены</p>
                </div>
                {
                    clubs.map((club, index) => {
                        return <Link key={club.id} to={`/main/clubs/all_clubs/all_club_details/${club.id}`}>
                            <div className={s.title}>
                                <p className={s.first_p}>{index+1}</p>
                                <p>{club.name}</p>
                                <p>Тренер</p>
                                <p>{club.address}</p>
                                <p>{club.sum_of_people.split('.')[0]}</p>
                            </div>
                        </Link>
                    })
                }

                <Pagination/>
            </div>
        </div>
    );
};

export default TrainerAllClubs;
