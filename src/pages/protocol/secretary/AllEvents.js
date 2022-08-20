import React, {useEffect} from 'react';
import s from "../../users/registered/Registered.module.scss";
import Input from "../../../components/input/Input";
import {search_icon} from "../../../images";
import {Link} from "react-router-dom";
import {Pagination} from "../../../components/pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getEvent} from "../../../redux/slices/eventSlice";
import {createProtocol, getProtocol} from "../../../redux/slices/protocolSlice";

const AllEvents = () => {

    const dispatch = useDispatch();
    const events_list = useSelector(state => state.event.event)
    const events = events_list.filter(e => e.is_protocoled !== true)
    console.log("events: ", events)

    useEffect(() => {
        dispatch(getEvent())
        window.scrollTo(0, 0);
    }, [])

    const createNewProtocol = (id) => {
        dispatch(createProtocol(id))
    }

    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                    <img className={s.search_icon} src={search_icon} alt="wrong"/>
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p style={{flex: 1, textAlign: "center"}}>№</p>
                    <p style={{flex: 12}}>Название</p>
                    <p style={{flex: 4}}>Дата</p>
                    <p style={{flex: 4}}>Спортсмены</p>
                    <p style={{flex: 4}}>Судьи</p>
                </div>
                {
                    events.map((event, index) => {
                        return <Link key={event.id} to={`/main/protocol/all_events/form_protocol/${event.id}`}>
                                    <div onClick={() => createNewProtocol(event.id)} className={s.title}>
                                        <p style={{flex: 1, textAlign: "center"}}>{index + 1}</p>
                                        <p style={{flex: 12}}>{event.name}</p>
                                        <p style={{flex: 4}}>{event.start_datetime.substring(0, 10)}</p>
                                        <p style={{flex: 4}}>{event.id}</p>
                                        <p style={{flex: 4}}>{event.lead_judge.name} {event.lead_judge.surname}</p>
                                    </div>
                                </Link>
                    })
                }
                <Pagination/>
            </div>
        </div>
    );
};

export default AllEvents;
