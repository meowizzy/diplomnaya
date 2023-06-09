import React, {useState, useEffect} from 'react';
import Input from "../../components/input/Input";
import s from "../clubs/defaultClubs/DefaultClubs.module.scss"
import BackButton from "../../components/arrowButton/BackButton";
import OptionButton from "../../components/optionButton/OptionButton";
import {useNavigate, useParams} from "react-router";
import Options from "../../components/options/Options";
import DeleteModal from "../../components/modals/DeleteModal";
import {download} from "../../images";
import {useSelector} from "react-redux/es/exports";
import {useDispatch} from "react-redux";
import {deleteDoc, getDoc} from "../../redux/slices/docSlice";
import {getCookie} from "../../utils/cookieFunction/cookieFunction";

const DocumentationDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getDoc(id));
        window.scrollTo(0, 0);
    }, []);

    const doc = useSelector(state => state.docs.doc)

    console.log("doc_app: ", doc)

    const role = JSON.parse(getCookie("user_info"))

    return (
        <>
            <div className={s.form_cont}>
                <BackButton to="/main/documentation/all_documentation" />
                {role["user role"] === "ADMIN" && <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>}
                {openOption && <Options link={`/main/documentation/all_documentation/doc_details/edit_details/${doc.id}`} handleOpenDeleteModal={handleOpenDeleteModal}/>}
                <p className="container_title">Информация о документе</p>
                <Input valueLabel="Название" width="100%" value={doc.title}/>
                <div style={{margin: "46px 20px 0"}}  className="input_flex">
                    <p className="basic_text">Скачать файл</p>
                    <a href={doc.file} download="My_File.pdf"><img style={{cursor: "pointer"}} src={download} alt="wrong"/></a>
                </div>
            </div>
            { openDeleteModal && <DeleteModal nav_link="/main/documentation/all_documentation" dispatchFunc={deleteDoc({id: doc.id, link : () => navigate("/main/documentation/all_documentation")})} text="Вы уверены, что хотите удалить данный документ?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>
    );
};

export default DocumentationDetails;
