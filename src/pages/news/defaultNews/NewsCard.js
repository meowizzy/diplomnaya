import React, {useState} from 'react';
import s from "./DefaultNews.module.scss";
import {news_img1} from "../../../images";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import OptionButton from "../../../components/optionButton/OptionButton";
import BackButton from "../../../components/arrowButton/BackButton";
import Options from "../../../components/options/Options";

const NewsCard = ({openOption, handleOpenOption, handleOpenDeleteModal}) => {

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open);
        console.log(open)
    }

    const role = localStorage.getItem("role")

    return (
            open ? (<div className={s.card}>
                    <img className={s.card__img} src={news_img1} alt="wrong" />
                    <p className={s.card__title}>В номинации “Первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
                    <ForwardButton className={s.next_button} onClick={handleOpen}/>
                    {/*<div><ForwardButton/></div>*/}
                </div>) : (<div style={{marginBottom: 54}} className={s.cards}>
                    <div style={{background: `url(${news_img1}) no-repeat`}} className={`${s.card} ${s.card_top}`}>
                        <BackButton onClick={handleOpen}/>
                        <p className={s.card__title}>В номинации “Первое место” </p>
                        <p className={s.card__date}>17.04.2022г.</p>
                        {
                            role === "admin" &&
                            <>
                                <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                                {openOption && <Options link="/main/news/all_news/edit_new" handleOpenDeleteModal={handleOpenDeleteModal}/>}
                            </>
                        }
                    </div>
                    <p className={s.text}>В мае в ЦДТ «Шайыр балалык» состоялись Детские соревнования по традиционному ушу им. Г. Сулеймановой. В соревнованиях приняли участие около 50-ти юных ушуистов из различных клубов ушу Федерации традиционного ушу КР.<br/>
                        <br/>
                        Спортсмены выступали в двух видах программы: стандартные парные таолу и техника традиционных таолу.
                        <br/><br/>
                        Соревнования стали ярким завершением учебного года!
                        <br/><br/>
                        17.05.2022г.</p>
                </div>)

    );
};

export default NewsCard;
