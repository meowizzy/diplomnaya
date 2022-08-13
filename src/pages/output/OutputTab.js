import React from 'react';
import {useLocation, useNavigate} from "react-router";
import s from "../news/defaultNews/DefaultNews.module.scss";
import ButtonForActiveChanges from "../../components/buttonForActiveChanges/ButtonForActiveChanges";
import {NavLink} from "react-router-dom";
import {linkActiveClassName} from "../../utils/ActiveLink";


const OutputTab = () => {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className={s.tab}>
            <div style={{marginBottom: 0}} className={s.link_cont}>
                <NavLink className={linkActiveClassName(location,"all_output", 3, s.link, s.active_link)} to="/main/output/all_output">Итоги соревнований</NavLink>
            </div>
            <ButtonForActiveChanges classname="no_button" onClick={() => navigate("/main/output/create")} margin={0} text="СОЗДАТЬ"/>
        </div>
    );
};

export default OutputTab;
