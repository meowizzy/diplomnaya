import React, {useEffect, useState} from 'react';
import Input from "../../../../components/input/Input";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useNavigate} from "react-router";
import BackButton from "../../../../components/arrowButton/BackButton";
import inputStyles from "../../../../components/input/Input.module.scss";
import s from "../../../news/editNews/EditNews.module.scss";
import ss from "../../../news/createNews/CreateNews.module.scss";
import ownStyles from "../BasicClubs.module.scss"
import {camera_icon, plus} from "../../../../images";
import Button from "../../../../components/button/Button";
import SuccessModal from "../../../../components/modals/SuccessModal";
import {useFormik} from "formik";
import {requests} from "../../../../redux/api";
import {useDispatch, useSelector} from "react-redux";
import {getClubs} from "../../../../redux/slices/clubSlice";
import {createSportsman} from "../../../../redux/slices/sportsmenSlice";

const CreateSportsman = () => {

    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const [img, setImg] = useState();
    const [imgURL, setImgURL] = useState();
    // const [selectedValue, setSelectValue] = useState("Должность");
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const clubs = useSelector(state => state.clubs.clubs)


    const selectedImg = (event) => {
        setImg(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setImgURL(URL.createObjectURL(event.target.files[0]));
        }
    };

    useEffect(() => {
        dispatch(getClubs())
    }, [])

    const formik = useFormik({
        initialValues: {
            sportsman:{
                "name": "",
                "surname": "",
                "phone_number": "",
                "achievements": "",
                "birthday": "",
                "address": "",
                "sex": null,
                "sport_category": null,
                "club": 0
            },
            physical_indicator: {
                "agility": "",
                "strength": "",
                "stamina": "",
                "speed": "",
                "stretch": ""
            }
            },
        onSubmit: (data) => {
            console.log("data_sp-ind: ", data);

            requests.postPhysicalIndicatorApi(data.physical_indicator).then(res => {
                console.log("phs_indc: ", res.data.id)
                const fData = new FormData();
                fData.append("medical_certificate", img);
                fData.append("physical_indicators", res.data.id);
                fData.append("name", data.sportsman.name);
                fData.append("surname", data.sportsman.surname);
                fData.append("phone_number", data.sportsman.phone_number);
                fData.append("achievements", data.sportsman.achievements);
                fData.append("birthday", data.sportsman.birthday);
                fData.append("address", data.sportsman.address);
                fData.append("sex", data.sportsman.sex);
                fData.append("sport_category", data.sportsman.sport_category);
                fData.append("club", data.sportsman.club);
                const par = {data: fData, navigate, handleOpenSuccessModal}
                dispatch(createSportsman(par))
            })
            // dispatch(createDoc(fData))
            // requests.postDoc(fData).then(res => {
            //     console.log("new_doc: ", res.data)
            //     handleOpenSuccessModal()
            //     setTimeout(() => navigate("/main/documentation/all_documentation"), 1500)
            // })
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={dfClubsStyles.form_cont}>
                <BackButton to="/main/clubs/sportsmen" />
                <p className="container_title">Создание спортсмена</p>
                <Input onChange={formik.handleChange} name="sportsman.name" valueLabel="Имя" width="600px" placeholder="Введите имя"/>
                <Input onChange={formik.handleChange} name="sportsman.surname" valueLabel="Фамилия" width="600px" placeholder="Введите фамилию"/>
                <Input onChange={formik.handleChange} name="sportsman.birthday" valueLabel="Дата рождения" width="600px" placeholder="2022-08-04"/>
                <Input onChange={formik.handleChange} name="sportsman.phone_number" valueLabel="Номер" width="600px" placeholder="+996"/>
                <div className={inputStyles.input_container}>
                    <label className={inputStyles.label}>Пол</label>
                    <div className={inputStyles.gradient} style={{width:"600px"}}>
                        <select
                            onChange={(e) => formik.handleChange(e)}
                            className={inputStyles.input}
                            /* value={formik.values.должность} */
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
                <Input onChange={formik.handleChange} name="sportsman.address" valueLabel="Адрес" width="600px" placeholder="Введите адрес"/>
                <Input valueLabel="Средний балл ОФП" width="600px" placeholder="Введите средний балл"/>
                <div className={inputStyles.input_container}>
                    <label className={inputStyles.label}>Клуб</label>
                    <div className={inputStyles.gradient} style={{width:"600px"}}>
                        <select
                            onChange={(e) => formik.handleChange(e)}
                            className={inputStyles.input}
                            /* value={formik.values.должность} */
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
                <label className={inputStyles.label}>Медицинская справка</label>
                <div style={{width: "100%", height: "200px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                    {imgURL ? <img className={ss.img_icon_picture} src={imgURL} alt="wrong"/> :
                        <img className={ss.img_icon} src={camera_icon} alt="wrong"/>}
                    <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                    <input onChange={selectedImg} style={{paddingLeft: 0}} id="image" className={s.img_input} type="file"/>
                    {!imgURL && <p className={ss.img_text}>Добавить фото</p>}
                </div>
                <p className="basic_text" style={{margin: "70px auto 20px"}}>Спортивные разряды</p>
                <div className={inputStyles.input_container}>
                    <label className={inputStyles.label}>Спортивный разряд</label>
                    <div className={inputStyles.gradient} style={{width:"600px"}}>
                        <select
                            onChange={(e) => formik.handleChange(e)}
                            className={inputStyles.input}
                            /* value={formik.values.должность} */
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
                <div className={ownStyles.inp_plus_cont}>
                    <Input onChange={formik.handleChange} name="sportsman.achievements" valueLabel="Достижения" width="600px" placeholder="Введите спортивный достижения"/>
                    {/*<img className={ownStyles.plus} src={plus} alt="wrong"/>*/}
                </div>
                <p className="basic_text" style={{margin: "70px auto 20px"}}>Физические показатели</p>
                <div className="flex">
                    <Input valueLabel="Ловкость" width="285px" value="Упражнения"/>
                    <Input onChange={formik.handleChange} name="physical_indicator.agility" valueLabel="Баллы" width="285px" placeholder="0"/>
                </div>
                <div className="flex">
                    <Input valueLabel="Растяжка" width="285px" value="Упражнения"/>
                    <Input onChange={formik.handleChange} name="physical_indicator.stretch" valueLabel="Баллы" width="285px" placeholder="0"/>
                </div>
                <div className="flex">
                    <Input valueLabel="Сила" width="285px" value="Упражнения"/>
                    <Input onChange={formik.handleChange} name="physical_indicator.strength" valueLabel="Баллы" width="285px" placeholder="0"/>
                </div>
                <div className="flex">
                    <Input valueLabel="Скорость" width="285px" value="Упражнения"/>
                    <Input onChange={formik.handleChange} name="physical_indicator.speed" valueLabel="Баллы" width="285px" placeholder="0"/>
                </div>
                <div className="flex">
                    <Input valueLabel="Выносливость" width="285px" value="Упражнения"/>
                    <Input onChange={formik.handleChange} name="physical_indicator.stamina" valueLabel="Баллы" width="285px" placeholder="0"/>
                </div>
                <Button type="submit" onClick={handleOpenSuccessModal} text="СОЗДАТЬ" width="600px" margin="70px auto 0"/>
            </form>
            { openSuccessModal && <SuccessModal title="Вы успешно создали спортсмена!" open={openSuccessModal} handleClose={handleCloseSuccessModal}/>}
        </>
    );
};

export default CreateSportsman;
