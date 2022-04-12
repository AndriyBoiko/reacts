
import {urls} from "../constants";
import {axiosServices} from "./axios.services";



export const usersServices = {
    getAllUsers: ()=> axiosServices.get(urls.users)
}