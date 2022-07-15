import React, {useEffect} from 'react';
import "./Chat.css"
// import { RiSendPlaneFill } from 'react-icons/ri';
import {useState} from "react";

const Chat = () => {

    const [textArr, setTextArr] = useState([])
    const [inputValue, setInputValue] = useState("");
    const [value, setValue] = useState(" ");
    const [reset, setReset] = useState(false);


    const sendMessage = () => {
        setValue(inputValue)
    }

    useEffect(() => {
        setTextArr([...textArr, value])
        console.log(textArr)
        console.log(value)
    }, [value])

    return (
        <div style={{padding: 0}} className="container">
            <div className="row">
                <section className="discussions">
                    <div className="discussion search">
                        <div className="searchbar">
                            {/*<i className="fa fa-search" aria-hidden="true"></i>*/}
                            <input type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                    <div className="discussion message-active">
                        <div className="photo"
                             style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-A8B4iDT1513rUrbc1EnNik85QBy2wRoAig&usqp=CAU)"}}>
                            <div className="online"></div>
                        </div>
                        <div className="desc-contact">
                            <p className="name">Adyl Samatov</p>
                            <p className="message">9 pm at the bar if possible 😳</p>
                        </div>
                        <div className="timer">12 sec</div>
                    </div>

                    <div className="discussion">
                        <div className="photo"
                             style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}>
                        </div>
                        <div className="desc-contact">
                            <p className="name">Sezim Zhanylova</p>
                            <p className="message">I've sent you the annual report</p>
                        </div>
                        <div className="timer">42 min</div>
                    </div>

                </section>
                <section className="chat">
                    <div className="header-chat">
                        {/*<i className="icon fa fa-user-o" aria-hidden="true"></i>*/}
                        <p className="name">Adyl Samatov</p>
                        {/*<i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>*/}
                    </div>
                    <div className="messages-chat">
                        <div className="message">
                            <div className="photo" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-A8B4iDT1513rUrbc1EnNik85QBy2wRoAig&usqp=CAU)"}}>
                                <div className="online"></div>
                            </div>
                            <p className="text"> Hi, how are you ? </p>
                        </div>
                        <div className="message text-only">
                            <p className="text"> What are you doing tonight ? Want to go take a drink ?</p>
                        </div>
                        <p className="time"> 14h58</p>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text"> Hey Megan ! It's been a while 😃</p>
                            </div>
                        </div>
                        <div className="message text-only">
                            <div className="response">
                                <p className="text"> When can we meet ?</p>
                            </div>
                        </div>
                        <p className="response-time time"> 15h04</p>
                        <div className="message">
                            <div className="photo" style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-A8B4iDT1513rUrbc1EnNik85QBy2wRoAig&usqp=CAU)"}}>
                                <div className="online"></div>
                            </div>
                            <p className="text"> 9 pm at the bar if possible 😳</p>
                        </div>
                        <p className="time"> 15h09</p>
                        {textArr.map(text => {
                            return <div className="message text-only">
                                <div className="response">
                                    <p className="text"> {text}</p>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="footer-chat">
                        {/*<i className="icon fa fa-smile-o clickable" style="font-size:25pt;" aria-hidden="true"></i>*/}
                        <input  onChange={(e) => setInputValue(e.target.value)} type="text" className="write-message" placeholder="Type your message here"></input>
                        {/*<RiSendPlaneFill  onClick={sendMessage} className="icon send fa fa-paper-plane-o clickable"/>*/}
                        {/*<i className="icon send clickable" aria-hidden="true"></i>*/}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Chat;

