import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {carServices} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpdate}) => {

    const { register, reset, handleSubmit, formState:{errors}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:"onTouched"
    });

    useEffect(()=>{

        if (carForUpdate){
            const{model, price, year}=carForUpdate
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    },[carForUpdate])
    const submit = async (car) => {
        if(carForUpdate){
             await carServices.updateById(carForUpdate.id, car)
        }else {
            const {data} = await carServices.create(car);
            setNewCar(data)
            console.log('add')
        }
        reset()
    }
    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber:true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text"{...register('year', {valueAsNumber:true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>click</button>
        </form>
    );
};

export  {
    CarForm
}