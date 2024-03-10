import axios from 'axios';
import { HOST_API_KEY } from './globalConfig';

const axiosInstance = axios.create({ baseURL: HOST_API_KEY })

axiosInstance.interceptors.response.use(
    (response) => response,   // if return the succesfull response
    (error) =>                // if has error
        Promise.reject(
            (error.response && error.response) || 'General Axios Error happend'
        )
)

export default axiosInstance;