import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Button from "../../components/button/Button";
import { linkActiveClassName } from "../../utils/ActiveLink";
import { HistoryOfApplied } from "./pageForSecretary/historyOfApplied/HistoryOfApplied";
import { DetailedInfoForNewApplied } from "./pageForSecretary/newApplied/DetailedInfoForNewApplied";
import { NewApplied } from "./pageForSecretary/newApplied/NewApplied";
import s from "./Applied.module.scss"
import { DetailedInfoForHistoryOfApplied } from "./pageForSecretary/historyOfApplied/DetailedInfoForHistoryOfApplied";
import { AppliedTemplate } from "./pageForSecretary/appliedTemplate/AppliedTemplate";
import { SendTemplate } from "./pageForSecretary/sendTemplate/SendTemplate";


export const AppliedRoutes = () => {
  const location = useLocation()
  const temp = location.pathname.split("/")[3]
  return (
    <>
      <div className={s.link_cont}>
        <div className={s.navlink_cont}>
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
            to="/main/applied/appliedTemplate"
            className={linkActiveClassName(location,"appliedTemplate", 3, "link", "active_link")}
          >
            Шаблон заявки
          </NavLink>
        </div>
        {temp === "appliedTemplate"? 
        <Link to="/main/applied/createUser">
          <Button margin="0 0" text="ИЗМЕНИТЬ ШАБЛОН" />
        </Link>: 
        <Link to="/main/applied/sendTemplate">
          <Button margin="0 0" text="ОТПРАВИТЬ ШАБЛОН" />
        </Link>
        }
      </div>
      <>
        <Routes>
          <Route path="/newApplied" element={<NewApplied />} />
          <Route path="/newApplied/detailedInformation" element={<DetailedInfoForNewApplied />} />
          <Route path="/historyOfApplied" element={<HistoryOfApplied />} />
          <Route path="/historyOfApplied/detailedInformation" element={<DetailedInfoForHistoryOfApplied />} />
          <Route path="/appliedTemplate" element={<AppliedTemplate />} />
          <Route path="/sendTemplate" element={<SendTemplate />} />
        </Routes>
      </>
    </>
  );
};
