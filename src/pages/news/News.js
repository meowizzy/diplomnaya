import React from 'react'
import { Route, Routes } from 'react-router'
import DefaultNews from "./defaultNews/DefaultNews";
import EditNews from "./editNews/EditNews";
import CreateNews from "./createNews/CreateNews";

export const News = () => {
    return (
        <Routes>
            <Route path="/all_news" element={<DefaultNews/>}/>
            <Route path="/2022_news" element={<DefaultNews/>}/>
            <Route path="/2021_news" element={<DefaultNews/>}/>
            <Route path="/all_news/edit_new/:id" element={<EditNews/>}/>
            <Route path="/create_news" element={<CreateNews/>}/>
        </Routes>
    )
}
