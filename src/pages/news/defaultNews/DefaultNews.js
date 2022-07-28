import React, {useState, useEffect} from 'react';
import { news_img1, news_img2, news_img3} from "../../../images";
import dfEventStyles from "./../../events/defaultEvents/DefaultEvents.module.scss"
import s from "./DefaultNews.module.scss"

import {useNavigate} from "react-router";
import NewsTab from "./NewsTab";
import NewsCard from "./NewsCard";
import {getCookie} from "../../../utils/cookieFunction/cookieFunction";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../../redux/slices/newsSlice";

const DefaultNews = () => {
    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {
        setOpenOption(!openOption)
    }

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const news = useSelector(state => state.news.news)

    useEffect(() => {
        dispatch(getNews())
    }, [])


    console.log("nnew: ", news)
    return (
        <>
            <div className={dfEventStyles.cont}>
                <NewsTab/>
                <div className={s.cards}>
                    {
                        news.map(new_item => {
                            return <NewsCard key={new_item.id} data={new_item} openOption={openOption} navigate={navigate} handleOpenOption={handleOpenOption} img={new_item.picture} />
                        })
                    }
                </div>
            </div>
        </>

    );
};

export default DefaultNews;
