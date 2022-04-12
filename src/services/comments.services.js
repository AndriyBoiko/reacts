import {axiosServices} from "./axios.services";
import {urls} from "../constants";


export const commentsServices ={
    getAllComments: (id) => axiosServices(`${urls.posts}/${id}${urls.comments}`)
}