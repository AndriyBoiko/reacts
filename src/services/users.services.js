import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const usersServices = {
    getAllUsers: () => axiosServices(urls.users),
    getUserById: (id) => axiosServices(`${urls.users}/${id}`),
    getUserPostById: (id) => axiosServices(`${urls.users}/${id}${urls.posts}`)
}

export {usersServices};