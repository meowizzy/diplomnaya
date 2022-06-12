import React from 'react';
import Button from "../../../components/button/Button";
import {news_img1, news_img2, news_img3} from "../../../images";
import dfEventStyles from "./../../events/defaultEvents/DefaultEvents.module.scss"
import s from "./DefaultNews.module.scss"

const DefaultNews = () => {
    return (
        <div className={dfEventStyles.cont}>
            <div className={s.tab}>
                <div style={{marginBottom: 0}} className={dfEventStyles.link_cont}>
                    <p className={dfEventStyles.link}>Все новости</p>
                    <p className={dfEventStyles.link}>Новости за 2022г.</p>
                    <p className={dfEventStyles.link}>Новости за 2021г.</p>
                </div>
                <Button margin={0} text="СОЗДАТЬ"/>
            </div>
            <div className={s.cards}>
                <div className={s.card}>
                    <img className={s.card__img} src={news_img1} alt="wrong" />
                    <p className={s.card__title}>В номинации “первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
                </div>
                <div className={s.card}>
                    <img className={s.card__img} src={news_img2} alt="wrong" />
                    <p className={s.card__title}>В номинации “первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
                </div>
                <div className={s.card}>
                    <img className={s.card__img} src={news_img3} alt="wrong" />
                    <p className={s.card__title}>В номинации “первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
                </div>
                <div className={s.card}>
                    <img className={s.card__img} src={news_img1} alt="wrong" />
                    <p className={s.card__title}>В номинации “первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
                </div>
                <div className={s.card}>
                    <img className={s.card__img} src={news_img2} alt="wrong" />
                    <p className={s.card__title}>В номинации “первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
                </div>
                <div className={s.card}>
                    <img className={s.card__img} src={news_img3} alt="wrong" />
                    <p className={s.card__title}>В номинации “первое место” </p>
                    <p className={s.card__date}>17.04.2022г.</p>
                </div>

            </div>
        </div>
    );
};

export default DefaultNews;
