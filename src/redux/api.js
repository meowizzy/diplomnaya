import axios from "axios";
import { getCookie } from "../utils/cookieFunction/cookieFunction";

const token = getCookie("token")
// console.log(token)
const fetchAPI = axios.create({
    baseURL: "https://whushu.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
});

const fetchHerokuAPI = axios.create({
    baseURL: "https://whushu.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
});

const notToken = axios.create({
    baseURL: "https://whushu.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
    },
});

export const requests = {
    authApi: (data) => fetchHerokuAPI.post("login/", data),
    resetPasswordApi: (data) => fetchHerokuAPI.post("password-reset/", data),
    feedbackApi: (data) => fetchHerokuAPI.post("feedback/", data),
    newPasswordApi: (data) => fetchHerokuAPI.post("password-reset/confirm/", data),
    getFeedback: () => fetchHerokuAPI.get("feedback/"),
    getFeedbackById: (id) => fetchHerokuAPI.get(`feedback/${id}`),

    // Events
    getEvents:() => fetchHerokuAPI.get('event/'),
    postEvents:(data) => fetchHerokuAPI.post('event/', data),
    editEvents:(data) => fetchHerokuAPI.patch(`event/${data.id}/`, data.values),
    deleteEvents:(id) => fetchHerokuAPI.delete(`event/${id}/`),

    //User
    getJudgeUser:() => fetchAPI.get('user/?is_judge=true'),
    getAllUser:() => fetchAPI.get('user/?is_active=true'),
    getNotRegisterUser:() => fetchAPI.get('user/?is_active=false'),
    getUserById:(id) => fetchAPI.get(`user/${id}`),
    getSecretaryUser:() => fetchAPI.get('user/?is_assistant=true'),
    getUserForProfile:(id) => fetchAPI.get(`user/${id}`),
    deleteUser:(id) => fetchAPI.delete(`user/${id}`),
    editUser:(data) => fetchAPI.put(`user/${data.id}/`, data.values),
    postUserClub:(data) => fetchAPI.post(`user_club/`, data),
    getTrainerUser: () => fetchAPI.get("user/", { params: { is_assistant: false, is_judge : false, role: "TRAINER" } }),


    // documentation
    getDocs: () => fetchHerokuAPI.get("documents/document/"),
    getDoc: (id) => fetchHerokuAPI.get(`documents/document/${id}/`),
    postDoc: (data) => fetchHerokuAPI.post("documents/document/", data.data),
    editDoc: (data) => fetchHerokuAPI.patch(`documents/document/${data.id}/`, data.fData),
    deleteDoc: (id) => fetchHerokuAPI.delete(`documents/document/${id}/`),

    // news
    getNewsApi: () => fetchHerokuAPI.get("createnew/"),
    getNewApi: (id) => fetchHerokuAPI.get(`deletenew/${id}`),
    createNewsApi: (data) => fetchHerokuAPI.post("createnew/", data.data),
    editNewsApi: (data) => fetchHerokuAPI.patch(`deletenew/${data.id}`, data.data),
    deleteNewsApi: (id) => fetchHerokuAPI.delete(`deletenew/${id}`),

    //Applications
    getApplication: () => fetchHerokuAPI.get("application/"),
    getApplicationById: (id) => fetchHerokuAPI.get(`application/${id}/`),
    deleteApplicationById: (id) => fetchHerokuAPI.delete(`application/${id}/`),
    postApplication: (data) => fetchHerokuAPI.post(`application/`, data),
    editApplicationById: (data) => fetchHerokuAPI.patch(`application/${data.applicationId}/`, data),
    getCurrentApplication:(data)=>fetchHerokuAPI.get(`application/?trainer=${data.id}&new_application=2022-09-12`),
    getHistoryApplication:(data)=>fetchHerokuAPI.get(`application/?trainer=${data.id}&old_application=2022-09-12`),
    postApplicationTemplate: (data) => fetchHerokuAPI.post(`template_application/`, data),
    editApplicationTemplate: (data) => fetchHerokuAPI.patch(`template_application/${data.id}`, data),
    getApplicationTemplate:()=>fetchHerokuAPI.get("template_application/"),
    getApplicationTemplateById:(id)=>fetchHerokuAPI.get(`template_application/${id}`),

    //Discipline
    getDiscipline: () => fetchHerokuAPI.get(`discipline/`),

    //Athletes
    getAthletes: () => fetchHerokuAPI.get(`athletes/`),


    // club
    getClubsApi: () => fetchHerokuAPI.get("club/"),
    getClubApi: (id) => fetchHerokuAPI.get(`club/${id}`),
    postClubApi: (data) => fetchHerokuAPI.post("club/", data.data),
    editClubApi: (data) => fetchHerokuAPI.patch(`club/${data.id}/`, data.data),
    deleteClubApi: (id) => fetchHerokuAPI.delete(`club/${id}/`),

    // sportsmen
    getSportsmenApi: () => fetchHerokuAPI.get("athletes/"),
    getSportsmanApi: (id) => fetchHerokuAPI.get(`athletes/${id}`),
    postSportsmenApi: (data) => fetchHerokuAPI.post("athletes/", data.data),
    editSportsmenApi: (data) => fetchHerokuAPI.patch(`athletes/${data.id}/`, data.data),
    deleteSportsmenApi: (id) => fetchHerokuAPI.delete(`athletes/${id}/`),

    // Physical Indicator
    // getSportsmanApi: (id) => fetchAPI.get(`athletes/${id}`),
    postPhysicalIndicatorApi: (data) => fetchHerokuAPI.post("physical_indicators/", data),
    editPhysicalIndicatorApi: ({id, data}) => fetchHerokuAPI.patch(`physical_indicators/${id}/`, data),
    // deleteSportsmenApi: (id) => fetchAPI.delete(`athletes/${id}/`),

    // protocol
    getProtocolApi: () => fetchHerokuAPI.get("subgroup/"),
    getProtocolByIdApi: (id) => fetchHerokuAPI.get(`subgroup/${id}`),
    postProtocolApi: (id) => fetchHerokuAPI.post("subgroup/", {event: id}),
    // formProtocolApi: (data) => fetchAPI.patch(`subgroup/${data.id}/`, {areas_quantity: +data.data.areas_quantity, top_places_percent: data.data.top_places_percent}),
    formProtocolApi: (data) => fetchHerokuAPI.patch(`subroup_bulk_update/`, data),
    confirmProtocolApi: ({data}) => fetchHerokuAPI.patch(`subroup_bulk_update/`, data),
    reasonOfRejectionProtocolApi: ({reason}) => fetchHerokuAPI.patch(`subroup_bulk_update/`, reason),

    // judge
    getJudgeApi: () => fetchHerokuAPI.get("judge_group/"),
    // getProtocolApi: (id) => fetchAPI.get(`judge_group/${id}`),
    postJudgeApi: (data) => fetchHerokuAPI.post("judge_group/", data),
    formJudgeApi: (data) => fetchHerokuAPI.patch(`judge_group/${data.id}/`, {areas_quantity: +data.data.areas_quantity, top_places_percent: data.data.top_places_percent}),
    confirmJudgeApi: ({id, par}) => fetchHerokuAPI.patch(`judge_group/${id}/`, {is_confirmed : par}),
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}