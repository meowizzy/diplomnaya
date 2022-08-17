import React, {useEffect} from 'react';
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss";
import BackButton from "../../../../components/arrowButton/BackButton";
import Input from "../../../../components/input/Input";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getTrainerUser} from "../../../../redux/slices/userSlice";

const ClubsTrainersDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const trainers = useSelector(state => state.user.userTrainer)
    const trainer = trainers.find(trainer => trainer.id == id)
    console.log(trainer)

    useEffect(() => {
        dispatch(getTrainerUser())
    }, []);


    return (
        <div className={dfClubsStyles.form_cont}>
            <BackButton to="/main/clubs/trainers" />
            <p className="container_title">Информация о тренере</p>
                <Input valueLabel="ФИО" width="600px" value={`${trainer.name} ${trainer.surname}`}/>
                <Input valueLabel="Номер" width="600px" value={trainer.number}/>
                <Input valueLabel="Почта" width="600px" value={trainer.email}/>
                <Input valueLabel="Город / страна" width="600px" value={trainer.address}/>
                <p className="basic_text" style={{margin: "70px auto 30px"}}>Клубы</p>
                <Input valueLabel="Клуб" width="600px" value="Золотой дракон"/>
                <Input valueLabel="Клуб" width="600px" value="Панда"/>
                <Input valueLabel="Клуб" width="600px" value="Богомол"/>
        </div>
    );
};

export default ClubsTrainersDetails;
