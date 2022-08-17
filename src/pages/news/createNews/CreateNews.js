import React, {useState} from 'react';
import Input from "../../../components/input/Input";
import s from "./../editNews/EditNews.module.scss"
import ss from "./CreateNews.module.scss"
import Button from "../../../components/button/Button";
import inputStyles from "../../../components/input/Input.module.scss";
import {useFormik} from "formik";
import {useNavigate} from "react-router";
import {camera_icon, checkbox_icon_turned_on, unswitched} from "../../../images";
import NewsTab from "../defaultNews/NewsTab";
import SuccessModal from "../../../components/modals/SuccessModal";
import BackButton from "../../../components/arrowButton/BackButton";
import {requests} from "../../../redux/api";
import {createDoc} from "../../../redux/slices/docSlice";
import {useDispatch} from "react-redux";
import {createNew} from "../../../redux/slices/newsSlice";

const CreateNews = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [img, setImg] = useState();
    const [imgURL, setImgURL] = useState();
    const [switchBox, setSwitchBox] = useState(false);

    const handleSwitchBox = () => setSwitchBox((!switchBox))

    const selectedImg = (event) => {
        setImg(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setImgURL(URL.createObjectURL(event.target.files[0]));
        }
    };
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        onSubmit: data => {
            const fData = new FormData();
            fData.append("picture", img);
            fData.append("title", data.title);
            fData.append("description", data.description);
            console.log(data);
            const par = {data: fData, navigate, handleOpenSuccessModal}
            dispatch(createNew(par))
        }
    })
    return (
        <>
            <div>
                <NewsTab/>
                <div className="container container_data_flexed">
                        <BackButton to="/main/news/all_news" rotate="rotate(180deg)" />

                    <form onSubmit={formik.handleSubmit} style={{width: 600}}>
                        <h2 className="container_title">Создание новости</h2>
                        <label className={inputStyles.label}>Изображение</label>
                        <div style={{width: "100%", height: "200px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                            {imgURL ? <img className={ss.img_icon_picture} src={imgURL} alt="wrong"/> :
                                <img className={ss.img_icon} src={camera_icon} alt="wrong"/>}
                            <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                            <input onChange={selectedImg} style={{paddingLeft: 0}} id="image" className={s.img_input} type="file"/>
                            {!imgURL && <p className={ss.img_text}>Добавить фото</p>}
                        </div>
                        <Input name="title" placeholder="Добавить заголовок" onChange={formik.handleChange} type="text" width="100%" valueLabel="Заголовок"/>
                        <Input name="description" placeholder="Добавить описание" onChange={formik.handleChange} type="text" width="100%" valueLabel="Текст"/>
                        <div className={ss.checkbox_cont}>
                            <p className="basic_text">Отправить всем?</p>
                            {switchBox ? <img onClick={handleSwitchBox} src={checkbox_icon_turned_on} alt="wrong"/> : <img onClick={handleSwitchBox} src={unswitched} alt="wrong"/>  }
                        </div>
                        <Button disabled={!(formik.values.description && formik.values.title)} type="submit" width="100%" margin="70px 0px 0px" text="СОЗДАТЬ"/>
                    </form>
                </div>
            </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали новость!"/>}
        </>
    );
};

export default CreateNews;
