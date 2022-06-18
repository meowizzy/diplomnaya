import React, {useState} from 'react';
import { news_img1, news_img2, news_img3} from "../../../images";
import dfEventStyles from "./../../events/defaultEvents/DefaultEvents.module.scss"
import s from "./DefaultNews.module.scss"

import OptionButton from "../../../components/optionButton/OptionButton";
import {useNavigate} from "react-router";
import NewsTab from "./NewsTab";
import DeleteModal from "../../../components/modals/DeleteModal";
import NewsCard from "./NewsCard";
import Options from "../../../components/options/Options";

const DefaultNews = () => {
    // const [openCard, setOpenCard] = useState("");
    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {
        setOpenOption(!openOption)
    }

    const navigate = useNavigate()
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    const images = [
        {news_img1},
        {news_img2},
        {news_img3},
        {news_img2},
        {news_img1},
        {news_img3},
    ]

    return (
        <>
            <div className={dfEventStyles.cont}>
                <NewsTab/>
                <div style={{marginBottom: 54}} className={s.cards}>
                    <div style={{background: `url(${news_img1}) no-repeat`}} className={`${s.card} ${s.card_top}`}>
                        <p className={s.card__title}>В номинации “Первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                        { openOption && <Options  link="/main/news/edit_news" handleOpenDeleteModal={handleOpenDeleteModal}/>}
                    </div>
                    <p className={s.text}>В мае в ЦДТ «Шайыр балалык» состоялись Детские соревнования по традиционному ушу им. Г. Сулеймановой. В соревнованиях приняли участие около 50-ти юных ушуистов из различных клубов ушу Федерации традиционного ушу КР.<br/>
                        <br/><br/>
                        Спортсмены выступали в двух видах программы: стандартные парные таолу и техника традиционных таолу.
                        <br/><br/>
                        Соревнования стали ярким завершением учебного года!
                        <br/><br/>
                        17.05.2022г.</p>
                </div>
                <div className={s.cards}>
                    {
                        images.map(img => {
                            return <NewsCard openOption={openOption} handleOpenDeleteModal={handleOpenDeleteModal} navigate={navigate} handleOpenOption={handleOpenOption} img={img} />
                        })
                    }
                </div>
            </div>
            { openDeleteModal && <DeleteModal text="Вы уверены, что хотите удалить данную статью?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default DefaultNews;
