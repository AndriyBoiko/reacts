import {constants} from "../constants";


export const commentServices = {
    getAllComments: ()=> fetch(constants.usersUrl + 'comments').then(value => value.json())
}