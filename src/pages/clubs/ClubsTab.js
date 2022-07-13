import React from 'react';
import {useLocation, useNavigate} from "react-router";
import s from "../news/defaultNews/DefaultNews.module.scss";
import ButtonForActiveChanges from "../../components/buttonForActiveChanges/ButtonForActiveChanges";
import {NavLink} from "react-router-dom";
import {linkActiveClassName, VisibleBackButton} from "../../utils/ActiveLink";


const ClubsTab = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const role = localStorage.getItem('role');
    return (
        <div className={s.tab}>
            <div style={{marginBottom: 0}} className={s.link_cont}>
                {
                    role === "admin" && <NavLink className={linkActiveClassName(location,"all_clubs", 3, s.link, s.active_link)} to="/main/clubs/all_clubs">Все клубы</NavLink>
                }
                {
                    role === "trainer" &&
                    <>
                        <NavLink className={linkActiveClassName(location,"all_clubs", 3, s.link, s.active_link)} to="/main/clubs/all_clubs">Все клубы</NavLink>
                        <NavLink to="/main/clubs/my_clubs"  className={linkActiveClassName(location,"my_clubs", 3, s.link, s.active_link)}>Мои клубы</NavLink>
                        <NavLink to="/main/clubs/trainers"  className={linkActiveClassName(location,"trainers", 3, s.link, s.active_link)}>Тренеры</NavLink>
                        <NavLink to="/main/clubs/sportsmen"  className={linkActiveClassName(location,"sportsmen",3, s.link, s.active_link)}>Спортсмены</NavLink>
                        <NavLink to="/main/clubs/statistics"  className={linkActiveClassName(location,"statistics",3, s.link, s.active_link)}>Статистика</NavLink>
                    </>
                }

            </div>
            {VisibleBackButton(location,"list_sportsmen", 5) && <ButtonForActiveChanges classname="back_button" text="вернуться" onClick={() => navigate("/main/clubs/all_clubs/all_club_details")}/> }
            {VisibleBackButton(location,"sportsmen", 3) && <ButtonForActiveChanges classname="no_button" onClick={() => navigate("/main/clubs/sportsmen/create")} margin={0} text="Добавить"/> }
            {
                role === "admin" && <ButtonForActiveChanges classname="no_button" onClick={() => navigate("/main/clubs/createClub")} margin={0} text="СОЗДАТЬ"/>
            }
        </div>
    );
};

export default ClubsTab;
