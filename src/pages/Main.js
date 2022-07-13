import React from "react";
import { Route, Routes } from "react-router";
import { NavBar } from "../components/navbar/NavBar";
import { ChangeEvents } from "./events/changeEvents/ChangeEvents";
import s from "./Main.module.scss";
import { UsersRoute } from "./users/UsersRoute";
import {News} from "./news/News";
import Clubs from "./clubs/Clubs";
import { Profile } from "./profile/Profile";
import Documentation from "./documentation/Documentation";
import Output from "./output/Output";
import {AppliedRoutes} from "./applicationsForParticipation/pageForSecretary/AppliedRoutes";
import { Application } from "./applicationsForParticipation/pageForTrainer/Application";
import { DefaultEvents } from "./events/defaultEvents/DefaultEvents";

export const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.navbar}>
        <NavBar />
      </div>
      <div className={s.content}>
        <Routes>
            <Route path="/users/*" element={<UsersRoute />} />
            <Route path="/events/*" element={<ChangeEvents />} />
            <Route path="/defaultEvents/*" element={<DefaultEvents />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/clubs/*" element={<Clubs />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/documentation/*" element={<Documentation />} />
            <Route path="/applied/*" element={<AppliedRoutes />} />
            <Route path="/application/*" element={<Application />} />
            <Route path="/output/*" element={<Output />} />
        </Routes>
      </div>
    </div>
  );
};
