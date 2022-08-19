import React from 'react';
import s from "../../users/registered/Registered.module.scss";
import {Route, Routes} from "react-router";
import AllProtocols from "./AllProtocols";
import ProtocolTab from "../ProtocolTab";
import ProtocolDetails from "./ProtocolDetails";

const AdminProtocols = () => {
    return (
            <div>
                <ProtocolTab/>
                <div className={s.cont}>
                    <Routes>
                        <Route path="/all_protocols" element={<AllProtocols />} />
                        <Route path="/all_protocols/protocolDetails/:id" element={<ProtocolDetails />} />
                    </Routes>
                </div>
            </div>
    );
};

export default AdminProtocols;
