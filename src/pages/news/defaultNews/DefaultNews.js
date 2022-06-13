import React, {useState} from 'react';
import Button from "../../../components/button/Button";
import { news_img1, news_img2, news_img3} from "../../../images";
import dfEventStyles from "./../../events/defaultEvents/DefaultEvents.module.scss"
import s from "./DefaultNews.module.scss"
import ArrowButton from "../../../components/arrowButton/ArrowButton";
import OptionButton from "../../../components/optionButton/OptionButton";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import NewsTab from "./NewsTab";
import DeleteModal from "../../../components/modals/DeleteModal";

const DefaultNews = () => {
    // const [openCard, setOpenCard] = useState("");
    const [openOption, setOpenOption] = useState(true);
    const handleOpenOption = () => {
        setOpenOption(!openOption)
    }

    const navigate = useNavigate()
    const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
    const handleOpenDeleteModal = () => setOpenDeleteModal(true);
    const handleCloseDeleteModal = () => setOpenDeleteModal(false);

    return (
        <>
            <div className={dfEventStyles.cont}>
                <NewsTab/>
                <div style={{marginBottom: 54}} className={s.cards}>
                    <div style={{background: `url(${news_img1}) no-repeat`}} className={`${s.card} ${s.card_top}`}>
                        <p className={s.card__title}>В номинации “первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                        <div className={ openOption ? s.closed_option_cont : s.option_cont}>
                            <Button onClick={ () => navigate("/main/news/edit_news")} margin="0" width="200px" text="Редактировать"/>
                            <Button onClick={handleOpenDeleteModal} margin="0" width="200px" text="Удалить"/>
                        </div>
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
                    <div className={s.card}>
                        <img className={s.card__img} src={news_img1} alt="wrong" />
                        <p className={s.card__title}>В номинации “первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <div className={s.next_button}><ArrowButton/></div>

                    </div>
                    <div className={s.card}>
                        <img className={s.card__img} src={news_img2} alt="wrong" />
                        <p className={s.card__title}>В номинации “первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <div className={s.next_button}><ArrowButton/></div>

                    </div>
                    <div className={s.card}>
                        <img className={s.card__img} src={news_img3} alt="wrong" />
                        <p className={s.card__title}>В номинации “первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <div className={s.next_button}><ArrowButton/></div>

                    </div>
                    <div className={s.card}>
                        <img className={s.card__img} src={news_img1} alt="wrong" />
                        <p className={s.card__title}>В номинации “первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <div className={s.next_button}><ArrowButton/></div>

                    </div>
                    <div className={s.card}>
                        <img className={s.card__img} src={news_img2} alt="wrong" />
                        <p className={s.card__title}>В номинации “первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <div className={s.next_button}><ArrowButton/></div>

                    </div>
                    <div className={s.card}>
                        <img className={s.card__img} src={news_img3} alt="wrong" />
                        <p className={s.card__title}>В номинации “первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        <div className={s.next_button}><ArrowButton/></div>
                    </div>
                </div>
            </div>
            { openDeleteModal && <DeleteModal open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default DefaultNews;
