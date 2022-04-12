import {axiosServices} from "./axios.services";
import {urls} from "../constants";


export const postsServices = {
    getAllPosts: (id) => axiosServices(`${urls.posts}/?userId=${id}`)
}