import React, {useState, useEffect} from 'react';
import Input from "../../components/input/Input";
import s from "../clubs/defaultClubs/DefaultClubs.module.scss"
import BackButton from "../../components/arrowButton/BackButton";
import {useNavigate, useParams} from "react-router";
import {file_download, file_downloaded } from "../../images";
import Button from "../../components/button/Button";
import SuccessModal from "../../components/modals/SuccessModal";
import {useSelector} from "react-redux/es/exports";
import {useDispatch} from "react-redux";
import {getDoc} from "../../redux/slices/docSlice";
import inputStyles from "../../components/input/Input.module.scss";
import newsStyles2 from "../news/createNews/CreateNews.module.scss";
import newsStyles from "../news/editNews/EditNews.module.scss";
import {useFormik} from "formik";
import {requests} from "../../redux/api";

const EditDocumentationDetails = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDoc(id))
    }, []);

    const doc = useSelector(state => state.docs.doc)
    console.log("doc_app: ", doc)

    const [file, setFile] = useState();

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            title: doc.title,
            file: {file},
        },
        onSubmit: (data) => {
            if (file) {
                const fData = new FormData();
                fData.append("file", file);
                fData.append("title", data.title);
                const id = doc.id
                console.log(data);
                requests.editDoc({fData, id}).then(res => {
                    console.log("edited_doc: ", res.data)
                    handleOpenSuccessModal()
                    setTimeout(() => navigate("/main/documentation/all_documentation"), 1500)
            })} else {
                const fData = new FormData();
                fData.append("title", data.title);
                const id = doc.id
                console.log(data);
                requests.editDoc({fData, id}).then(res => {
                    console.log("edited_doc: ", res.data)
                    handleOpenSuccessModal()
                    setTimeout(() => navigate("/main/documentation/all_documentation"), 1500)
            })}
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={s.form_cont}>
                <BackButton to={`/main/documentation/all_documentation/doc_details/${id}`} />
                <p className="container_title">Редактировать документ</p>
                <Input name="title" onChange={formik.handleChange} margin="0 0 70px 0" valueLabel="Название" width="100%" value={formik.values.title}/>
                <div style={{width: "100%", height: "112px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                    <img style={doc.file ? {color: "black", top: "20%"} : {top: "20%"}} className={newsStyles2.img_icon} src={doc.file ? file_downloaded : file_download} alt="wrong"/>
                    <label style={{paddingLeft: 0}} className={`${inputStyles.input} ${newsStyles.label_img}`} htmlFor="image"></label>
                    <input onChange={(e) => setFile(e.target.files[0])} name="file" style={{paddingLeft: 0}} id="image" className={newsStyles.img_input} type="file"/>
                    <p style={doc.file ? {color: "black", top: "70%"} : {top: "70%"}} className={newsStyles2.img_text}>{ doc.file ? "Файл загружен" : "Загрузить файл" }</p>
                </div>
                <Button margin="24px auto 0" onClick={handleOpenSuccessModal} width="100%" className="button" text="СОХРАНИТЬ" />
            </form>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данный документ!"/>}
        </>
    );
};

export default EditDocumentationDetails;
