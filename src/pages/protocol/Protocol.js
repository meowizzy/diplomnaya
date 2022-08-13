import React from 'react';
import AdminProtocols from "./admin/AdminProtocols";
import SecretaryProtocol from "./secretary/SecretaryProtocol";
import RefereeProtocol from "./referee/RefereeProtocol";
import {getCookie} from "../../utils/cookieFunction/cookieFunction";

const Protocol = () => {
    const role = JSON.parse(getCookie("user_info"))
    return (
        <>
            {role["user role"] === 'ADMIN' && <AdminProtocols/>}
            {(role["user role"] === 'TRAINER' && role.assistant === "False" && role.judge === 'False') && <AdminProtocols/>}
            {role.assistant === 'True' && <SecretaryProtocol />}
            {role.judge === 'True' && <RefereeProtocol />}
        </>
    );
};

export default Protocol;
