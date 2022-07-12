import React from 'react';
import AdminClubs from "./AdminClubs";
import TrainerClubs from "./TrainerClubs";

const Clubs = () => {
    const role = localStorage.getItem('role');
    return (
        <>
            { role === "admin" && <AdminClubs /> }
            { role === "trainer" && <TrainerClubs /> }
        </>
    );
};

export default Clubs;
