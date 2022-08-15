import axios from "axios";

// const token = localStorage.getItem("token");

const fetchAPI = axios.create({
    baseURL: "https://wushu-federation.tk/",
    headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
});

const notToken = axios.create({
    baseURL: "https://wushu-federation.tk/",
    headers: {
        "Content-type": "application/json",
    },
});

export const requests = {
    authApi: (data) => fetchAPI.post("login/", data),
    resetPasswordApi: (data) => fetchAPI.post("password-reset/", data),
    feedbackApi: (data) => fetchAPI.post("feedback/", data),
    newPasswordApi: (data) => fetchAPI.post("password-reset/confirm/", data),

    // Events
    getEvents:() => fetchAPI.get('event/'),
    postEvents:(data) => fetchAPI.post('event/', data),
    editEvents:(data) => fetchAPI.patch(`event/${data.id}/`, data.values),
    deleteEvents:(id) => fetchAPI.delete(`event/${id}/`),

    //User
    getJudgeUser:() => fetchAPI.get('user/?is_judge=true'),
    getAllUser:() => fetchAPI.get('user/'),
    getNotRegisterUser:() => fetchAPI.get('user/'),
    getUserById:(id) => fetchAPI.get(`user/${id}`),
    getSecretaryUser:() => fetchAPI.get('user/?is_assistant=true'),
    getUserForProfile:(id) => fetchAPI.get(`user/${id}`),
    deleteUser:(id) => fetchAPI.delete(`user/${id}`),
    editUser:(data) => fetchAPI.patch(`user/${data.id}/`, data.values),
    getTrainerUser: () => fetchAPI.get("user/", { params: { is_assistant: false, is_judge : false, role: "TRAINER" } }),

    // documentation
    getDocs: () => fetchAPI.get("documents/document/"),
    getDoc: (id) => fetchAPI.get(`documents/document/${id}/`),
    postDoc: (data) => fetchAPI.post("documents/document/", data),
    editDoc: (data) => fetchAPI.patch(`documents/document/${data.id}/`, data.fData),
    deleteDoc: (id) => fetchAPI.delete(`documents/document/${id}/`),

    // news
    getNewsApi: () => fetchAPI.get("createnew/"),
    getNewApi: (id) => fetchAPI.get(`deletenew/${id}`),
    createNewsApi: (data) => fetchAPI.post("createnew/", data),
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
    editPhysicalIndicatorApi: (data) => fetchAPI.patch(`physical_indicators/${data.id}/`, data.data),
    // deleteSportsmenApi: (id) => fetchAPI.delete(`athletes/${id}/`),
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}