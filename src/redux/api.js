import axios from "axios";

// const token = localStorage.getItem("token");

const fetchAPI = axios.create({
    baseURL: "https://cors-gay-sex.herokuapp.com/http://142.93.181.60/",
    headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
});

const notToken = axios.create({
    baseURL: "https://cors-gay-sex.herokuapp.com/http://142.93.181.60/",
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
    getSecretaryUser:() => fetchAPI.get('user/?is_assistant=true'),
    getUserForProfile:(id) => fetchAPI.get(`user/${id}`),
    editUser:(data) => fetchAPI.patch(`user/${data.id}/`, data.values),
    
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
    postApplication: (data) => fetchAPI.post(`application/`, data),
    editApplicationById: (data) => fetchAPI.patch(`application/${data.applicationId}/`, data),
    postApplicationTemplate: (data) => fetchAPI.post(`template_application/`, data),
    getApplicationTemplate:()=>fetchAPI.get("template_application/"),
    getApplicationTemplateById:(id)=>fetchAPI.get(`template_application/${id}`),

    //Discipline
    getDiscipline: () => fetchAPI.get(`discipline/`),

    //Athletes
    getAthletes: () => fetchAPI.get(`athletes/`),
    
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}