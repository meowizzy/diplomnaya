import React, {useEffect, useState} from 'react';
import Input from "../../../components/input/Input";
import s from "./EditNews.module.scss"
import inputStyles from "../../../components/input/Input.module.scss";
import {useFormik} from "formik";
import NewsTab from "../defaultNews/NewsTab";
import SuccessModal from "../../../components/modals/SuccessModal";
import BackButton from "../../../components/arrowButton/BackButton";
import ButtonForActiveChanges from "../../../components/buttonForActiveChanges/ButtonForActiveChanges";
import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getNew, editNews} from "../../../redux/slices/newsSlice";
import ss from "../createNews/CreateNews.module.scss";

const EditNews = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const {id} = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getNew(id))
    }, [])

    const new_item = useSelector(state => state.news.new)

    console.log("newee: ", new_item)



    const formik = useFormik({
        initialValues: new_item,
        enableReinitialize: true,
        // setFieldValue: (field: picture, value: new_item.picture) => void,
        onSubmit: data => {
            console.log("data: ",data)
            // handleOpenSuccessModal()

            if (img) {
                console.log(data);
                const form_data = new FormData();
                form_data.append("title", data.title);
                form_data.append("picture", img, img.name);
                form_data.append("description", data.description);
                const par = {data:form_data, id:id, navigate, handleOpenSuccessModal}
                console.log("par:",par)
                dispatch(editNews(par));
            } else {
                const par2 = {data: {title: data.title, description: data.description}, id:id, navigate, handleOpenSuccessModal}
                console.log("par2:",par2)
                dispatch(
                    editNews(par2)
                );
            }

        }
    })

    const [img, setImg] = useState();
    console.log("imgURL: ", formik.values.picture)

    const selectedImg = (event) => {
        setImg(event.target.files[0]);
        formik.setFieldValue("picture", URL.createObjectURL(event.target.files[0]) )
    };

    return (
        <>
            <div>
                <NewsTab/>
                <div className="container container_data_flexed">
                    <BackButton to="/main/news/all_news"  rotate="rotate(180deg)" />

                    <form onSubmit={formik.handleSubmit} style={{width: 600}}>
                        <h2 className="container_title">Новости</h2>
                        <label className={inputStyles.label}>Изображение</label>
                        <div style={{width: "100%", height: "200px", position: "relative"}} className={inputStyles.gradient}>
                            <img className={ss.img_icon_picture} src={formik.values.picture} alt="wrong"/>
                            <label className={`${inputStyles.input} ${s.label_img}`} htmlFor="image"></label>
                            <input name="picture" onChange={selectedImg}  id="image" className={s.img_input} type="file"/>
                        </div>
                        <Input name="title" onChange={formik.handleChange} value={formik.values.title} type="text" width="100%" valueLabel="Заголовок"/>
                        <Input name="description" onChange={formik.handleChange} value={formik.values.description} type="text" width="100%" valueLabel="Текст"/>
                        <ButtonForActiveChanges classname="no_button"  type="submit" width="100%" margin="70px 0px 0px" text="СОХРАНИТЬ"/>
                    </form>

                </div>
            </div>
            { openSuccessModal && <SuccessModal title="Вы успешно отредактировали данную новость!" open={openSuccessModal} handleClose={handleCloseSuccessModal}/>}
        </>

    );
};

export default EditNews;
