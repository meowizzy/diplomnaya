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

const SportsmenDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const [editButton, setEditButton] = useState(false);

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSportsman(id))
        dispatch(getClubs())
    }, []);

    const sportsman = useSelector(state => state.sportsmen.sportsman)
    const clubs = useSelector(state => state.clubs.clubs)
    console.log("gggg: ", sportsman)
    const formik = useFormik({
        initialValues: {
            sportsman:{
                physical_indicators: 3,
                name: sportsman.name,
                surname: sportsman.surname,
                phone_number: sportsman.phone_number,
                achievements: sportsman.achievements,
                birthday: sportsman.birthday,
                address: sportsman.address,
                sex: sportsman.sex,
                sport_category: sportsman.sport_category,
                club: sportsman.club?.id
            },
            physical_indicator: {
                agility: sportsman.physical_indicators?.agility,
                strength: sportsman.physical_indicators?.strength,
                stamina: sportsman.physical_indicators?.stamina,
                speed: sportsman.physical_indicators?.speed,
                stretch: sportsman.physical_indicators?.stretch
            }
            },
        enableReinitialize: true,
        // setFieldValue: (field: picture, value: new_item.picture) => void,
        onSubmit: data => {
            console.log("data_sp: ",data.physical_indicator)

            requests.editPhysicalIndicatorApi(sportsman.physical_indicators.id, data.physical_indicator).then(res => {
                const par2 = {data: {
                        physical_indicators: res.data.id,
                        name: data.sportsman.name,
                        surname: data.sportsman.surname,
                        phone_number: data.sportsman.phone_number,
                        achievements: data.sportsman.achievements,
                        birthday: data.sportsman.birthday,
                        address: data.sportsman.address,
                        sex: data.sportsman.sex,
                        sport_category: data.sportsman.sport_category,
                        club: data.sportsman.club,
                    }, id:id, navigate}
                dispatch(editSportsman(par2));
            })

            // if (img) {
            //     console.log("data_sp-ind: ", data);
            //     requests.editPhysicalIndicatorApi(id, data.physical_indicator).then(res => {
            //         console.log("phs_indc: ", res.data.id)
            //         const fData = new FormData();
            //         // fData.append("medical_certificate", img);
            //         fData.append("physical_indicators", res.data.id);
            //         fData.append("name", data.name);
            //         fData.append("surname", data.surname);
            //         fData.append("phone_number", data.phone_number);
            //         fData.append("achievements", data.achievements);
            //         fData.append("birthday", data.birthday);
            //         fData.append("address", data.address);
            //         fData.append("sex", data.sex);
            //         fData.append("sport_category", data.sport_category);
            //         fData.append("club", data.club);
            //         const par = {data: fData, navigate, handleOpenSuccessModal}
            //         dispatch(createSportsman(par))
            //     })
            // } else {
            //     const par2 = {data: data, id:id, navigate, handleOpenSuccessModal}
            //     console.log("par2:",par2)
            //     dispatch(
            //         editSportsman(par2)
            //     );
            // }
        }
    })

    const [img, setImg] = useState();
    console.log("imgURL: ", formik.values.medical_certificate)

    const selectedImg = (event) => {
        setImg(event.target.files[0]);
        formik.setFieldValue("medical_certificate", URL.createObjectURL(event.target.files[0]) )
    };

    const navigate = useNavigate()

    return (
        <>
        <form onSubmit={formik.handleSubmit} className={dfClubsStyles.form_cont}>
            {
                editButton ? <BackButton onClick={() => setEditButton(false)}/> : <BackButton to="/main/clubs/sportsmen" />
            }
            {!editButton && (<OptionButton onClick={handleOpenOption} top="30px" right="30px"/>)}
            {openOption && <Options closeOption={handleOpenOption} setEditButton={setEditButton} handleOpenDeleteModal={handleOpenDeleteModal}/>}
            <p className="container_title">Информация о спортсмене</p>
            <Input name="sportsman.name" onChange={editButton ? formik.handleChange : null} valueLabel="Имя" width="600px" value={formik.values.sportsman.name}/>
            <Input name="sportsman.surname" onChange={editButton ? formik.handleChange : null} valueLabel="Фамилия" width="600px" value={formik.values.sportsman.surname}/>
            <Input name="sportsman.birthday" onChange={editButton ? formik.handleChange : null} valueLabel="Дата рождения" width="600px" value={formik.values.sportsman.birthday}/>
            <Input name="sportsman.phone_number" onChange={editButton ? formik.handleChange : null} valueLabel="Номер" width="600px" value={formik.values.sportsman.phone_number}/>
            <Input name="sportsman.address" onChange={editButton ? formik.handleChange : null} valueLabel="Адрес" width="600px" value={formik.values.sportsman.address}/>
            {editButton ? <div className={inputStyles.input_container}>
                <label className={inputStyles.label}>Пол</label>
                <div className={inputStyles.gradient} style={{width:"600px"}}>
                    <select
                        onChange={editButton ? formik.handleChange : null}
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
            </div> : <Input valueLabel="Пол" width="600px" value={formik.values.sportsman.sex === 1 ? "Женский" : "Мужской"}/>}
            {!editButton && <Input valueLabel="Средний балл ОФП" width="600px" value={sportsman.average_of_PHI?.split('.')[0]}/>}
            <label className={inputStyles.label}>Медицинская справка</label>
            <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                <img className={ss.img_icon_picture} src={formik.values.sportsman.medical_certificate} alt="wrong"/>
                <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                <input name="sportsman.medical_certificate" onChange={selectedImg}  id="image" className={s.img_input} type="file"/>
                {/*<img className={ss.img_icon_picture} src={sportsman.medical_certificate?.slice(0, 4) + sportsman.medical_certificate?.slice(5)} alt=""/>*/}
                {/*<label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>*/}
                {/*<input id="image" className={s.img_input} type="file"/>*/}
            </div>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Спортивные разряды</p>
            {
                editButton ? <div className={inputStyles.input_container}>
                    <label className={inputStyles.label}>Клуб</label>
                    <div className={inputStyles.gradient} style={{width:"600px"}}>
                        <select
                            onChange={editButton ? formik.handleChange : null}
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
                </div> : <Input valueLabel="Спортивный разряд" width="600px" value={formik.values.sportsman.sport_category}/>
            }
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Достижения</p>
            <Input name="sportsman.achievements" onChange={editButton ? formik.handleChange : null} valueLabel="Достижения" width="600px" value={formik.values.sportsman.achievements}/>
            <p className="basic_text" style={{margin: "70px auto 20px"}}>Физические показатели</p>
            <div className="flex">
                <Input valueLabel="Ловкость" width="285px" value="Упражнения"/>
                <Input name="physical_indicator.agility" onChange={editButton ? formik.handleChange : null} valueLabel="Баллы" width="285px" value={formik.values.physical_indicator?.agility?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Растяжка" width="285px" value="Упражнения"/>
                <Input name="physical_indicator.stretch" onChange={editButton ? formik.handleChange : null} valueLabel="Баллы" width="285px" value={formik.values.physical_indicator?.stretch?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Сила" width="285px" value="Упражнения"/>
                <Input name="physical_indicator.strength" onChange={editButton ? formik.handleChange : null} valueLabel="Баллы" width="285px" value={formik.values.physical_indicator?.strength?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Скорость" width="285px" value="Упражнения"/>
                <Input name="physical_indicator.speed" onChange={editButton ? formik.handleChange : null} valueLabel="Баллы" width="285px" value={formik.values.physical_indicator?.speed?.split('.')[0]}/>
            </div>
            <div className="flex">
                <Input valueLabel="Выносливость" width="285px" value="Упражнения"/>
                <Input name="physical_indicator.stamina" onChange={editButton ? formik.handleChange : null} valueLabel="Баллы" width="285px" value={formik.values.physical_indicator?.stamina?.split('.')[0]}/>
            </div>
            {editButton && <Button type="submit" margin="54px auto 0" width="600px" classname="button" text="СОХРАНИТЬ"/>}
        </form>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данные о спортсмене!"/>}
            { openDeleteModal && <DeleteModal nav_link="/main/clubs/sportsmen" dispatchFunc={deleteSportsman(sportsman.id)}  text="Вы уверены, что хотите удалить данного спортсмена?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>
    );
};

export default SportsmenDetails;
