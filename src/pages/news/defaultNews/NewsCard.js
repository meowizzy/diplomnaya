import React, {useState} from 'react';
import s from "./DefaultNews.module.scss";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import OptionButton from "../../../components/optionButton/OptionButton";
import BackButton from "../../../components/arrowButton/BackButton";
import Options from "../../../components/options/Options";
import {getCookie} from "../../../utils/cookieFunction/cookieFunction";
import DeleteModal from "../../../components/modals/DeleteModal";
import {deleteNew} from "../../../redux/slices/newsSlice";

const NewsCard = ({openOption, handleOpenOption, data}) => {

    const [open, setOpen] = useState(true);
    console.log("id: ", data.id)

    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    const handleOpen = () => {
        setOpen(!open);
        console.log(open)
    }

    const role = JSON.parse(getCookie("user_info"))
    const deleteData = {id: data.id, close_modal: handleCloseDeleteModal}

    return (
        <>
            {open ? (<div className={s.card}>
                <img className={s.card__img} src={data.picture} alt="wrong"/>
                <p className={s.card__title}>{data.title} </p>
                <p className={s.card__date}>{data.created_date}</p>
                <ForwardButton className={s.next_button} onClick={handleOpen}/>
            </div>) : (<div style={{marginBottom: 54}} className={s.cards}>
                <div style={{background: `url(${data.picture}) no-repeat`}} className={`${s.card} ${s.card_top}`}>
                    <BackButton onClick={handleOpen}/>
                    <p className={s.card__title}>{data.title}</p>
                    <p className={s.card__date}>{data.created_date}</p>
                    {
                        role["user role"] === "ADMIN" &&
                        <>
                            <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                            {openOption && <Options link={`/main/news/all_news/edit_new/${data.id}`} handleOpenDeleteModal={handleOpenDeleteModal}/>}
                        </>
                    }
                </div>
                <p className={s.text}>{data.description}
                    <br/><br/>
                    {data.created_date}</p>
            </div>)}
            { openDeleteModal && <DeleteModal dispatchFunc={deleteNew(deleteData)} text="Вы уверены, что хотите удалить данную статью?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default NewsCard;
