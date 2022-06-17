import React from "react";
import { Route, Routes } from "react-router";
import { NavBar } from "../components/navbar/NavBar";
import { ChangeEvents } from "./events/changeEvents/ChangeEvents";
import { DefaultEvents } from "./events/defaultEvents/DefaultEvents";
import s from "./Main.module.scss";
import { UsersRoute } from "./users/UsersRoute";
import {News} from "./news/News";

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
        </Routes>
      </div>
    </div>
  );
};
