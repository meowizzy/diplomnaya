import React, {useEffect, useState} from 'react';
import Input from "../../../../components/input/Input";
import dfClubsStyles from "../../defaultClubs/DefaultClubs.module.scss"
import {useNavigate, useParams} from "react-router";
import BackButton from "../../../../components/arrowButton/BackButton";
import inputStyles from "../../../../components/input/Input.module.scss";
import s from "../../../news/editNews/EditNews.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {createSportsman, deleteSportsman, getSportsman} from "../../../../redux/slices/sportsmenSlice";
import ss from "../../../news/createNews/CreateNews.module.scss";
import OptionButton from "../../../../components/optionButton/OptionButton";
import Options from "../../../../components/options/Options";
import DeleteModal from "../../../../components/modals/DeleteModal";
import Button from "../../../../components/button/Button";
import SuccessModal from "../../../../components/modals/SuccessModal";
import {useFormik} from "formik";
import {requests} from "../../../../redux/api";
import {editNews} from "../../../../redux/slices/newsSlice";

const SportsmenDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const {id} = useParams();
    const dispatch = useDispatch();
    const sportsman = useSelector(state => state.sportsmen.sportsman)

    const category = {
        1: "1-й Детский разряд",
        2: "2-й Детский разряд",
        3: "3-й Детский разряд",
        4: "1-й Взрослый разряд",
        5: "2-й Взрослый разряд",
        6: "3-й Взрослый разряд",
        7: "Кандидат в Мастера Спорта",
        8: "Мастера Спорта",
        9: "Мастера Спорта международного класса",
    }
    const sex = {1: "Женский", 2 : "Мужской"}

    useEffect(() => {
        dispatch(getSportsman(id))
    }, []);

    // const formik = useFormik({
    //     initialValues: sportsman,
    //     enableReinitialize: true,
    //     // setFieldValue: (field: picture, value: new_item.picture) => void,
    //     onSubmit: data => {
    //         console.log("data: ",data)
    //
    //         if (img) {
    //             console.log("data_sp-ind: ", data);
    //             requests.editPhysicalIndicatorApi(id, data.physical_indicator).then(res => {
    //                 console.log("phs_indc: ", res.data.id)
    //                 const fData = new FormData();
    //                 fData.append("medical_certificate", img);
    //                 fData.append("physical_indicators", res.data.id);
    //                 fData.append("name", data.name);
    //                 fData.append("surname", data.surname);
    //                 fData.append("phone_number", data.phone_number);
    //                 fData.append("achievements", data.achievements);
    //                 fData.append("birthday", data.birthday);
    //                 fData.append("address", data.address);
    //                 fData.append("sex", data.sex);
    //                 fData.append("sport_category", data.sport_category);
    //                 fData.append("club", data.club);
    //                 const par = {data: fData, navigate}
    //                 dispatch(createSportsman(par))
    //             })
    //         } else {
    //             const par2 = {data: {title: data.title, description: data.description}, id:id, navigate}
    //             console.log("par2:",par2)
    //             dispatch(
    //                 editNews(par2)
    //             );
    //         }
    //
    //     }
    // })

    // const [img, setImg] = useState();
    // console.log("imgURL: ", formik.values.picture)
    //
    // const selectedImg = (event) => {
    //     setImg(event.target.files[0]);
    //     formik.setFieldValue("picture", URL.createObjectURL(event.target.files[0]) )
    // };

    const navigate = useNavigate()

    return (
        <>
            <div className={dfClubsStyles.form_cont}>
                <BackButton to="/main/clubs/sportsmen" />
                <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                {openOption && <Options link={`/main/clubs/sportsmen/sportsman_details/edit/${sportsman.id}`} closeOption={handleOpenOption} handleOpenDeleteModal={handleOpenDeleteModal}/>}
                <p className="container_title">Информация о спортсмене</p>
                <Input disabled valueLabel="ФИО" width="600px" value={`${sportsman.name} ${sportsman.surname}`}/>
                <Input disabled valueLabel="Дата рождения" width="600px" value={sportsman.birthday}/>
                <Input valueLabel="Номер" width="600px" value={sportsman.phone_number}/>
                <Input valueLabel="Адрес" width="600px" value={sportsman.address}/>
                <Input valueLabel="Пол" width="600px" value={sex[sportsman.sex]}/>
                <Input valueLabel="Средний балл ОФП" width="600px" value={sportsman.average_of_PHI?.split('.')[0]}/>
                <label className={inputStyles.label}>Медицинская спрвка</label>
                <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                    <img className={ss.img_icon_picture} src={sportsman.medical_certificate} alt=""/>
                    <label className={`${inputStyles.input} ${s.label_img}`}></label>
                    <input className={s.img_input} type="file"/>
                </div>
                <p className="basic_text" style={{margin: "70px auto 20px"}}>Спортивные разряды</p>
                <Input valueLabel="Спортивный разряд" width="600px" value={category[sportsman.sport_category]}/>
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
            { openDeleteModal && <DeleteModal nav_link="/main/clubs/sportsmen" dispatchFunc={deleteSportsman(sportsman.id)}  text="Вы уверены, что хотите удалить данного спортсмена?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default SportsmenDetails;
