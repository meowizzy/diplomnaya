import axios from "axios";

const token = localStorage.getItem("token");

const fetchAPI = axios.create({
    baseURL: "http://wushu-federation.tk/",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

const notToken = axios.create({
    baseURL: "http://wushu-federation.tk/",
    headers: {
        "Content-type": "application/json",
    },
});

export const requests = {
    authApi: (data) => fetchAPI.post("/login/", data),
    resetPasswordApi: (data) => fetchAPI.post("password-reset/", data),
    feedbackApi: (data) => fetchAPI.post("feedback/", data),
    getEvents:() => fetchAPI.get('event/')
    // newPassword: (data) => fetchAPI.post("password-reset/", data),
}

export const withoutToken = {
    register: (formData) => notToken.post('registration/', formData)
}