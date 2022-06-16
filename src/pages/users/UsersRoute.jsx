import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { Registered } from "./registered/Registered";
import s from "./registered/Registered.module.scss";
import ss from "../events/changeEvents/ChangeEvents.module.scss";
import { NavLink, Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { UserInfo } from "./registered/UserInfo";
import { CreateUser } from "./createUser/CreateUser";
import { RequestToRegistr } from "./requestToRegistr/RequestToRegistr";
import { RequestUserInfo } from "./requestToRegistr/RequestUserInfo";
import { RecoveryRequest } from "./recoveryRequest/RecoveryRequest";
import { RecoveryInfo } from "./recoveryRequest/RecoveryInfo";

export const UsersRoute = () => {

  const location = useLocation();
  const linkActiveClassName = (navLink) => {
    const currentParentPath = location.pathname.split("/")[3];
    const isParentLinkActive = currentParentPath === navLink;
  
    if (isParentLinkActive) return "active_link";
    return "link";
  };
  
  return (
    <>
      <div className={s.link_cont}>
        <NavLink
          to="/main/users/registered"
          className={linkActiveClassName("registered")}
        >
          Зарегистрированные
        </NavLink>
        <NavLink
          to="/main/users/requestToRegistr"
          className={linkActiveClassName("requestToRegistr")}
        >
          Запросы на регистрацию
        </NavLink>
        <NavLink
          to="/main/users/recoveryRequest"
          className={linkActiveClassName("recoveryRequest")}
        >
          Запросы на восстановление
        </NavLink>
        <Link to="/main/users/createUser">
          <Button margin="0 0" text="СОЗДАТЬ" />
        </Link>
      </div>
      <div className={s.cont}>
        <Routes>
          <Route path="/registered" element={<Registered />} />
          <Route path="/requestToRegistr" element={<RequestToRegistr />} />
          <Route path="/recoveryRequest" element={< RecoveryRequest/>} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/registered/userInfo" element={<UserInfo />} />
          <Route path="/requestToRegistr/requestUserInfo" element={<RequestUserInfo />} />
          <Route path="/recoveryRequest/recoveryInfo" element={<RecoveryInfo />} />
        </Routes>
      </div>
    </>
  );
};
