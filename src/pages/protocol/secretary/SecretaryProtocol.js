import React from 'react';
import s from "../../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import AllEvents from "./AllEvents";
import ProtocolTab from "../ProtocolTab";
import FormProtocol from "./FormProtocol.js";
import EventDetails from "./EventDetails";
import ProtocolDetails from "./ProtocolDetails";
import AllProtocols from "./AllProtocols";
import FormArena from "./FormArena";
import CreatedProtocol from "./CreatedProtocol";

const SecretaryProtocol = () => {
    return (
        <div>
            <ProtocolTab />
            <div className={s.cont}>
                <Routes>
                    <Route path="/all_events" element={<AllEvents />} />
                    <Route path="/all_events/event_details" element={<EventDetails />} />
                    <Route path="/all_events/event_details/form_protocol" element={<FormProtocol />} />
                    <Route path="/all_events/event_details/form_protocol/form_arena" element={<FormArena />} />
                    <Route path="/all_events/event_details/form_protocol/approve_formed_protocol" element={<CreatedProtocol />} />

                    {/* protocols */}
                    <Route path="/protocols" element={<AllProtocols />} />
                    <Route path="/protocols/details" element={<ProtocolDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default SecretaryProtocol;
