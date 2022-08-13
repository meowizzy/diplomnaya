import React, {useEffect} from 'react';
import "./Chat.css"
// import { RiSendPlaneFill } from 'react-icons/ri';
import {useState} from "react";
import Input from "../../components/input/Input";
import s from "../users/registered/Registered.module.scss";
import {camera_icon, message_sent, message_unsend, search_icon} from "../../images";

const Chat = () => {

    const [textArr, setTextArr] = useState([])
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState(" ");


    const sendMessage = () => {
        setValue(inputValue)
    }

    useEffect(() => {
        setTextArr([...textArr, value])
        console.log(textArr)
        console.log(value)
    }, [value])

    return (
        // <div style={{padding: 0}} className="container_chat">
            <div className="row">
                <div className="users">
                    <div className="search">
                        <div className={s.search}>
                            <Input width="360px" placeholder="Поиск" />
                            <img className={s.search_icon} src={search_icon} alt="wrong"/>
                        </div>
                    </div>
                    <section className="discussions">
                        <div className="discussion">
                            <div className="desc-contact">
                                <p className="name">Кот Леопольд</p>
                                <p className="message">Сделать правильную верстку прило...</p>
                            </div>
                            <img className="sent_message" src={message_unsend} alt="/"/>
                            <div className="time_count_cont">
                                <div className="timer">20:36</div>
                                {/*<p className="count_message">5</p>*/}
                            </div>

                        </div>

                        <div className="discussion">
                            <div className="desc-contact">
                                <p className="name">Ушу Ушу</p>
                                <p className="message">Сделать правильную верстку прило...</p>
                            </div>
                            <img className="sent_message" src={message_sent} alt="/"/>
                            <div className="time_count_cont">
                                <div className="timer">20:36</div>
                                {/*<p className="count_message">5</p>*/}
                            </div>
                        </div>

                        <div className="discussion message-active">
                            <div className="desc-contact">
                                <p className="name">Кот Леопольд</p>
                                <p className="message">Карина: Всем привет!</p>
                            </div>
                            <img className="sent_message" src={message_unsend} alt="/"/>
                            <div className="time_count_cont">
                                <div className="timer">20:36</div>
                                <p className="count_message">5</p>
                            </div>
                        </div>
                        <div className="discussion">
                            <div className="desc-contact">
                                <p className="name">Кот Леопольд</p>
                                <p className="message">Сделать правильную верстку прило...</p>
                            </div>
                            <img className="sent_message" src={message_unsend} alt="/"/>
                            <div className="time_count_cont">
                                <div className="timer">20:36</div>
                                {/*<p className="count_message">5</p>*/}
                            </div>
                        </div>


                    </section>
                </div>

                <section className="chat">
                    <div className="header-chat">
                        {/*<i className="icon fa fa-user-o" aria-hidden="true"></i>*/}
                        <p className="name">Ушу Ушу</p>
                        <p className="message">Участников 120, в сети 20</p>
                        {/*<i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>*/}
                    </div>
                    <div className="messages-chat">
                        <div className="last_active_cont">
                            <p className="last_active">Сегодня</p>
                            <p style={{width: "100%"}} className="last_active">Непрочитанные сообщения</p>
                        </div>
                        <div className="message">
                            <label style={{marginLeft: "22px"}} className="name">Карина</label>
                            <div className="message_cont">
                                <p className="text">Привет! Как дела? Какой то текст, текст.</p>
                                <p className="time"> 20:36</p>
                            </div>

                        </div>
                        <div className="message">
                            <label style={{marginLeft: "22px"}} className="name">Азирет</label>
                            <div className="message_cont">
                                <p className="text">Привет! Как дела?</p>
                                <p className="time"> 20:36</p>
                            </div>
                        </div>

                        <div className="message text-only">
                            <div className="response">
                                <div className="message_cont">
                                    <p className="text">Привет! Все хорошо. как твои дела?</p>
                                    <p className="time"> 20:36</p>
                                    <img style={{right: "59px"}} className="sent_message" src={message_unsend} alt="/"/>
                                </div>
                            </div>
                        </div>

                        {/*{textArr.map(text => {*/}
                        {/*    return <div className="message text-only">*/}
                        {/*        <div className="response">*/}
                        {/*            <p className="text"> {text}</p>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*})}*/}
                    </div>
                    <div className="footer-chat">
                        {/*<i className="icon fa fa-smile-o clickable" style="font-size:25pt;" aria-hidden="true"></i>*/}
                        <input  onChange={(e) => setInputValue(e.target.value)} type="grey_text" className="write-message" placeholder="Введите текст...">
                        </input> <img style={{marginRight: "22px"}} src={camera_icon} alt="/"/>
                        {/*<RiSendPlaneFill  onClick={sendMessage} className="icon send fa fa-paper-plane-o clickable"/>*/}
                        {/*<i className="icon send clickable" aria-hidden="true"></i>*/}
                    </div>
                </section>
            </div>
        // </div>
    );
};

export default Chat;

