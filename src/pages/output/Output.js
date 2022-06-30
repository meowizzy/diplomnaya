import React from 'react';
import s from "../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import DefaultOutput from "./DefaultOutput";
import OutputTab from "./OutputTab";
import CreateOutput from "./CreateOutput";
import OutputDetails from "./OutputDetails";

const Output = () => {
    return (
        <div>
            <OutputTab/>
            <div className={s.cont}>
                <Routes>
                    <Route path="/all_output" element={<DefaultOutput />} />
                    <Route path="/all_output/details" element={<OutputDetails />} />
                    <Route path="/create" element={<CreateOutput />} />
                    {/*<Route path="/all_output/details" element={<DocumentationDetails />} />*/}
                    {/*<Route path="/all_output/doc_details/edit_details" element={<EditDocumentationDetails />} />*/}
                </Routes>
            </div>
        </div>
    );
};

export default Output;
