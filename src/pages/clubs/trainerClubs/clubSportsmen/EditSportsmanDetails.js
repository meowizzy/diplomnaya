import React, {useEffect, useState} from 'react';
import Input from "../../../../components/input/Input";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useNavigate, useParams} from "react-router";
import BackButton from "../../../../components/arrowButton/BackButton";
import inputStyles from "../../../../components/input/Input.module.scss";
import s from "../../../news/editNews/EditNews.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {createSportsman, deleteSportsman, editSportsman, getSportsman} from "../../../../redux/slices/sportsmenSlice";
import ss from "../../../news/createNews/CreateNews.module.scss";
import OptionButton from "../../../../components/optionButton/OptionButton";
import Options from "../../../../components/options/Options";
import DeleteModal from "../../../../components/modals/DeleteModal";
import Button from "../../../../components/button/Button";
import SuccessModal from "../../../../components/modals/SuccessModal";
import {useFormik} from "formik";
import {requests} from "../../../../redux/api";
import {editNews} from "../../../../redux/slices/newsSlice";
import {getClubs} from "../../../../redux/slices/clubSlice";
import {camera_icon} from "../../../../images";

const EditSportsmanDetails = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const {id} = useParams();
    const dispatch = useDispatch();
    const sportsman = useSelector(state => state.sportsmen.sportsman)
    const clubs = useSelector(state => state.clubs.clubs)

    useEffect(() => {
        dispatch(getSportsman(id))
        dispatch(getClubs())
    }, []);

    const formik = useFormik({
        initialValues: {sportsman : sportsman, physical_indicator : sportsman.physical_indicator},
        enableReinitialize: true,
        onSubmit: data => {
            console.log("data: ",data)
            const par = {id: data.sportsman.physical_indicators.id, data: data.sportsman.physical_indicators, handleOpenSuccessModal, handleCloseSuccessModal}
            requests.editPhysicalIndicatorApi(par).then(res => {
                console.log("indd: ", res);
                const par = {data: {
                        physical_indicators: res.data.id,
                        name: data.sportsman.name,
                        surname: data.sportsman.surname,
                        phone_number: data.sportsman.phone_number,
                        achievements: data.sportsman.achievements,
                        birthday: data.sportsman.birthday,
                        address: data.sportsman.address,
                        sex: data.sportsman.sex,
                        sport_category: data.sportsman.sport_category,
                        club: data.sportsman.club.id,
                    }, id:id, navigate};
                if (img) {const fData = new FormData();
                    console.log("innnmg: ", img)
                    fData.append("medical_certificate", img, img?.name);
                    fData.append("physical_indicators", res.data.id);
                    fData.append("name", data.sportsman.name);
                    fData.append("surname", data.sportsman.surname);
                    fData.append("phone_number", data.sportsman.phone_number);
                    fData.append("achievements", data.sportsman.achievements);
                    fData.append("birthday", data.sportsman.birthday);
                    fData.append("address", data.sportsman.address);
                    fData.append("sex", data.sportsman.sex);
                    fData.append("sport_category", data.sportsman.sport_category);
                    fData.append("club", data.sportsman.club.id);
                    const par2 = {data: fData,id:id, navigate, handleOpenSuccessModal, handleCloseSuccessModal};
                    dispatch(editSportsman(par2))
                } else {
                    dispatch(editSportsman(par))
                }

            })

            // if (img) {
            //     console.log("data_sp-ind: ", data);
            //     requests.editPhysicalIndicatorApi(id, data.physical_indicator).then(res => {
            //         console.log("phs_indc: ", res.data.id)
            //         const fData = new FormData();
            //         fData.append("medical_certificate", img);
            //         fData.append("physical_indicators", res.data.id);
            //         fData.append("name", data.sportsman.name);
            //         fData.append("surname", data.sportsman.surname);
            //         fData.append("phone_number", data.sportsman.phone_number);
            //         fData.append("achievements", data.sportsman.achievements);
            //         fData.append("birthday", data.sportsman.birthday);
            //         fData.append("address", data.sportsman.address);
            //         fData.append("sex", data.sportsman.sex);
            //         fData.append("sport_category", data.sportsman.sport_category);
            //         fData.append("club", data.sportsman.club.id);
            //         const par2 = {data: fData, navigate, handleOpenSuccessModal}
            //         dispatch(editSportsman(par2))
            //     })
            // } else {
            //     const par2 = {data: {title: data.title, description: data.description}, id:id, navigate, handleOpenSuccessModal}
            //     console.log("par2:",par2)
            //     dispatch(
            //         editNews(par2)
            //     );
            // }

        }
    })

    const [img, setImg] = useState();
    const [imgURL, setImgURL] = useState(formik.values.sportsman.medical_certificate);
    console.log("imgURL: ", formik.values.picture)

    const selectedImg = (event) => {
        setImg(event.target.files[0]);
        setImgURL(URL.createObjectURL(event.target.files[0]));
        // formik.setFieldValue("sportsman.medical_certificate", URL.createObjectURL(event.target.files[0]) )
        // if (event.target.files && event.target.files[0]) {
        //     formik.setFieldValue("medical_certificate", URL.createObjectURL(event.target.files[0]) )
        //     setImgURL(URL.createObjectURL(event.target.files[0]));
        // }
    };

    const navigate = useNavigate()

    return (
        <>
        <form onSubmit={formik.handleSubmit} className={dfClubsStyles.form_cont}>
            <BackButton to={`/main/clubs/sportsmen/sportsman_details/${sportsman.id}`} />
            <p className="container_title">Информация о спортсмене</p>
            <Input name="sportsman.name" onChange={formik.handleChange} valueLabel="Имя" width="600px" value={formik.values.sportsman.name}/>
            <Input name="sportsman.surname" onChange={formik.handleChange} valueLabel="Фамилия" width="600px" value={formik.values.sportsman.surname}/>
            <Input name="sportsman.birthday" onChange={formik.handleChange} valueLabel="Дата рождения" width="600px" value={formik.values.sportsman.birthday}/>
            <Input name="sportsman.phone_number" onChange={formik.handleChange} valueLabel="Номер" width="600px" value={formik.values.sportsman.phone_number}/>
            <div className={inputStyles.input_container}>
                <label className={inputStyles.label}>Пол</label>
                <div className={inputStyles.gradient} style={{width:"600px"}}>
                    <select
                        onChange={formik.handleChange}
                        className={inputStyles.input}
                        value={formik.values.sportsman.sex}
                        name="sportsman.sex"
                    >
                        <option className={s.option}>

                        </option>
                        <option className={s.option} value="1">
                            Женский
                        </option>
                        <option className={s.option} value="2">
                            Мужской
                        </option>
                    </select>
                </div>
            </div>
            <Input name="sportsman.address" onChange={formik.handleChange} valueLabel="Адрес" width="600px" value={formik.values.sportsman.address}/>
            <div className={inputStyles.input_container}>
                <label className={inputStyles.label}>Клуб</label>
                <div className={inputStyles.gradient} style={{width:"600px"}}>
                    <select
                        onChange={formik.handleChange}
                        className={inputStyles.input}
                        value={formik.values.sportsman.club?.id}
                        name="sportsman.club"
                    >
                        <option className={s.option}></option>
                        {
                            clubs.map(club => {
                                return <option className={s.option} value={club.id}>{club.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <label className={inputStyles.label}>Медицинская спрвка</label>
            <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                {/*<img className={ss.img_icon_picture} src={formik.values.sportsman.medical_certificate?.slice(0, 4) + sportsman.medical_certificate?.slice(5)} alt=""/>*/}
                {/*<label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>*/}
                {/*<input id="image" className={s.img_input} type="file"/>*/}
                <img className={ss.img_icon_picture} src={imgURL} alt="wrong"/>
                <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                <input name="sportsman.medical_certificate" onChange={selectedImg}  id="image" className={s.img_input} type="file"/>
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Спортивные разряды</p>
            <div className={inputStyles.input_container}>
                <label className={inputStyles.label}>Спортивный разряд</label>
                <div className={inputStyles.gradient} style={{width:"600px"}}>
                    <select
                        onChange={(e) => formik.handleChange(e)}
                        className={inputStyles.input}
                        value={formik.values.sportsman.sport_category}
                        name="sportsman.sport_category"
                    >
                        <option className={s.option}>

                        </option>
                        <option className={s.option} value="1">
                            1-й Детский разряд
                        </option>
                        <option className={s.option} value="2">
                            2-й Детский разряд
                        </option>
                        <option className={s.option} value="3">
                            3-й Детский разряд
                        </option>
                        <option className={s.option} value="4">
                            1-й Взрослый разряд
                        </option>
                        <option className={s.option} value="5">
                            2-й Взрослый разряд
                        </option>
                        <option className={s.option} value="6">
                            3-й Взрослый разряд
                        </option>
                        <option className={s.option} value="7">
                            Кандидат в Мастера Спорта
                        </option>
                        <option className={s.option} value="8">
                            Мастера Спорта
                        </option>
                        <option className={s.option} value="9">
                            Мастера Спорта международного класса
                        </option>
                    </select>
                </div>
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Достижения</p>
            <Input name="sportsman.achievements" onChange={formik.handleChange} valueLabel="Достижения" width="600px" value={formik.values.sportsman.achievements}/>
            {/*<Input valueLabel="Достижения" width="600px" value="Чемпионат и первенство Ошской области по ушу"/>*/}
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Физические показатели</p>
            <div className="flex">
                <Input valueLabel="Ловкость" width="285px" value="Упражнения"/>
                <Input name="sportsman.physical_indicators.agility" onChange={formik.handleChange} valueLabel="Баллы" width="285px" value={formik.values.sportsman.physical_indicators?.agility?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Растяжка" width="285px" value="Упражнения"/>
                <Input name="sportsman.physical_indicators.stretch" onChange={formik.handleChange} valueLabel="Баллы" width="285px" value={formik.values.sportsman.physical_indicators?.stretch?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Сила" width="285px" value="Упражнения"/>
                <Input name="sportsman.physical_indicators.strength" onChange={formik.handleChange} valueLabel="Баллы" width="285px" value={formik.values.sportsman.physical_indicators?.strength?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Скорость" width="285px" value="Упражнения"/>
                <Input name="sportsman.physical_indicators.speed" onChange={formik.handleChange} valueLabel="Баллы" width="285px" value={formik.values.sportsman.physical_indicators?.speed?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Выносливость" width="285px" value="Упражнения"/>
                <Input name="sportsman.physical_indicators.stamina" onChange={formik.handleChange} valueLabel="Баллы" width="285px" value={formik.values.sportsman.physical_indicators?.stamina?.split('.')[0]}/>
            </div>
            <Button type="submit" onClick={handleOpenSuccessModal} margin="54px auto 0" width="600px" classname="button" text="СОХРАНИТЬ"/>
        </form>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данные о спортсмене!"/>}
        </>
    );
};

export default EditSportsmanDetails;
