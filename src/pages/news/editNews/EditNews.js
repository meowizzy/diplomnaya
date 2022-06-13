import React from 'react';
import Input from "../../../components/input/Input";
import s from "./EditNews.module.scss"
import Button from "../../../components/button/Button";
import ArrowButton from "../../../components/arrowButton/ArrowButton";
import inputStyles from "../../../components/input/Input.module.scss";
import classNames from "classnames";
import {useFormik} from "formik";
import {useNavigate} from "react-router";

const EditNews = () => {
    // const classname = classNames()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: "data",
        onSubmit: data => {
            console.log("data: ",data)
        }
    })
    return (
        <div>

            <div className="container container_data_flexed">
                <div onClick={ () => navigate("/main/news")} className={s.prev_button}>
                    <ArrowButton rotate="rotate(180deg)" />
                </div>

                <form onSubmit={formik.handleSubmit} style={{width: 600}}>
                    <h2 className="container_title">Новости</h2>
                    <label className={inputStyles.label}>Изображение</label>
                    <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                        <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                        <input id="image" className={s.img_input} type="file"/>
                    </div>
                    <Input onChange={formik.handleChange} value={formik.values} type="text" width="100%" valueLabel="Заголовок"/>
                    <Input onChange={formik.handleChange} value={formik.values} type="text" width="100%" valueLabel="Дата"/>
                    <Input onChange={formik.handleChange} value={formik.values} type="text" width="100%" valuevalueLabel="Текст"/>
                    <Input onChange={formik.handleChange} value={formik.values}  type="text" width="100%" valueLabel="Дополнительно"/>
                    <Button  type="submit" width="100%" margin="70px 0px 0px" text="СОХРАНИТЬ"/>
                </form>

            </div>
        </div>
    );
};

export default EditNews;
