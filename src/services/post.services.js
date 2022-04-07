import {constants} from "../constants";


export const postServices = {
    getAllPosts: () => fetch(constants.usersUrl + 'posts').then(value => value.json())
}