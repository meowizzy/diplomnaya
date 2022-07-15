import {requests} from "./api";
import {setCookie} from "../utils/cookieFunction/cookieFunction";

export const auth = async (data) => {
    const res = await requests.authApi(data);
    console.log(res);
    setCookie("token", res.data.access, 100)
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