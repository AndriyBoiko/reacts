import axios, {AxiosResponse} from "axios";
import baseURL from "../constants/urls";


export  const axiosService = axios.create({baseURL})
export type Res<T> = Promise<AxiosResponse<T>>