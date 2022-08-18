import React, {useEffect} from 'react';
import s from "../users/registered/Registered.module.scss"
import ss from "./Documentation.module.scss"
import Input from "../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../components/pagination/Pagination";
import {download, search_icon} from "../../images";
import {useDispatch} from "react-redux";
import {getDocs} from "../../redux/slices/docSlice";
import {useSelector} from "react-redux/es/exports";


const DefaultDocumentation = () => {

    const dispatch = useDispatch()
    const docs = useSelector(state => state.docs.docs)

    const formatMap = {
        docx: "Word",
        xls: "Excel",
        pdf: "Pdf"
    }

    useEffect(() => {
        dispatch(getDocs())
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={ss.title} style={{ fontWeight: "500" }}>
                    <p style={{width: "30px"}}>№</p>
                    <p className={ss.flex10}>Название документа</p>
                    <p className={ss.flex_format}>Формат файла</p>
                </div>

                    {
                        docs.map((doc, index) => {
                            return <div style={{position: "relative"}} >
                                        <Link to={`/main/documentation/all_documentation/doc_details/${doc.id}`} >
                                                <div className={ss.title}>
                                                    <p style={{width: "30px"}}>{index+1}</p>
                                                    <p className={ss.flex10}>{doc.title}</p>
                                                    <div className={ss.flex_format}>
                                                        <p>{formatMap[doc.file.slice(doc.file.lastIndexOf('.') + 1)]}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        <a className={ss.download_icon} href={doc.file} download={doc.file.slice(doc.file.lastIndexOf('.') + 1)}><img src={download} alt=""/></a>
                                    </div>
                        })
                    }
                <Pagination/>
            </div>
        </div>
    );
};

export default DefaultDocumentation;
