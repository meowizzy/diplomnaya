import React from 'react';
import {useLocation, useNavigate} from "react-router";
import s from "./DefaultNews.module.scss";
import ButtonForActiveChanges from "../../../components/buttonForActiveChanges/ButtonForActiveChanges";
import {NavLink} from "react-router-dom";
import {linkActiveClassName} from "../../../utils/ActiveLink";

const NewsTab = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const role = localStorage.getItem("role");
    return (
        <div className={s.tab}>
            <div style={{marginBottom: 0}} className={s.link_cont}>
                <NavLink className={linkActiveClassName(location,"all_news", 3, s.link, s.active_link)} to="/main/news/all_news">Все новости</NavLink>
                <NavLink className={linkActiveClassName(location,"2022_news", 3, s.link, s.active_link)} to="/main/news/2022_news">Новости за 2022г.</NavLink>
                <NavLink className={linkActiveClassName(location,"2021_news", 3, s.link, s.active_link)} to="/main/news/2021_news">Новости за 2021г.</NavLink>
            </div>
            {
                role === "admin" && <ButtonForActiveChanges classname="no_button" onClick={() => navigate("/main/news/create_news")} margin={0} text="СОЗДАТЬ"/>
            }

        </div>
    );
};

export default NewsTab;
