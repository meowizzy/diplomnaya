import React from 'react';
import {useLocation} from "react-router";
import s from "../news/defaultNews/DefaultNews.module.scss";
import {NavLink} from "react-router-dom";
import {linkActiveClassName} from "../../utils/ActiveLink";


const ProtocolTab = () => {

    const location = useLocation();
    const role = localStorage.getItem("role")
    return (
        <div className={s.tab}>
            <div style={{marginBottom: 0}} className={s.link_cont}>
                {/* Админ, Тренер */}
                {
                    role === "admin" && <NavLink className={linkActiveClassName(location,"all_protocols", 3, s.link, s.active_link)} to="/main/protocol/all_protocols">Все протоколы</NavLink>

                }
                {
                    role === "trainer" && <NavLink className={linkActiveClassName(location,"all_protocols", 3, s.link, s.active_link)} to="/main/protocol/all_protocols">Все протоколы</NavLink>

                }
                {/* Секретарь */}
                {
                    role === "secretary" &&
                    <>
                        <NavLink to="/main/protocol/all_events"  className={linkActiveClassName(location,"all_events", 3, s.link, s.active_link)}>Все мероприятия</NavLink>
                        <NavLink to="/main/protocol/protocols"  className={linkActiveClassName(location,"protocols",3, s.link, s.active_link)}>Протоколы</NavLink>
                    </>

                }
                {/* Главный судья */}
                {
                    role === "referee" &&
                    <>
                        <NavLink to="/main/protocol/new_protocols"  className={linkActiveClassName(location,"new_protocols",3, s.link, s.active_link)}>Новые протоколы</NavLink>
                        <NavLink to="/main/protocol/referee_team"  className={linkActiveClassName(location,"referee_team",3, s.link, s.active_link)}>Судейская бригада</NavLink>
                    </>
                }
            </div>
            {/*<Button onClick={() => navigate("/main/protocol/all_events/form_protocol")} margin={0} text="СОЗДАТЬ"/>*/}
        </div>
    );
};

export default ProtocolTab;
