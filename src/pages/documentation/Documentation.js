import React from 'react';
import s from "../users/registered/Registered.module.scss"
import {Route, Routes} from "react-router";
import DocumentationTab from "./DocumentationTab";
import DefaultDocumentation from "./DefaultDocumentation";
import DocumentationDetails from "./DocumentationDetails";
import CreateDocumentation from "./CreateDocumentation";
import EditDocumentationDetails from "./EditDocumentationDetails";

const Documentation = () => {
    return (
        <div>
            <DocumentationTab/>
            <div className={s.cont}>
                <Routes>
                    <Route path="/all_documentation" element={<DefaultDocumentation />} />
                    <Route path="/all_documentation/create_doc" element={<CreateDocumentation />} />
                    <Route path="/all_documentation/doc_details/:id" element={<DocumentationDetails />} />
                    <Route path="/all_documentation/doc_details/edit_details/:id" element={<EditDocumentationDetails />} />
                </Routes>
            </div>
        </div>
    );
};

export default Documentation;
