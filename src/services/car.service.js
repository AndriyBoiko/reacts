import {axiosServices} from "./axios.services";
import {urls} from "../constants";


export const carService = {
    getAll: ()=>axiosServices(urls.cars),
    creat: (car) =>axiosServices.post(urls.cars, car)

}