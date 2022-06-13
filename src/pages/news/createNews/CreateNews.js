import React from 'react';
import Input from "../../../components/input/Input";
import s from "./CreateNews.module.scss"

const CreateNews = () => {
    return (
        <div className="container">
            <div>
                <h2 className="container_title">Создание новости</h2>
                <div>
                    <label className={s.img_input_label} htmlFor="image"></label>
                    <input className={s.image_input} type="file"/>
                </div>
                <Input type="text" placeholder="Добавить заголовок"/>
                <Input type="text" placeholder="Дата публикации"/>
                <Input type="text" placeholder="Добавить описание"/>
                <Input type="text" placeholder="Добавить текст"/>
            </div>
        </div>
    );
};

export default CreateNews;
