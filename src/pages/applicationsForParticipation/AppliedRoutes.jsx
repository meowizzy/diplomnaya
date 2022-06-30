import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
import { linkActiveClassName } from "../../utils/ActiveLink";
import s from "./Applied.module.scss"
import { DetailedInfoForNewApplied } from "./pageForSecretary/DetailedInfoForNewApplied";
import { NewApplied } from "./pageForSecretary/NewApplied";

export const AppliedRoutes = () => {
  const location = useLocation()
  return (
    <>
      <div className={s.link_cont}>
        <div>
          <NavLink
            to="/main/applied/newApplied"
            className={linkActiveClassName(location,"newApplied", 3, "link", "active_link")}
          >
            Новые заявки
          </NavLink>
          <NavLink
            to="/main/applied/historyOfApplied"
            className={linkActiveClassName(location,"historyOfApplied", 3, "link", "active_link")}
          >
            История заявок
          </NavLink>
          <NavLink
            to="/main/applied/applicatonTemplate"
            className={linkActiveClassName(location,"applicatonTemplate", 3, "link", "active_link")}
          >
            Шаблон заявки
          </NavLink>
        </div>
        <Link to="/main/applied/createUser">
          <Button margin="0 0" text="ОТПРАВИТЬ ШАБЛОН" />
        </Link>
      </div>
      <>
        <Routes>
          <Route path="/newApplied" element={<NewApplied />} />
          <Route path="/newApplied/detailedInformation" element={<DetailedInfoForNewApplied />} />
        </Routes>
      </>
    </>
  );
};
