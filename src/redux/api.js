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
    baseURL: "http://142.93.181.60/",
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
    // newPassword: (data) => fetchAPI.post("password-reset/", data),
    newPasswordApi: (data) => fetchAPI.post("password-reset/confirm/", data),
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}