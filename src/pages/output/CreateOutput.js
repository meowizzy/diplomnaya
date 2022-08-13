import React from 'react';
import BackButton from "../../components/arrowButton/BackButton";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import {useNavigate} from "react-router";
import ownStyles from "./Output.module.scss"
import {plus} from "../../images";

const CreateOutput = () => {

    return (
        <>
            <div className={ownStyles.form_container}>
                <BackButton to="/main/output/all_output" />
                <p style={{marginBottom: 50}} className="container_title">Создать документ с итогами соревнований</p>
                <Input valueLabel="Соревнование" width="600px" placeholder="Введите название"/>
                <Input valueLabel="Подгруппа" width="600px" placeholder="Введите подгруппу"/>

                <div className={ownStyles.input_cont} style={{ fontWeight: "500", marginTop: 10 }}>
                    {/*<p className={ownStyles.input1}>№</p>*/}
                    {/*<p className={ownStyles.input2}>Спортсмен</p>*/}
                    {/*<p className={ownStyles.input}>Судья 1</p>*/}
                    {/*<p className={ownStyles.input}>Судья 2</p>*/}
                    {/*<p className={ownStyles.input}>Судья 3</p>*/}
                    {/*<p className={ownStyles.input}>Средний балл</p>*/}
                    {/*<p className={ownStyles.input}>Процент призовых мест</p>*/}
                    {/*<p className={ownStyles.input}>Призовое место</p>*/}

                    <input disabled className={ownStyles.title1} value="№"/>
                    <input disabled className={ownStyles.title2} value="Спортсмен"/>
                    <input disabled className={ownStyles.title} value="Судья 1"/>
                    <input disabled className={ownStyles.title} value="Судья 2" />
                    <input disabled className={ownStyles.title} value="Судья 3" />
                    <input disabled className={ownStyles.title} value="Средний балл" />
                    <input disabled className={ownStyles.title} value="Призовое место" />

                </div>
                <div className={ownStyles.input_cont}>
                    <input disabled className={ownStyles.input1} type="text" placeholder="1"/>
                    <input className={ownStyles.input2} style={{width: 300}} type="text" placeholder="ФИО спрортсмена"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input style={{borderRight: "none"}} className={ownStyles.input} type="text" placeholder="0"/>
                </div>
                <div className={ownStyles.input_cont}>
                    <input disabled className={ownStyles.input1} type="text" placeholder="2"/>
                    <input className={ownStyles.input2} style={{width: 300}} type="text" placeholder="ФИО спрортсмена"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input style={{borderRight: "none"}} className={ownStyles.input} type="text" placeholder="0"/>
                </div>
                <div className={ownStyles.input_cont}>
                    <input disabled className={ownStyles.input1} type="text" placeholder="3"/>
                    <input className={ownStyles.input2} style={{width: 300}} type="text" placeholder="ФИО спрортсмена"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <input className={ownStyles.input} type="text" placeholder="0"/>
                    <div className={ownStyles.last_input} style={{borderRight: "none"}}>
                        <input className={ownStyles.in_input} type="text" placeholder="0"/>
                        <img className={ownStyles.in_plus} src={plus} alt="wrong"/>
                    </div>
                </div>
                <Button margin="108px auto 50px" disabled width="600px" classname="button" text="СОЗДАТЬ"/>
            </div>
        </>
    );
};

export default CreateOutput;
