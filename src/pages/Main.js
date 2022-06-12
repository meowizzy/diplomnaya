import React from "react";
import { Route, Routes } from "react-router";
import { NavBar } from "../components/navbar/NavBar";
import { ChangeEvents } from "./events/changeEvents/ChangeEvents";
import { DefaultEvents } from "./events/defaultEvents/DefaultEvents";
import s from "./Main.module.scss"
import DefaultNews from "./news/defaultNews/DefaultNews";

export const Main = () => {
  return (
    <div className={s.container}>
      <div className={s.navbar}>
        <NavBar />
      </div>
      <div className={s.content}>
      <Routes>
          <Route path="/events" element={<ChangeEvents />} />
          <Route path="/news" element={<DefaultNews />} />
      </Routes>
      </div>
    </div>
  );
};
