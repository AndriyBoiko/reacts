import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const postsServices = {
    getAllPosts: (page, _limit= 6 ) => axiosServices(urls.posts, {
        params:
            {
                _start: (page - 1) * _limit,
                _limit
            }
    }
),
getPostsById: (id) => axiosServices(`${urls.posts}/${id}`)
}

export {
    postsServices
}