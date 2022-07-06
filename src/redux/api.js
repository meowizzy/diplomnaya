import axios from "axios";

const token = localStorage.getItem("token");

const fetchAPI = axios.create({
    baseURL: "http://wushu-federation.tk/",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

export const requests = {
    auth: (data) => fetchAPI.post("/login/", data)
}