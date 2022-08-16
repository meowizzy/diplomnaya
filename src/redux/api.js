import axios from "axios";

const fetchAPI = axios.create({
    baseURL: "http://142.93.181.60/",
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
    baseURL: "http://142.93.181.60/",
    headers: {
        "Content-type": "application/json",
    },
});

export const requests = {
    authApi: (data) => fetchHerokuAPI.post("login/", data),
    resetPasswordApi: (data) => fetchAPI.post("password-reset/", data),
    feedbackApi: (data) => fetchAPI.post("feedback/", data),
    newPasswordApi: (data) => fetchAPI.post("password-reset/confirm/", data),

    // Events
    getEvents:() => fetchHerokuAPI.get('event/'),
    postEvents:(data) => fetchAPI.post('event/', data),
    editEvents:(data) => fetchAPI.patch(`event/${data.id}/`, data.values),
    deleteEvents:(id) => fetchAPI.delete(`event/${id}/`),

    //User
    getJudgeUser:() => fetchAPI.get('user/?is_judge=true'),
    getSecretaryUser:() => fetchAPI.get('user/?is_assistant=true'),
    getUserForProfile:(id) => fetchAPI.get(`user/${id}`),
    editUser:(data) => fetchAPI.patch(`user/${data.id}/`, data.values),

    getTrainerUser: () => fetchAPI.get("user/", { params: { is_assistant: false, is_judge : false, role: "TRAINER" } }),

    // documentation
    getDocs: () => fetchAPI.get("documents/document/"),
    getDoc: (id) => fetchAPI.get(`documents/document/${id}/`),
    postDoc: (data) => fetchAPI.post("documents/document/", data.data),
    editDoc: (data) => fetchAPI.patch(`documents/document/${data.id}/`, data.fData),
    deleteDoc: (id) => fetchAPI.delete(`documents/document/${id}/`),

    // news
    getNewsApi: () => fetchAPI.get("createnew/"),
    getNewApi: (id) => fetchAPI.get(`deletenew/${id}`),
    createNewsApi: (data) => fetchAPI.post("createnew/", data.data),
    editNewsApi: (data) => fetchAPI.patch(`deletenew/${data.id}`, data.data),
    deleteNewsApi: (id) => fetchAPI.delete(`deletenew/${id}`),

    //Applications
    getApplication: () => fetchAPI.get("application/"),
    getApplicationById: (id) => fetchAPI.get(`application/${id}/`),
    deleteApplicationById: (id) => fetchAPI.delete(`application/${id}/`),
    postApplication: (data) => fetchAPI.post(`application/`, data),
    editApplicationById: (data) => fetchAPI.patch(`application/${data.applicationId}/`, data),
    getCurrentApplication:(data)=>fetchAPI.get(`application/?trainer=${data.id}&new_application=2022-09-12`),
    getHistoryApplication:(data)=>fetchAPI.get(`application/?trainer=${data.id}&old_application=2022-09-12`),
    postApplicationTemplate: (data) => fetchAPI.post(`template_application/`, data),
    getApplicationTemplate:()=>fetchAPI.get("template_application/"),
    getApplicationTemplateById:(id)=>fetchAPI.get(`template_application/${id}`),

    //Discipline
    getDiscipline: () => fetchAPI.get(`discipline/`),

    //Athletes
    getAthletes: () => fetchAPI.get(`athletes/`),


    // club
    getClubsApi: () => fetchAPI.get("club/"),
    getClubApi: (id) => fetchAPI.get(`club/${id}`),
    postClubApi: (data) => fetchAPI.post("club/", data.data),
    editClubApi: (data) => fetchAPI.patch(`club/${data.id}/`, data.data),
    deleteClubApi: (id) => fetchAPI.delete(`club/${id}/`),

    // sportsmen
    getSportsmenApi: () => fetchAPI.get("athletes/"),
    getSportsmanApi: (id) => fetchAPI.get(`athletes/${id}`),
    postSportsmenApi: (data) => fetchAPI.post("athletes/", data.data),
    editSportsmenApi: (data) => fetchAPI.patch(`athletes/${data.id}/`, data.data),
    deleteSportsmenApi: (id) => fetchAPI.delete(`athletes/${id}/`),

    // Physical Indicator
    // getSportsmanApi: (id) => fetchAPI.get(`athletes/${id}`),
    postPhysicalIndicatorApi: (data) => fetchAPI.post("physical_indicators/", data),
    editPhysicalIndicatorApi: ({id, data}) => fetchAPI.patch(`physical_indicators/${id}/`, data),
    // deleteSportsmenApi: (id) => fetchAPI.delete(`athletes/${id}/`),

    // protocol
    getProtocolApi: () => fetchHerokuAPI.get("subgroup/"),
    getProtocolByIdApi: (id) => fetchHerokuAPI.get(`subgroup/${id}`),
    postProtocolApi: (id) => fetchHerokuAPI.post("subgroup/", {event: id}),
    // formProtocolApi: (data) => fetchHerokuAPI.patch(`subgroup/${data.id}/`, {areas_quantity: +data.data.areas_quantity, top_places_percent: data.data.top_places_percent}),
    formProtocolApi: (data) => fetchHerokuAPI.patch(`subroup_bulk_update/`, data),
    confirmProtocolApi: ({data}) => fetchHerokuAPI.patch(`subroup_bulk_update/`, data),
    reasonOfRejectionProtocolApi: ({reason}) => fetchHerokuAPI.patch(`subroup_bulk_update/`, reason),

    // judge
    getJudgeApi: () => fetchHerokuAPI.get("judge_group/"),
    // getProtocolApi: (id) => fetchHerokuAPI.get(`judge_group/${id}`),
    postJudgeApi: (data) => fetchHerokuAPI.post("judge_group/", data),
    formJudgeApi: (data) => fetchHerokuAPI.patch(`judge_group/${data.id}/`, {areas_quantity: +data.data.areas_quantity, top_places_percent: data.data.top_places_percent}),
    confirmJudgeApi: ({id, par}) => fetchHerokuAPI.patch(`judge_group/${id}/`, {is_confirmed : par}),
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}