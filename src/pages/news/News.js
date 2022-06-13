import React from 'react'
import { Route, Routes } from 'react-router'
import DefaultNews from "./defaultNews/DefaultNews";
import EditNews from "./editNews/EditNews";

export const News = () => {
    return (
        <Routes>
            <Route path="/*" element={<DefaultNews/>}/>
            <Route path="/edit_news" element={<EditNews/>}/>
        </Routes>
    )
}
