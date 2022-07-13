import React from 'react';
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss";
import BackButton from "../../../../components/arrowButton/BackButton";
import Input from "../../../../components/input/Input";

const ClubsTrainersDetails = () => {
    return (
        <div className={dfClubsStyles.form_cont}>
            <BackButton to="/main/clubs/trainers" />
            <p className="container_title">Информация о тренере</p>
            <Input valueLabel="ФИО" width="600px" value="Леонид Илич Брежнев "/>
            <Input valueLabel="Номер" width="600px" value="+996 000 123 456"/>
            <Input valueLabel="Почта" width="600px" value="leonid_ilic_brezhnev@gmail.com"/>
            <Input valueLabel="Город / страна" width="600px" value="Бишкек, Кыргызстан"/>
            <p className="basic_text" style={{margin: "70px auto 30px"}}>Клубы</p>
            <Input valueLabel="Клуб" width="600px" value="Золотой дракон"/>
            <Input valueLabel="Клуб" width="600px" value="Панда"/>
            <Input valueLabel="Клуб" width="600px" value="Богомол"/>
        </div>
    );
};

export default ClubsTrainersDetails;
