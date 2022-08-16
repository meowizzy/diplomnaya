import React, {useEffect} from 'react';
import Input from "../../../../components/input/Input";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useNavigate, useParams} from "react-router";
import BackButton from "../../../../components/arrowButton/BackButton";
import inputStyles from "../../../../components/input/Input.module.scss";
import s from "../../../news/editNews/EditNews.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getSportsman} from "../../../../redux/slices/sportsmenSlice";
import ss from "../../../news/createNews/CreateNews.module.scss";

const AllClubsSportsmenDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const sportsman = useSelector(state => state.sportsmen.sportsman)

    useEffect(() => {
        dispatch(getSportsman(id))
    }, []);


    return (
        <div className={dfClubsStyles.form_cont}>
            <BackButton to={`/main/clubs/all_clubs/all_club_details/list_sportsmen/2`}/>
            <p className="container_title">Информация о спортсмене</p>
            <Input valueLabel="ФИО" width="600px" value={`${sportsman.name} ${sportsman.surname}`}/>
            <Input valueLabel="Дата рождения" width="600px" value={sportsman.birthday}/>
            <Input valueLabel="Номер" width="600px" value={sportsman.phone_number}/>
            <Input valueLabel="Адрес" width="600px" value={sportsman.address}/>
            <Input valueLabel="Средний балл ОФП" width="600px" value={sportsman.average_of_PHI?.split('.')[0]}/>
            <label className={inputStyles.label}>Изображение</label>
            <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                <img className={ss.img_icon_picture} src={sportsman.medical_certificate} alt="/"/>
                <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                <input id="image" className={s.img_input} type="file"/>
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Спортивные разряды</p>
            <Input valueLabel="Спортивный разряд" width="600px" value={sportsman.sport_category}/>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Достижения</p>
            <Input valueLabel="Достижения" width="600px" value={sportsman.achievements}/>
            {/*<Input valueLabel="Достижения" width="600px" value="Чемпионат и первенство Ошской области по ушу"/>*/}
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Физические показатели</p>
            <div className="flex">
                <Input valueLabel="Ловкость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value={sportsman.physical_indicators?.agility?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Растяжка" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value={sportsman.physical_indicators?.stretch?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Сила" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value={sportsman.physical_indicators?.strength?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Скорость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value={sportsman.physical_indicators?.speed?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Выносливость" width="285px" value="Упражнения"/>
                <Input valueLabel="Баллы" width="285px" value={sportsman.physical_indicators?.stamina?.split('.')[0]}/>
            </div>
        </div>
    );
};

export default AllClubsSportsmenDetails;
