import React, {useEffect, useState} from 'react';
import {carServices} from "../../services";
import Car from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, carForUpdate }) => {
    const [cars, setCars] = useState([])
    const [carIdByDel, setIdByDelete] =useState([])

    useEffect(()=>{
        carServices.getAllCar().then(({data})=>setCars(data))
    }, [])

    useEffect(()=>{
        if(newCar){
            // setCars([...cars, newCar])// матюгається
            setCars(prevState => [...prevState, newCar]) // не мтюгається
        }
    }, [newCar])

    useEffect(()=>{
        if(carIdByDel){
            setCars(cars.filter(car => car.id !== carIdByDel))
        }
    },[carIdByDel])

    useEffect(()=>{
        if (carForUpdate){
             setCars(prevState => [...prevState, carForUpdate]  )
        }
    }, [carForUpdate])


    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setIdByDelete={setIdByDelete} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {
    Cars
}