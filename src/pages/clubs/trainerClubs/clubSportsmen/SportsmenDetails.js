import React from 'react';
import Input from "../../../../components/input/Input";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useNavigate} from "react-router";
import BackButton from "../../../../components/arrowButton/BackButton";
import inputStyles from "../../../../components/input/Input.module.scss";
import s from "../../../news/editNews/EditNews.module.scss";

const SportsmenDetails = () => {

    const navigate = useNavigate()
    return (
        <div className={dfClubsStyles.form_cont}>
            <BackButton onClick={() => navigate("/main/clubs/sportsmen")}/>
            <p className="container_title">Информация о спортсмене</p>
            <Input valueLabel="ФИО" width="600px" value="Стёпка Киборг Убийца "/>
            <Input valueLabel="Дата рождения" width="600px" value="20.02.2002 г."/>
            <Input valueLabel="Номер" width="600px" value="+996 000 123 456"/>
            <Input valueLabel="Адрес" width="600px" value="Солнечная система, млечный путь, планета Земля"/>
            <Input valueLabel="Средний балл ОФП" width="600px" value="4,5"/>
            <label className={inputStyles.label}>Изображение</label>
            <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                <input id="image" className={s.img_input} type="file"/>
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Спортивные разряды</p>
            <Input valueLabel="Спортивный разряд" width="600px" value="Мастер спорта - с 15 лет"/>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Достижения</p>
            <Input valueLabel="Достижения" width="600px" value="Чемпион Кыргыстана по спортивному ушу"/>
            <Input valueLabel="Достижения" width="600px" value="Чемпионат и первенство Ошской области по ушу"/>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Физические показатели</p>
            <div className="flex">
                <Input valueLabel="Ловкость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value="10"/>
            </div>
            <div className="flex">
                <Input valueLabel="Растяжка" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value="10"/>
            </div>
            <div className="flex">
                <Input valueLabel="Сила" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value="10"/>
            </div>
            <div className="flex">
                <Input valueLabel="Скорость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value="10"/>
            </div>
            <div className="flex">
                <Input valueLabel="Выносливость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value="10"/>
            </div>
        </div>
    );
};

export default SportsmenDetails;
