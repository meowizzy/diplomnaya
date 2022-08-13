import React from 'react'
import { Route, Routes } from 'react-router'
import Auth from './Auth'
import FeedBack from './FeedBack'
import ForgotPassword from './ForgotPassword'
import NewPassword from './NewPassword'
// vbnm,

export const Routing = () => {
  return (
    <Routes>
        <Route path="/*" element={<Auth/>}/>
        <Route path="/NewPassword" element={<NewPassword/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/FeedBack" element={<FeedBack/>}/>
    </Routes>
  )
}
