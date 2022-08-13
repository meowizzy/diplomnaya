import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import s from "./Applied.module.scss"
import Button from "../../../components/button/Button";
import { NewApplied } from "./newApplied/NewApplied";
import { DetailedInfoForNewApplied } from "./newApplied/DetailedInfoForNewApplied";
import { HistoryOfApplied } from "./historyOfApplied/HistoryOfApplied";
import { DetailedInfoForHistoryOfApplied } from "./historyOfApplied/DetailedInfoForHistoryOfApplied";
import { SendTemplate } from "./sendTemplate/SendTemplate";
import { linkActiveClassName } from "../../../utils/ActiveLink";
import { AppliedTemplate } from "./appliedTemplate/AppliedTemplate";


export const AppliedRoutes = () => {
  const location = useLocation()
  const temp = location.pathname.split("/")[3]

  const [changeTemplate, setChangeTemplate] = useState(false)
  const clickState=()=>{
    setChangeTemplate(!changeTemplate)
  }
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
          <Button margin="0 0" text="ИЗМЕНИТЬ ШАБЛОН" onClick={clickState}/>
       : 
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
          <Route path="/appliedTemplate" element={<AppliedTemplate changeTemplate={changeTemplate}/>} />
          <Route path="/sendTemplate" element={<SendTemplate />} />
        </Routes>
      </>
    </>
  );
};
