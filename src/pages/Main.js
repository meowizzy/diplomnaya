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

export const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.navbar}>
        <NavBar />
      </div>
      <div className={s.content}>
        <Routes>
            <Route path="/users/*" element={<UsersRoute />} />
            <Route path="/events" element={<ChangeEvents />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/clubs/*" element={<Clubs />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/documentation/*" element={<Documentation />} />
        </Routes>
      </div>
    </div>
  );
};
