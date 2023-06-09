import React from 'react';
import ClubsTab from "./ClubsTab";
import s from "../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import DefaultClubs from "./defaultClubs/DefaultClubs";
import ClubDetails from "./defaultClubs/ClubDetails";
import CreateClub from "./defaultClubs/CreateClub";
import EditClub from "./defaultClubs/EditClub";

const AdminClubs = () => {
    return (
        <div>
            <ClubsTab/>
            <div className={s.cont}>
                <Routes>
                    <Route path="/all_clubs" element={<DefaultClubs />} />
                    <Route path="/clubDetails/:id" element={<ClubDetails />} />
                    <Route path="/createClub" element={<CreateClub />} />
                    <Route path="/editClub/:id" element={<EditClub />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminClubs;
