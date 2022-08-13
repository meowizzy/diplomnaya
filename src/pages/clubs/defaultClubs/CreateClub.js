import React from 'react';
import Input from "../../../components/input/Input";
import s from "./DefaultClubs.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import {useNavigate} from "react-router";
import Button from "../../../components/button/Button";
import SuccessModal from "../../../components/modals/SuccessModal";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {createClub} from "../../../redux/slices/clubSlice";

const CreateClub = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const dispatch = useDispatch();
    const navigate= useNavigate();

    const formik = useFormik(({
        initialValues: {
            address: "",
            name: "",
            min_age: "",
            max_age: ""
        },
        onSubmit: (postData) => {
            console.log(postData);
            const par = {data:postData, navigate, handleOpenSuccessModal}
            dispatch(createClub(par))
        }
    }))

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={s.form_cont}>
                <BackButton to="/main/clubs/all_clubs" />
                <p className="container_title">Создать клуб</p>
                <Input name="name" onChange={formik.handleChange} valueLabel="Клуб" width="100%" placeholder="Название клуба"/>
                <Input name="address" onChange={formik.handleChange} valueLabel="Адрес" width="100%" placeholder="Адрес клуба"/>
                <div className="flex">
                    <Input name="min_age" onChange={formik.handleChange} valueLabel="Возраст спортсменов" width="285px" placeholder="C"/>
                    <div className={s.inp_plus_cont}>
                        <Input name="max_age" onChange={formik.handleChange} width="285px" placeholder="По"/>
                    </div>
                </div>
                <Button type="submit" onClick={handleOpenSuccessModal} width="100%" text="СОЗДАТЬ"/>
            </form>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали клуб!"/>}
        </>

    );
};

export default CreateClub;
