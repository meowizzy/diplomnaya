import {requests} from "./api";
import {setCookie} from "../utils/cookieFunction/cookieFunction";

export const auth = async (data, navigate) => {
    const res = await requests.authApi(data);
    console.log(res);
    setCookie("user_info", JSON.stringify(res.data), 100);
    navigate("/main/defaultEvents/allDefaultEvents");
}

export const resetPassword = async (data) => {
    const res = await requests.resetPasswordApi(data);
    console.log(res);
}

export const feedBack = async (data) => {
    const res = await requests.feedbackApi(data);
    console.log(res);
}

export const newPassword = async (data) => {
    const res = await requests.newPasswordApi(data);
    console.log(res);
}