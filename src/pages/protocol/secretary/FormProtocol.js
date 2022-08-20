import React, {useEffect, useState} from 'react';
import ownStyles2 from "../Protocol.module.scss";
import ownStyles from "../../output/Output.module.scss";
import Button from "../../../components/button/Button";
import {useNavigate, useParams} from "react-router";
import BackButton from "../../../components/arrowButton/BackButton";
import {useDispatch, useSelector} from "react-redux";
import {formProtocol, getProtocol} from "../../../redux/slices/protocolSlice";
import {useFormik} from "formik";

const FormProtocol = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const dispatch = useDispatch();
    const protocols_list = useSelector(state => state.protocol.protocols)
    const protocols = protocols_list.filter(pr => pr.event.id == id)
    const error = useSelector(state => state.protocol.error)
    console.log("protocols: ", protocols)

    useEffect(() => {
        dispatch(getProtocol())
    }, [])

    const tempFunc = () => {
        navigate("/main/protocol/all_events/approve_formed_protocol");
    }


    const [formArray, setFormArray] = useState([]);
    const formik = useFormik({
        initialValues: {
            id: null,
            areas_quantity: 1,
            top_places_percent: ""
        },
        onChange: (place) => {
            console.log("ki: ", place)
        },
        onSubmit: data => {
            console.log("fffffffffffff: ", data)
            formArray.shift()
            console.log("llllll: ", formArray)
            const par = {data: formArray, navlink : () => navigate(`/main/protocol/all_events/approve_formed_protocol/${id}`)}
            dispatch(formProtocol(par))
        }
    })

    const [formId, setFormId] = useState();
    useEffect(() => {
        const obj = {
            id: formId,
            areas_quantity: formik.values.areas_quantity,
            top_places_percent: formik.values.top_places_percent
        };
        setFormArray([...formArray, obj]);
    }, [formik.values.top_places_percent]);

    // const obj = {
    //     "id": null,
    //     areas_quantity: formik.values.areas_quantity,
    //     top_places_percent: formik.values.top_places_percent
    // };
    // console.log("iddd: ", obj)
    // const AddObjectToArray = (id) => {
    //     obj["id"] = id
    //     // formik.setFieldValue("id", protocol.id);
    //
    //     // setFormArray([...formArray, obj]);
    // }
    console.log("array: ", formArray)

    return (
        <form onSubmit={formik.handleSubmit} style={{textAlign: "center"}} className={ownStyles2.wrapper2}>
            <BackButton to="/main/protocol/all_events" />
            {
                !error && <div className={ownStyles2.header2}>
                    <p style={{ margin: "0px 0 30px", fontSize: "26px", fontWeight:"bold" }}>ПРОТОКОЛ</p>
                    <p style={{ margin: "0px 0 20px", fontSize: "20px", fontWeight:"bold" }}>
                        Чемпионат Кыргызской Респубики по традиционному ушу
                    </p>
                    <p style={{ margin: "0px 0 48px",}}>
                        29.06.2022г. - 30.06.2022г.
                    </p>
                    <p style={{ margin: "0px 0 20px",}}>
                        День первый
                    </p>
                    <p style={{ margin: "0px 0 60px",fontWeight:"bold" }}>29 июня</p>
                </div>
            }

            {
                error ? <>
                    <div style={{fontWeight: "bold"}}>ПРИМЕЧАНИЕ</div><br/>
                    <p>{error}</p>
                </> : <>
                    <div className={ownStyles.input_cont} style={{ fontWeight: "500", marginTop: 10 }}>
                        <input disabled className={ownStyles.title1} value="№"/>
                        <input disabled className={ownStyles.title2} value="Подгруппа/возраст"/>
                        <input disabled className={ownStyles.title} value="Кол-во человек"/>
                        <input disabled className={ownStyles.title} value="Кол-во мест на арене" />
                        <input disabled className={ownStyles.title} value="Процент призовых мест" />
                    </div>
                    {
                        protocols?.map((protocol, index) => {

                            // написать ончейнж для последних инпутов с проверкой на их наличие и передать айдишки
                            return <div onClick={() => setFormId(protocol.id)} className={ownStyles.input_cont}>
                                <input className={ownStyles.input1} type="text" value={index + 1} />
                                <input className={ownStyles.input2} style={{width: 300}} type="text" value={protocol.age_group}/>
                                <input className={ownStyles.input} type="text" value={protocol.athlete_count} />
                                <input name="areas_quantity" onChange={(e) => formik.handleChange(e)} className={ownStyles.input} type="text" placeholder="Введите число"/>
                                <input name="top_places_percent" onChange={formik.handleChange} className={ownStyles.last_input} type="text" placeholder="Введите число"/>
                            </div>
                        })
                    }
                    <Button type="submit" width="600px" text="ДАЛЕЕ" />
                </>
            }
        </form>
    );
};

export default FormProtocol;
