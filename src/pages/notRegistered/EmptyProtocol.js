import React from 'react';
import s from "./NotRegistered.module.scss";
import Button from "../../components/button/Button";
import { Link } from 'react-router-dom';

const EmptyProtocol = () => {
    return (
        <div>
            <div id="dragon_for_empty_protocol">
                <img style={{width: "800px"}} className="dragon" src="https://i.gifer.com/XwYs.gif" alt=""/>
            </div>
            <div className={s.empty_pro_button}>
                <Link to="/Auth">
                    <Button width="140px" margin="0" text="ВОЙТИ" />
                </Link>
            </div>
            <div className={s.text}>
                <h3  className={s.empty_pr_text}>На данный момент актуальных протоколов<br/> выступлений нет.</h3>
            </div>
        </div>
    );
};

export default EmptyProtocol;
