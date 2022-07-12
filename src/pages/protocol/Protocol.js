import React from 'react';
import AdminProtocols from "./admin/AdminProtocols";
import SecretaryProtocol from "./secretary/SecretaryProtocol";
import RefereeProtocol from "./referee/RefereeProtocol";

const Protocol = () => {
    const role = localStorage.getItem('role');
    return (
        <>
            {(role === 'admin' || role === 'trainer') && <AdminProtocols/>}
            {role === 'secretary' && <SecretaryProtocol />}
            {role === 'referee' && <RefereeProtocol />}
        </>
    );
};

export default Protocol;
