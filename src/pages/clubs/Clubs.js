import React from 'react';
import AdminClubs from "./AdminClubs";
import TrainerClubs from "./TrainerClubs";
import {getCookie} from "../../utils/cookieFunction/cookieFunction";

const Clubs = () => {
    const role = JSON.parse(getCookie("user_info"))
    return (
        <>
            { role["user role"] === "ADMIN" && <AdminClubs /> }
            { role["user role"] === "TRAINER" && <TrainerClubs /> }
        </>
    );
};

export default Clubs;
