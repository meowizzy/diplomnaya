import React, {useState} from 'react';
import Input from "../../components/input/Input";
import s from "../clubs/defaultClubs/DefaultClubs.module.scss"
import newsStyles from "../news/editNews/EditNews.module.scss"
import newsStyles2 from "../news/createNews/CreateNews.module.scss"
import BackButton from "../../components/arrowButton/BackButton";
import {useNavigate} from "react-router";
import {
    file_download,
    file_downloaded,
} from "../../images";
import Button from "../../components/button/Button";
import inputStyles from "../../components/input/Input.module.scss";
import {useFormik} from "formik";
import SuccessModal from "../../components/modals/SuccessModal";
import {requests} from "../../redux/api";

const CreateDocumentation = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const [file, setFile] = useState();

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            title: "",
            // file: {file},
        },
        onSubmit: (data) => {
            const fData = new FormData();
            fData.append("file", file);
            fData.append("title", data.title);
            console.log(data);
            // dispatch(createDoc(fData))
            requests.postDoc(fData).then(res => {
                console.log("new_doc: ", res.data)
                // dispatch(postMessage(response.data))
                handleOpenSuccessModal()
                setTimeout(() => navigate("/main/documentation/all_documentation"), 1500)
            })

        },
    });



    return (
        <>
            <form onSubmit={formik.handleSubmit} className={s.form_cont}>
                <BackButton to="/main/documentation/all_documentation" />
                <p className="container_title">Создать документ</p>
                <Input margin="0 0 50px 0" onChange={formik.handleChange} name="title" valueLabel="Название" width="100%" placeholder="Название документа"/>
                {/*<label className={inpStyles.label}>Формат</label>*/}
                <div style={{width: "100%", height: "112px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                    <img style={file ? {color: "black", top: "20%"} : {top: "20%"}} className={newsStyles2.img_icon} src={file ? file_downloaded : file_download} alt="wrong"/>
                    <label className={`${inputStyles.input} ${newsStyles.label_img}`} htmlFor="image"></label>
                    <input onChange={(e) => setFile(e.target.files[0])} name="file" style={{paddingLeft: 0}} id="image" className={newsStyles.img_input} type="file"/>
                    <p style={file ? {color: "black", top: "70%"} : {top: "70%"}} className={newsStyles2.img_text}>{ file ? "Файл загружен" : "Загрузить файл" }</p>
                </div>
                {/*<Button disabled width="100%" margin="40px auto 199px" classname="button" text="ЗАГРУЗИТЬ ДОКУМЕНТ"/>*/}
                <Button disabled={!(formik.values.title && file)} type="submit" width="100%" margin="44px 0 0 0" classname="button" text="СОЗДАТЬ"/>
            </form>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали документ!"/>}
        </>

    );
};

export default CreateDocumentation;
