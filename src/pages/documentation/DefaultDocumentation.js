import React from 'react';
import s from "../users/registered/Registered.module.scss"
import ss from "./Documentation.module.scss"
import Input from "../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../components/pagination/Pagination";
import {download, search_icon} from "../../images";


const DefaultDocumentation = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={ss.title} style={{ fontWeight: "500" }}>
                    <p style={{width: "11px"}}>№</p>
                    <p className={ss.flex10}>Название документа</p>
                    <p className={ss.flex_format}>Формат файла</p>
                </div>
                <Link to="/main/documentation/all_documentation/doc_details">
                    <div className={ss.title}>
                        <p style={{width: "11px"}}>1</p>
                        <p className={ss.flex10}>Единые всекыргызские правила соревнований по ушу    2022 года</p>
                        <div className={ss.flex_format}>
                            <p>Word</p>
                            <img src={download} alt=""/>
                        </div>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default DefaultDocumentation;
