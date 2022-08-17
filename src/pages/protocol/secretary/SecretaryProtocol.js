import React from 'react';
import s from "../../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import AllEvents from "./AllEvents";
import ProtocolTab from "../ProtocolTab";
import FormProtocol from "./FormProtocol.js";
import ProtocolDetails from "./ProtocolDetails";
import AllProtocols from "./AllProtocols";
import CreatedProtocol from "./CreatedProtocol";

const SecretaryProtocol = () => {
    return (
        <div>
            <ProtocolTab />
            <div className={s.cont}>
                <Routes>
                    <Route path="/all_events" element={<AllEvents />} />
                    <Route path="/all_events/form_protocol/:id" element={<FormProtocol />} />
                    <Route path="/all_events/approve_formed_protocol/:id" element={<CreatedProtocol />} />

                    {/* protocols */}
                    <Route path="/protocols" element={<AllProtocols />} />
                    <Route path="/protocols/details" element={<ProtocolDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default SecretaryProtocol;
