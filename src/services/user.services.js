import {constants} from "../constants";


export const userServices = {
    getAllUsers: () => fetch(constants.usersUrl + 'users').then(value => value.json())
}