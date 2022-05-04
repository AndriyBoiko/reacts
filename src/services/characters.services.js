import {axiosServices} from "./axios.services";

import {urls} from "../constants";


export const charactersServices = {
    getAllCharacters:()=> axiosServices(urls.character)
}
