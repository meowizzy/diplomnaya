import React, {useEffect} from 'react';
import Input from "../../../components/input/Input";
import s from "./DefaultClubs.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import {useNavigate, useParams} from "react-router";
import Button from "../../../components/button/Button";
import SuccessModal from "../../../components/modals/SuccessModal";
import {useDispatch, useSelector} from "react-redux";
import {editClub, getClub} from "../../../redux/slices/clubSlice";
import {useFormik} from "formik";

const EditClub = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getClub(id))
    }, []);

    const club = useSelector(state => state.clubs.club)
    console.log("ffgd: ", club)

    const formik = useFormik({
        initialValues: {
            address: club.address,
            name: club.name,
            min_age: club.min_age,
            max_age: club.max_age
        },
        enableReinitialize: true,
        onSubmit: (data) => {
            console.log(data);
            const par = {data:data, id:id, navigate, handleOpenSuccessModal}
            dispatch(editClub(par))
        }
    })


    return (
        <>
            <form onSubmit={formik.handleSubmit} className={s.form_cont}>
                <BackButton to={`/main/clubs/clubDetails/${club.id}`}/>
                <p className="container_title">Информация о клубе</p>
                <Input name="name" onChange={formik.handleChange} valueLabel="Клуб" width="100%" value={formik.values.name}/>
                <Input name="address" onChange={formik.handleChange} valueLabel="Адрес" width="100%" value={formik.values.address}/>
                {/*<Input onChange={formik.handleChange} valueLabel="Тренер" width="100%" value="Тренер"/>*/}
                {/*<Input onChange={formik.handleChange} valueLabel="Кол-во спортсменов" width="100%" value={formik.values.sum_of_people}/>*/}
                <div className="flex">
                    <Input name="min_age" onChange={formik.handleChange} valueLabel="Возраст спортсменов" width="285px" value={formik.values.min_age}/>
                    <div className={s.inp_plus_cont}>
                        <Input name="max_age" onChange={formik.handleChange} width="285px" value={formik.values.max_age}/>
                    </div>
                </div>
                <Button type="submit" onClick={handleOpenSuccessModal} width="100%" text="СОХРАНИТЬ"/>
            </form>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данные о клубе!"/>}
        </>

    );
};

export default EditClub;
