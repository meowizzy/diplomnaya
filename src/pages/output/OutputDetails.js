import React, {useState} from 'react';
import BackButton from "../../components/arrowButton/BackButton";
import Button from "../../components/button/Button";
import {useNavigate} from "react-router";
import ownStyles from "./Output.module.scss"
import {minus, plus} from "../../images";
import OptionButton from "../../components/optionButton/OptionButton";
import Options from "../../components/options/Options";
import DeleteModal from "../../components/modals/DeleteModal";
import SuccessModal from "../../components/modals/SuccessModal";

const OutputDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const [editButton, setEditButton] = useState(false);

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    return (
        <>
            <div className={ownStyles.form_container}>
                {
                   editButton ? <BackButton onClick={() => setEditButton(false)}/> : <BackButton to="/main/output/all_output" />
                }
                {!editButton && (<OptionButton onClick={handleOpenOption} top="30px" right="30px"/>)}
                {openOption && <Options closeOption={handleOpenOption} setEditButton={setEditButton} handleOpenDeleteModal={handleOpenDeleteModal}/>}
                <p style={{marginBottom: 50}} className="container_title">Чемпионат Кыргызстана по ушу</p>
                <p style={{marginBottom: 30}} className="sub_title">Мальчики 10-12 лет цюань шу 37 ф</p>
                <div className={ownStyles.input_cont} style={{ fontWeight: "500", marginTop: 10 }}>
                    <input disabled className={ownStyles.title1} value="№"/>
                    <input disabled className={ownStyles.title2} value="Спортсмен"/>
                    <input disabled className={ownStyles.title} value="Судья 1"/>
                    <input disabled className={ownStyles.title} value="Судья 2" />
                    <input disabled className={ownStyles.title} value="Судья 3" />
                    <input disabled className={ownStyles.title} value="Средний балл" />
                    <input disabled className={ownStyles.title} value="Призовое место" />
                </div>
                <div className={ownStyles.input_cont}>
                    <input className={ownStyles.input1} type="text" value="1" />
                    <input className={ownStyles.input2} style={{width: 300}} type="text" value="Стёпка Киборг Убийца"/>
                    <input className={ownStyles.input} type="text" value="4" />
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4.2"/>
                    {editButton ? <div className={ownStyles.last_input} style={{borderRight: "none"}}>
                        <input className={ownStyles.in_input} type="text" value="||"/>
                        <img className={ownStyles.in_plus} src={minus} alt="wrong"/>
                    </div> : <input className={ownStyles.last_input} type="text" value="||"/>}
                </div>
                <div className={ownStyles.input_cont}>
                    <input className={ownStyles.input1} type="text" value="2" />
                    <input className={ownStyles.input2} style={{width: 300}} type="text" value="Стёпка Киборг Убийца" />
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4.2"/>
                    {editButton ? <div className={ownStyles.last_input} style={{borderRight: "none"}}>
                        <input className={ownStyles.in_input} type="text" value="||"/>
                        <img className={ownStyles.in_plus} src={minus} alt="wrong"/>
                    </div> : <input className={ownStyles.last_input} type="text" value="||"/>}
                </div>
                <div className={ownStyles.input_cont}>
                    <input className={ownStyles.input1} type="text" value="3" />
                    <input className={ownStyles.input2} style={{width: 300}} type="text" value="Стёпка Киборг Убийца" />
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4"/>
                    <input className={ownStyles.input} type="text" value="4.2"/>
                    {editButton ? <div className={ownStyles.last_input} style={{borderRight: "none"}}>
                        <input className={ownStyles.in_input} type="text" value="||"/>
                        <img className={ownStyles.in_plus} src={plus} alt="wrong"/>
                    </div> : <input className={ownStyles.last_input} type="text" value="||"/>}
                </div>
                {editButton ? <Button onClick={handleOpenSuccessModal} margin="108px auto 50px" width="600px" classname="button" text="СОХРАНИТЬ"/> : <Button margin="108px auto 50px" width="600px" classname="button" text="ПЕЧАТЬ"/>}
            </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данные об итогах соревнования!"/>}
            { openDeleteModal && <DeleteModal text="Вы уверены, что хотите удалить данный документ?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>
    );
};

export default OutputDetails;
