import React, {useState, useEffect} from 'react';
import ownStyles from "../../output/Output.module.scss";
import {Pagination} from "../../../components/pagination/Pagination";
import ownStyles2 from "../Protocol.module.scss"
import inputStyles from "../../../components/input/Input.module.scss";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import SuccessModal from "../../../components/modals/SuccessModal";
import ButtonForActiveChanges from "../../../components/buttonForActiveChanges/ButtonForActiveChanges";
import Input from "../../../components/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {
    confirmProtocol,
    createJudge,
    getProtocol, getProtocolById,
    reasonOfRejectionProtocol
} from "../../../redux/slices/protocolSlice";
import {useFormik} from "formik";
import {useNavigate, useParams} from "react-router";
import s from "../../news/editNews/EditNews.module.scss";
import {getJudgeUser} from "../../../redux/slices/userSlice";
import {getEventById} from "../../../redux/slices/eventSlice";

const NewProtocolDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const protocols_list = useSelector(state => state.protocol.protocols)
    const judges = useSelector(state => state.user.userJudge)
    const protocols = protocols_list.filter(p => p.event.id == id)
    const event = useSelector(state => state.event.event_id)
    console.log("new_protocols: ", protocols)
    console.log("judges: ", judges)

    const confirmNewProtocol = (navlink) => {
        const data = {navlink, data: confirm_data}
        dispatch(confirmProtocol(data))
    }

    const unconfirmNewProtocol = (navlink) => {
        const data = {navlink, data: unconfirm_data}
        dispatch(confirmProtocol(data))
    }

    const confirm_data = [];
    const unconfirm_data = [];
    const reason_data = [];

    protocols.map(p => {
        confirm_data.push({
            id: p.id,
            is_confirmed: true
        })
    })

    protocols.map(p => {
        unconfirm_data.push({
            id: p.id,
            is_confirmed: false
        })
    })

    const [reason, setReason] = useState("");

    protocols.map(p => {
        reason_data.push({
            id: p.id,
            rejection_reason: reason
        })
    })

    const [acceptButton, setAcceptButton] = useState("choice");


    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const [judge_form, setJudgeForm] = useState([1])
    const addInputToJudgeForm = () => {
        setJudgeForm([...judge_form, judge_form.push(judge_form.length + 1)])
    }

    useEffect(() => {
        dispatch(getJudgeUser())
        dispatch(getEventById(id))
        dispatch(getEventById(id))
    }, [])

    useEffect(() => {
        console.log("judge_form: ", judge_form)
        dispatch(getProtocol())
    }, [judge_form]);

    const [judge_id, setJudgeId] = useState([]);
    const addJudgeId = (id) => {
        // setJudgeId([...judge_id, {}])
        formik.setFieldValue("judge_subgroup", [{judge: id}])
    }
    console.log("ppppppppp: ", judge_id)

    const formik = useFormik({
        initialValues: {
            judge_subgroup: judge_id,
            start_time: "20:20",
            end_time: "20:30",
            subgroup: 31
        },
        onSubmit: data => {
            console.log("judgggggg: ", data)
            if(acceptButton === "no") {
                const par = {reason: reason_data, navlink: () => navigate("/main/protocol/new_protocols/")}
                dispatch(reasonOfRejectionProtocol(par))
            } else {
                console.log("has to be dispatched a function for creating judges")
                const par = {data: data, navlink: () => navigate("/main/protocol/new_protocols/"), handleOpenSuccessModal}
                dispatch(createJudge(par))
            }

        }
    })

    const protocolById = useSelector(state => state.protocol.protocol)

    const areas = {
        1: "1fr",
        2: "1fr 1fr",
        3: "1fr 1fr 1fr",
        4: "1fr 1fr",
        5: "1fr 1fr 1fr",
        6: "1fr 1fr 1fr",
    }

    const [subNumber, setSubNumber] = useState(0);
    const [countStyle, setCountStyle] = useState(1);

    let arenaCount = [];
    for (let i = 0; i < protocols.length; i++) {
        arenaCount.push(i)
    }

    let arena = [];
    for (let i = 0; i < protocolById.areas_quantity; i++) {
        arena.push(i)
    }

    const firstArenaId = protocols[0]

    useEffect(() => {
        dispatch(getProtocolById(firstArenaId?.id))
    }, [protocols_list])

    const getArena = (id, index, count) => {
        dispatch(getProtocolById(id))
        setSubNumber(index)
        setCountStyle(count)
    }

    return (
        <>
        <div className={ownStyles2.wrapper2}>
            <BackButton to="/main/protocol/new_protocols"/>
            <div className={ownStyles2.header2}>
                <p style={{ margin: "0 0 70px", fontSize: "26px", fontWeight:"bold" }}>Информация о протоколе</p>
                <p style={{ margin: "0 0 20px", fontSize: "20px", fontWeight:"bold" }}>
                    {event.name}
                </p>
                <p style={{ margin: "0 0 50px",}}>
                    29.06.2022г. - 30.06.2022г.
                </p>
                <p style={{ margin: "0 0 20px",}}>
                    День первый
                </p>
                <p style={{ margin: "0 0 58px",fontWeight:"bold" }}>29 июня</p>
            </div>

            <div className={ownStyles2.description2}>
                <p style={{ marginBottom: "20px",fontWeight:"bold" }}>
                    Открытие первых видов соревнований
                </p>
                <p style={{ marginBottom: "30px" }}>
                    Время: 10:15
                </p>
            </div>

            {
                protocols?.map((protocol, index) => {

                    return <div  style={{marginBottom: "100px"}}>
                        <div className={ownStyles2.description2}>
                            <p style={{ marginBottom: "20px", fontWeight:"bold" }}>
                                Подгруппа {index + 1}.
                                <span style={{fontWeight:"normal" }}>
                                {protocol.sex === 1 ? "Женский" : "Мужской"}, {protocol.age_group}
                              </span>
                            </p>
                            <p style={{ marginBottom: "40px" }}>
                                Время: 10:30 {protocol.start_datetime}
                            </p>
                        </div>

                        <div className={ownStyles.input_cont} style={{ fontWeight: "500", marginTop: 10 }}>
                            <input disabled className={ownStyles.title1} value="№"/>
                            <input style={{flex: 8}} disabled className={ownStyles.title2} value="Спортсмен"/>
                            <input style={{flex: 5.5}} disabled className={ownStyles.title} value="Школа/клуб"/>
                            <input style={{flex: 10}} disabled className={ownStyles.title} value="Примечание" />
                        </div>
                        {
                            protocol.subgroup_application.map((application, index) => {
                                const sportsman = application.application.athlete
                                return <div className={ownStyles.input_cont}>
                                    <input style={{fontWeight: "bold"}} className={ownStyles.input11} type="text" value={index + 1} />
                                    <input style={{flex: 8}} className={ownStyles.input2} type="text" value={`${sportsman.name} ${sportsman.surname}`}/>
                                    <input style={{flex: 5.5}} className={ownStyles.input} type="text" value={sportsman.club.name} />
                                    <input style={{flex: 10}} className={ownStyles.last_input} type="text" value="Выступление с шестом"/>
                                </div>
                            })
                        }
                    </div>
                })
            }

            <p style={{ marginBottom: "30px", marginTop: "100px", fontWeight:"bold", textAlign: "center" }}>
                Выберите номер подгруппы
            </p>
            <div className={ownStyles2.count_cont} >
                <div className={ownStyles2.prev}>&#8249;</div>
                {
                    protocols?.map((count, index) => {
                        return <div onClick={() => getArena(count.id, index, index+1)} className={countStyle === index+1 ? ownStyles2.active_count : ownStyles2.count}>{index + 1}</div>
                    })
                }
                <div className={ownStyles2.prev}>&#8250;</div>
            </div>

                <div className={ownStyles2.description2}>
                    <p style={{ marginBottom: "20px", marginTop: "70px", fontWeight:"bold" }}>
                        Подгруппа {subNumber + 1}.
                        <span style={{fontWeight:"normal" }}>
                                    {protocolById.sex === 1 ? "Женский" : "Мужской"}, {protocolById.age_group}
                                  </span>
                    </p>
                    <p style={{ marginBottom: "20px" }}>
                        Школа/клуб: Золотой дракон
                    </p>

                    <p style={{ marginBottom: "30px" }}>
                        Время: 10:30
                    </p>
                </div>

                <div className={ownStyles2.arena_cont}>
                    <label className={inputStyles.label}>Арена</label>
                    <div style={{width: "100%", height: "200px", position: "relative", textAlign: "center"}} className={inputStyles.gradient}>
                        <div style={{gridTemplateColumns: areas[protocolById.areas_quantity] }} className={`${inputStyles.input} ${ownStyles2.arena}`}>
                            {
                                arena.map(a => {
                                    return <div key={a} className={ownStyles2.arena_place}>Участник {a+1}</div>
                                })
                            }
                        </div>
                    </div>

                </div>

                {
                    (() =>  {switch(acceptButton){
                    case "choice":
                        return <div className={ownStyles2.header2}>
                                    <p style={{margin: "70px 0 30px", fontWeight: "bold"}}>
                                    Утвердить протокол и арены?
                                    </p>
                                    <div className={ownStyles2.button_cont}>
                                    <ButtonForActiveChanges onClick={() => confirmNewProtocol(() => setAcceptButton("yes"))} classname="yes_button" margin="0" width="210px" text="ДА" />
                                    <ButtonForActiveChanges onClick={() => unconfirmNewProtocol(() => setAcceptButton("no"))} classname="no_button" margin="0" width="210px" text="НЕТ"/>
                                    </div>
                                </div>
                    case "no":
                        return  <form onSubmit={formik.handleSubmit} className={ownStyles2.header2}>
                                    <p style={{margin: "70px 0 30px", fontWeight: "bold"}}>
                                    Протокол и арены отклонены, опишите причину.
                                    </p>
                                    <Input onChange={(e) => setReason(e.target.value)} name="rejection_reason" margin="auto" width="600px" placeholder="Введите текст"/>
                                    <Button type="submit" margin="70px 0 0" width="600px" text="ОТПРАВИТЬ"/>
                                </form>
                    case "yes":
                        return <form onSubmit={formik.handleSubmit} style={{textAlign: "center"}}>
                                    <p style={{margin: "100px 0 30px", fontSize: "26px", fontWeight:"bold"}}>Судейская бригада</p>
                                    <div className={ownStyles.input_cont} style={{fontWeight: "500", marginTop: 10}}>

                                        <input disabled className={ownStyles.title1} value="№"/>
                                        <input style={{flex: 5}} disabled className={ownStyles.title2} value="Начало"/>
                                        <input style={{flex: 5}} disabled className={ownStyles.title2} value="Конец"/>
                                        <input style={{flex: 7}} disabled className={ownStyles.title} value="Подгруппа"/>
                                        <input style={{flex: 10}} disabled className={ownStyles.title} value="Судейская бригада" />
                                    </div>
                            {
                                judge_form.map((inp, index) => {
                                    return <div className={ownStyles.input_cont}>
                                                <input style={{color: "black"}} className={ownStyles.input11} type="text" value={index + 1}/>
                                                <input onChange={formik.handleChange} name="start_time" style={{flex: 5}} className={ownStyles.input2} type="time" placeholder="00:00"/>
                                                <input onChange={formik.handleChange} name="end_time" style={{flex: 5}} className={ownStyles.input2} type="time" placeholder="00:00"/>
                                                <select
                                                    style={{flex: 9}}
                                                    onChange={(e) => formik.handleChange(e)}
                                                    className={ownStyles.input2}
                                                    // value="подгруппа"
                                                    name="subgroup"
                                                >
                                                    <option className={s.option}>

                                                    </option>
                                                    {
                                                        protocols.map(protocol => {
                                                            return <option className={s.option} value={protocol.id}>
                                                                {protocol.sex === 1 ? "Женский" : "Мужской"}, 12-25 лет
                                                                    </option>
                                                        })
                                                    }
                                                </select>
                                                <select
                                                    style={{flex: 12}}
                                                    onChange={(e) => addJudgeId(e.target.value)}
                                                    className={ownStyles.last_input}
                                                >
                                                    <option className={s.option}>

                                                    </option>
                                                    {
                                                        judges.map(judge => {
                                                            return <option className={s.option} value={judge.id}>
                                                                {judge.name} {judge.surname}
                                                            </option>
                                                        })
                                                    }
                                                </select>
                                            </div>
                                })
                            }
                                    <ButtonForActiveChanges type="button" onClick={addInputToJudgeForm} margin="70px 0 70px" width="600px" classname="yes_button" text="ДОБАВИТЬ СТРОКУ" />
                                    <ButtonForActiveChanges type="submit" margin="0px 0 0px" width="600px" classname="yes_button" text="СОХРАНИТЬ" />
                                </form>
                }})()
                }

        </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно добавили судейскую бригаду!"/>}
        </>
    );
};

export default NewProtocolDetails;
