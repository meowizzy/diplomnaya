import React from 'react';
import {useNavigate} from "react-router";
import s from "../news/defaultNews/DefaultNews.module.scss";
import ButtonForActiveChanges from "../../components/buttonForActiveChanges/ButtonForActiveChanges";


const ClubsTab = () => {
    const navigate = useNavigate();
    return (
        <div className={s.tab}>
            <div style={{marginBottom: 0}} className={s.link_cont}>
                <p className={s.link}>Все клубы</p>
            </div>
            <ButtonForActiveChanges classname="no_button" onClick={() => navigate("/main/clubs/createClub")} margin={0} text="СОЗДАТЬ"/>
        </div>
    );
};

export default ClubsTab;
