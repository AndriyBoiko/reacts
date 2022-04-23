import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const postsServices = {
    getAllPosts: () => axiosServices(urls.posts),
    getPostsById: (id) => axiosServices(`${urls.posts}/${id}`)
}

export {
    postsServices
}