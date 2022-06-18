import React from 'react';
import ClubsTab from "./ClubsTab";
import s from "../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import DefaultClubs from "./defaultClubs/DefaultClubs";
import ClubDetails from "./defaultClubs/ClubDetails";
import CreateClub from "./defaultClubs/CreateClub";
import EditClub from "./defaultClubs/EditClub";

const Clubs = () => {
    return (
        <div>
            <ClubsTab/>
            <div className={s.cont}>
                <Routes>
                    <Route path="/*" element={<DefaultClubs />} />
                    <Route path="/clubDetails" element={<ClubDetails />} />
                    <Route path="/createClub" element={<CreateClub />} />
                    <Route path="/editClub" element={<EditClub />} />
                </Routes>
            </div>
        </div>
    );
};

export default Clubs;
