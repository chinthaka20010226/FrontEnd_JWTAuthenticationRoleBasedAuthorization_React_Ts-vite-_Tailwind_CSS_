import { RolesEnum } from "../types/auth.types";
import axiosInstance from "../utils/axiosInstance";

//
export const setSession = (accessToken: string | null) => {
    if(accessToken){
        localStorage.setItem('accessToken', accessToken);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;   
    }
    else{
        localStorage.removeItem('accessToken');
        delete axiosInstance.defaults.headers.common.Authorization;
    }
};

//
export const getSession = () => {
    localStorage.getItem('accessToken');
};

// Who has access this
export const allAccessRole = [RolesEnum.ADMIN,RolesEnum.USER];
export const adminAccessRole = [RolesEnum.ADMIN];

