import React, {useState, useEffect} from 'react';
import ownStyles from "../../output/Output.module.scss";
import {Pagination} from "../../../components/pagination/Pagination";
import ownStyles2 from "../Protocol.module.scss"
import inputStyles from "../../../components/input/Input.module.scss";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import OptionButton from "../../../components/optionButton/OptionButton";
import Options from "../../../components/options/Options";
import DeleteModal from "../../../components/modals/DeleteModal";
import SuccessModal from "../../../components/modals/SuccessModal";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getJudge, getProtocol, getProtocolById} from "../../../redux/slices/protocolSlice";

const ProtocolDetails = () => {

    const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}
    const [editButton, setEditButton] = useState(false);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const {id} = useParams()
    const dispatch = useDispatch();
    const protocols_list = useSelector(state => state.protocol.protocols)
    const protocolById = useSelector(state => state.protocol.protocol)
    const judges_list = useSelector(state => state.protocol.judges)
    const protocols = protocols_list.filter(p => p.event.id == id)
    const judges = judges_list.filter(t => protocols.find(r => r.id === t.subgroup))
    // const judges = judges_list(judge => judge.id)
    console.log("created_protocolss: ", protocols)
    console.log("protocol_by_id: ", protocolById)
    console.log("judges: ", judges)

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

    console.log("count: ", arenaCount)

    useEffect(() => {
        dispatch(getProtocol())
        dispatch(getJudge())
    }, [])

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
                <BackButton to="/main/protocol/all_protocols"/>
                <div className={ownStyles2.header2}>
                    <p style={{ margin: "0 0 70px", fontSize: "26px", fontWeight:"bold" }}>Информация о протоколе</p>
                    <p style={{ margin: "0 0 20px", fontSize: "20px", fontWeight:"bold" }}>
                        Чемпионат Кыргызской Респубики по традиционному ушу
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

                {/*<Pagination next="3" previous= "4" position="relative" left="0"/>*/}
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

                { judges && <div className={ownStyles2.referee_cont}>
                    <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                    {openOption && <Options closeOption={handleOpenOption} setEditButton={setEditButton}
                                            handleOpenDeleteModal={handleOpenDeleteModal}/>}
                    <p style={{margin: "0 0 30px", fontSize: "26px", fontWeight: "bold", paddingTop: "30px"}}>Судейская
                        бригада</p>
                    <div className={ownStyles.input_cont} style={{fontWeight: "500", marginTop: 10}}>
                        <input disabled className={ownStyles.title1} value="№"/>
                        <input style={{flex: 5}} disabled className={ownStyles.title2} value="Время"/>
                        <input style={{flex: 7}} disabled className={ownStyles.title} value="Подгруппа"/>
                        <input style={{flex: 10}} disabled className={ownStyles.title} value="Судейская бригада"/>
                    </div>
                    {
                        judges.map((judge, index) => {
                            return <div className={ownStyles.input_cont}>
                                <input className={ownStyles.input11} type="text" value={index + 1}/>
                                <input style={{flex: 5}} className={ownStyles.input2} type="text"
                                       value={`${judge.start_time}-${judge.end_time} `}/>
                                <input style={{flex: 7}} className={ownStyles.input} type="text" value={judge.subgroup}/>
                                <input style={{flex: 10}} className={ownStyles.last_input} type="text"
                                       value={judge.judge_subgroup}/>
                            </div>
                        })
                    }
                    {
                        editButton &&
                        <Button onClick={handleOpenSuccessModal} margin="70px 0 0" width="600px" text="СОХРАНИТЬ"/>
                    }
                </div>}

            </div>
            {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно отредактировали данные о судейской бригаде!"/>}
            { openDeleteModal && <DeleteModal text="Вы уверены, что хотите удалить данные о судейской бригаде?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>
    );
};

export default ProtocolDetails;
