import axios from "axios";
import { getCookie } from "../utils/cookieFunction/cookieFunction";

const token = getCookie("access")
console.log(token)

const tokenLocal = localStorage.getItem("token")
const fetchAPI = axios.create({
    baseURL: "http://www.wushu-federation.com:8000/",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenLocal}`,
    },
});

const notToken = axios.create({
    baseURL: "http://www.wushu-federation.com:8000/",
    headers: {
        "Content-type": "application/json",
    },
});

export const requests = {
    authApi: (data) => notToken.post("login/", data),
    resetPasswordApi: (data) => fetchAPI.post("password-reset/", data),
    feedbackApi: (data) => fetchAPI.post("feedback/", data),
    newPasswordApi: (data) => fetchAPI.post("password-reset/confirm/", data),
    getFeedback: () => fetchAPI.get("feedback/"),
    getFeedbackById: (id) => fetchAPI.get(`feedback/${id}`),

    // Events
    getEvents:() => notToken.get('event/'),
    getEvent:(id) => notToken.get(`event/${id}`),
    postEvents:(data) => notToken.post('event/', data),
    editEvents:(data) => notToken.patch(`event/${data.id}/`, data.values),
    deleteEvents:(id) => notToken.delete(`event/${id}/`),

    //User
    getJudgeUser:() => notToken.get('user/?is_judge=true'),
    getAllUser:() => notToken.get('user/?is_active=true'),
    getNotRegisterUser:() => notToken.get('user/?is_active=false'),
    getUserById:(id) => notToken.get(`user/${id}`),
    getSecretaryUser:() => notToken.get('user/?is_assistant=true'),
    getUserForProfile:(id) => notToken.get(`user/${id}`),
    deleteUser:(id) => notToken.delete(`user/${id}`),
    editUser:(data) => notToken.patch(`user/${data.id}/`, data.values),
    postUserClub:(data) => notToken.post(`user_club/`, data),
    getTrainerUser: () => notToken.get("user/", { params: { is_assistant: false, is_judge : false, role: "TRAINER" } }),

    // change password
    changePasswordApi:(data) => fetchAPI.put(`change-password/${data.id}/`, {password: data.password}),


    // documentation
    getDocs: () => notToken.get("documents/document/"),
    getDoc: (id) => notToken.get(`documents/document/${id}/`),
    postDoc: (data) => notToken.post("documents/document/", data.data),
    editDoc: (data) => notToken.patch(`documents/document/${data.id}/`, data.fData),
    deleteDoc: (id) => notToken.delete(`documents/document/${id}/`),

    // news
    getNewsApi: () => notToken.get("createnew/"),
    getNewApi: (id) => notToken.get(`deletenew/${id}`),
    createNewsApi: (data) => notToken.post("createnew/", data.data),
    editNewsApi: (data) => notToken.patch(`deletenew/${data.id}`, data.data),
    deleteNewsApi: (id) => notToken.delete(`deletenew/${id}`),

    //Applications
    getApplication: () => fetchAPI.get("application/"),
    getApplicationById: (id) => fetchAPI.get(`application/${id}/`),
    deleteApplicationById: (id) => fetchAPI.delete(`application/${id}/`),
    postApplication: (data) => fetchAPI.post(`application/`, data),
    editApplicationById: (data) => fetchAPI.patch(`application/${data.applicationId}/`, data),
    getCurrentApplication:(data)=>fetchAPI.get(`application/?trainer=${data.id}&new_application=2022-09-12`),
    getHistoryApplication:(data)=>fetchAPI.get(`application/?trainer=${data.id}&old_application=2022-09-12`),
    postApplicationTemplate: (data) => notToken.post(`template_application/`, data),
    editApplicationTemplate: (data) => fetchAPI.patch(`template_application/${data.id}`, data),
    getApplicationTemplate:()=>notToken.get("template_application/"),
    getApplicationTemplateById:(id)=>notToken.get(`template_application/${id}`),

    //Discipline
    getDiscipline: () => notToken.get(`discipline/`),

    //Athletes
    getAthletes: () => notToken.get(`athletes/`),

    // club
    getClubsApi: () => notToken.get("club/"),
    getClubApi: (id) => notToken.get(`club/${id}`),
    postClubApi: (data) => notToken.post("club/", data.data),
    editClubApi: (data) => notToken.patch(`club/${data.id}/`, data.data),
    deleteClubApi: (id) => notToken.delete(`club/${id}/`),

    // sportsmen
    getSportsmenApi: () => notToken.get("athletes/"),
    getSportsmanApi: (id) => notToken.get(`athletes/${id}`),
    postSportsmenApi: (data) => fetchAPI.post("athletes/", data.data),
    editSportsmenApi: (data) => fetchAPI.patch(`athletes/${data.id}/`, data.data),
    deleteSportsmenApi: (id) => fetchAPI.delete(`athletes/${id}/`),

    // Physical Indicator
    // getSportsmanApi: (id) => fetchAPI.get(`athletes/${id}`),
    postPhysicalIndicatorApi: (data) => fetchAPI.post("physical_indicators/", data),
    editPhysicalIndicatorApi: ({id, data}) => fetchAPI.patch(`physical_indicators/${id}/`, data),
    // deleteSportsmenApi: (id) => fetchAPI.delete(`athletes/${id}/`),

    // protocol
    getProtocolApi: () => notToken.get("subgroup/"),
    getProtocolByIdApi: (id) => notToken.get(`subgroup/${id}`),
    postProtocolApi: (id) => notToken.post("subgroup/", {event: id}),
    // formProtocolApi: (data) => notToken.patch(`subgroup/${data.id}/`, {areas_quantity: +data.data.areas_quantity, top_places_percent: data.data.top_places_percent}),
    formProtocolApi: (data) => notToken.patch(`subroup_bulk_update/`, data),
    confirmProtocolApi: ({data}) => notToken.patch(`subroup_bulk_update/`, data),
    reasonOfRejectionProtocolApi: ({reason}) => notToken.patch(`subroup_bulk_update/`, reason),

    // judge
    getJudgeApi: () => notToken.get("judge_group/"),
    // getProtocolApi: (id) => fetchAPI.get(`judge_group/${id}`),
    postJudgeApi: (data) => fetchAPI.post("judge_group/", data.data),
    formJudgeApi: (data) => fetchAPI.patch(`judge_group/${data.id}/`, {areas_quantity: +data.data.areas_quantity, top_places_percent: data.data.top_places_percent}),
    confirmJudgeApi: ({id, par}) => fetchAPI.patch(`judge_group/${id}/`, {is_confirmed : par}),
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}