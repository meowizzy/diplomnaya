import React from 'react';
import ClubsTab from "./ClubsTab";
import s from "../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import TrainerAllClubs from "./trainerClubs/allClubs/TrainerAllClubs";
import TrainerMyClubs from "./trainerClubs/myClubs/TrainerMyClubs";
import ClubsSportsmen from "./trainerClubs/clubSportsmen/ClubsSportsmen";
import TrainerClubsStatistics from "./trainerClubs/clubsStatistics/TrainerClubsStatistics";
import AllClubDetails from "./trainerClubs/allClubs/AllClubDetails";
import ListOfClubSportsmen from "./trainerClubs/allClubs/ListOfClubSportsmen";
import ListOfMyClubSportsmen from "./trainerClubs/myClubs/ListOfMyClubSportsmen";
import MyClubsSportsmenDetails from "./trainerClubs/myClubs/MyClubsSportsmenDetails";
import EditMyClubsSportsmenDetails from "./trainerClubs/myClubs/EditMyClubsSportsmenDetails";
import AllClubsSportsmenDetails from "./trainerClubs/allClubs/AllClubsSportsmenDetails";
import SportsmenDetails from "./trainerClubs/clubSportsmen/SportsmenDetails";

const TrainerClubs = () => {
    return (
        <div>
            <ClubsTab />
            <div className={s.cont}>
                <Routes>
                    {/* all clubs */}
                    <Route path="/all_clubs" element={<TrainerAllClubs />} />
                    <Route path="/all_clubs/all_club_details" element={<AllClubDetails />} />
                    <Route path="/all_clubs/all_club_details/list_sportsmen" element={<ListOfClubSportsmen />} />
                    <Route path="/all_clubs/all_club_details/list_sportsmen/sportsman_details" element={<AllClubsSportsmenDetails />} />

                    {/* my clubs */}
                    <Route path="/my_clubs" element={<TrainerMyClubs />} />
                    <Route path="/my_clubs/my_clubs_details/list_sportsmen" element={<ListOfMyClubSportsmen />} />
                    <Route path="/my_clubs/my_clubs_details/list_sportsmen/sportsman_details" element={<MyClubsSportsmenDetails />} />
                    <Route path="/my_clubs/my_clubs_details/list_sportsmen/sportsman_details/edit_details" element={<EditMyClubsSportsmenDetails />} />

                    {/* sportsmen */}
                    <Route path="/sportsmen" element={<ClubsSportsmen />} />
                    <Route path="/sportsmen/sportsman_details" element={<SportsmenDetails />} />

                    {/* statistics */}
                    <Route path="/statistics" element={<TrainerClubsStatistics />} />
                </Routes>
            </div>
        </div>
    );
};

export default TrainerClubs;
