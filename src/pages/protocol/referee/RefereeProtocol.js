import React from 'react';
import s from "../../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import ProtocolTab from "../ProtocolTab";
import NewProtocols from "./NewProtocols";
import NewProtocolDetails from "./NewProtocolDetails";
import RefereeTeam from "./RefereeTeam";
import RefereeTeamDetails from "./RefereeTeamDetails";

const SecretaryProtocol = () => {
    return (
        <div>
            <ProtocolTab />
            <div className={s.cont}>
                <Routes>
                    {/* new protocols */}
                    <Route path="/new_protocols" element={<NewProtocols />} />
                    <Route path="/new_protocols/details/:id" element={<NewProtocolDetails />} />

                    {/* Referee team */}
                    <Route path="/referee_team" element={<RefereeTeam />} />
                    <Route path="/referee_team/details/:id" element={<RefereeTeamDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default SecretaryProtocol;
