import React, {useState} from 'react';
import Button from "../../../components/button/Button";
import { news_img1, news_img2, news_img3} from "../../../images";
import dfEventStyles from "./../../events/defaultEvents/DefaultEvents.module.scss"
import s from "./DefaultNews.module.scss"
import ArrowButton from "../../../components/arrowButton/ArrowButton";

const DefaultNews = () => {
    const [openCard, setOpenCard] = useState("");
    return (
        <div className={dfEventStyles.cont}>
            {/*{*/}
            {/*    openCard*/}
            {/*}*/}

            <div className={s.tab}>
                <div style={{marginBottom: 0}} className={dfEventStyles.link_cont}>
                    <p className={dfEventStyles.link}>Все новости</p>
                    <p className={dfEventStyles.link}>Новости за 2022г.</p>
                    <p className={dfEventStyles.link}>Новости за 2021г.</p>
                </div>
                <Button margin={0} text="СОЗДАТЬ"/>
            </div>
            <div style={{marginBottom: 54}} className={s.cards}>
                <div style={{background: `url(${news_img1}) no-repeat`}} className={`${s.card} ${s.card_top}`}>
                    <p className={s.card__title}>В номинации “первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
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
    );
};

export default DefaultNews;
