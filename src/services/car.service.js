import {axiosServices} from "./axios.services";
import {urls} from "../constants";


export const carService = {
    getAll: ()=>axiosServices.get(urls.cars),
    create: (car) =>axiosServices.post(urls.cars, car),
    deleteById: (id) =>axiosServices.delete(`${urls.cars}/${id}`),
    getById: (id) =>axiosServices(`${urls.cars}/${id}`),
    updateById: (id, car) =>axiosServices.put(`${urls.cars}/${id}`, car)


}