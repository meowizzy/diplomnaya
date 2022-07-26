import axios from "axios";

// const token = localStorage.getItem("token");

const fetchAPI = axios.create({
    baseURL: "http://142.93.181.60/",
    headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
});

const notToken = axios.create({
    baseURL: "http://wushu-federation.tk/",
    headers: {
        "Content-type": "application/json",
    },
});

export const requests = {
    authApi: (data) => fetchAPI.post("login/", data),
    resetPasswordApi: (data) => fetchAPI.post("password-reset/", data),
    feedbackApi: (data) => fetchAPI.post("feedback/", data),
    getEvents:() => fetchAPI.get('event/'),
    postEvents:(data) => fetchAPI.post('event/', data),
    newPasswordApi: (data) => fetchAPI.post("password-reset/confirm/", data),

    // documentation
    getDocs: () => fetchAPI.get("documents/document/"),
    getDoc: (id) => fetchAPI.get(`documents/document/${id}/`),
    postDoc: (data) => fetchAPI.post("documents/document/", data),
    editDoc: (data) => fetchAPI.patch(`documents/document/${data.id}/`, data.fData),
    deleteDoc: (id) => fetchAPI.delete(`documents/document/${id}/`),
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}