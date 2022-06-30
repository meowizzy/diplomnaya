import React from 'react';
import Input from "../../../../components/input/Input";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useNavigate} from "react-router";
import BackButton from "../../../../components/arrowButton/BackButton";
import inputStyles from "../../../../components/input/Input.module.scss";
import s from "../../../news/editNews/EditNews.module.scss";
import ss from "../../../news/createNews/CreateNews.module.scss";
import ownStyles from "../BasicClubs.module.scss"
import {camera_icon, plus} from "../../../../images";

const CreateSportsman = () => {

    const navigate = useNavigate()
    return (
        <div className={dfClubsStyles.form_cont}>
            <BackButton onClick={() => navigate("/main/clubs/sportsmen")}/>
            <p className="container_title">Создание спортсмена</p>
            <Input valueLabel="ФИО" width="600px" placeholder="Введите ФИО"/>
            <Input valueLabel="Дата рождения" width="600px" placeholder="Введите дату рождения"/>
            <Input valueLabel="Номер" width="600px" placeholder="+996"/>
            <Input valueLabel="Адрес" width="600px" placeholder="Введите адрес"/>
            <Input valueLabel="Средний балл ОФП" width="600px" placeholder="Введите средний балл"/>
            <label className={inputStyles.label}>Медицинская справка</label>
            <div style={{width: "100%", height: "200px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                <img className={ss.img_icon} src={camera_icon} alt="wrong"/>
                <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                <input style={{paddingLeft: 0}} id="image" className={s.img_input} type="file"/>
                <p className={ss.img_text}>Добавить фото</p>
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Спортивные разряды</p>
            <div className={ownStyles.inp_plus_cont}>
                <Input valueLabel="Спортивный разряд" width="600px" placeholder="Введите спортивный разряд"/>
                <img className={ownStyles.plus} src={plus} alt="wrong"/>
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Достижения</p>
            <div className={ownStyles.inp_plus_cont}>
                <Input valueLabel="Достижения" width="600px" placeholder="Введите спортивный достижения"/>
                <img className={ownStyles.plus} src={plus} alt="wrong"/>
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Физические показатели</p>
            <div className="flex">
                <Input valueLabel="Ловкость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" placeholder="0"/>
            </div>
            <div className="flex">
                <Input valueLabel="Растяжка" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" placeholder="0"/>
            </div>
            <div className="flex">
                <Input valueLabel="Сила" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" placeholder="0"/>
            </div>
            <div className="flex">
                <Input valueLabel="Скорость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" placeholder="0"/>
            </div>
            <div className="flex">
                <Input valueLabel="Выносливость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" placeholder="0"/>
            </div>
        </div>
    );
};

export default CreateSportsman;
