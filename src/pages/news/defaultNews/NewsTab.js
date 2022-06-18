import React from 'react';
import {useNavigate} from "react-router";
import s from "./DefaultNews.module.scss";
import dfEventStyles from "../../events/defaultEvents/DefaultEvents.module.scss";
import Button from "../../../components/button/Button";
import ButtonForActiveChanges from "../../../components/buttonForActiveChanges/ButtonForActiveChanges";

const NewsTab = () => {
    const navigate = useNavigate();
    return (
        <div className={s.tab}>
            <div style={{marginBottom: 0}} className={s.link_cont}>
                <p className={s.link}>Все новости</p>
                <p className={s.link}>Новости за 2022г.</p>
                <p className={s.link}>Новости за 2021г.</p>
            </div>
            <ButtonForActiveChanges classname="no_button" onClick={() => navigate("/main/news/create_news")} margin={0} text="СОЗДАТЬ"/>
        </div>
    );
};

export default NewsTab;
