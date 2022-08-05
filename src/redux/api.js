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
    editEvents:(data) => fetchAPI.patch(`event/${data.id}`, data.values),
    deleteEvents:(id) => fetchAPI.delete(`event/${id}/`),

    //User
    getJudgeUser:() => fetchAPI.get('user/?is_judge=true'),
    getSecretaryUser:() => fetchAPI.get('user/?is_assistant=true'),
    getTrainerUser: () => fetchAPI.get('user/', { params: { is_judge: false, is_assistant: false, role: "TRAINER", } }),
    
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
    deleteNewsApi: (id) => fetchAPI.delete(`deletenew/${id}/`),

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