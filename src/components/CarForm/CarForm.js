import css from './CarForm.module.css'

import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"

import {carServices} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpdate, setCarUpdate, setCarForUpdate}) => {

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    useEffect(() => {

        if (carForUpdate) {
            const {model, price, year} = carForUpdate
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)

        }
    }, [carForUpdate])
    const submit = async (car) => {
        if (carForUpdate) {
            const {data} = await carServices.updateById(carForUpdate.id, car);
            setCarUpdate(data)
            setCarForUpdate(false);

            console.log(car)

        } else {
            const {data} = await carServices.create(car);
            setNewCar(data)
            console.log('add')
        }
        reset()
    }

    return (
        <div className={css.wrap}>
            <div className={css['wrap-img']}>
                <div className={css.images}></div>
                <h2>Add your car</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={css['form-input']}>
                        <label>
                            <span>Model</span>
                            <input type="text" {...register('model')}/>
                        </label>
                         {errors.model && <span>{errors.model.message}</span>}
                    </div>

                    <div className={css['form-input']}>
                        <label>
                            <span>Price</span>
                            <input type="text" {...register('price', {valueAsNumber: true})}/>
                        </label>
                         {errors.price && <span className={css.error}>{errors.price.message}</span>}
                    </div>

                    <div className={css['form-input']}>
                        <label>
                            <span>Year</span>
                            <input type="text"{...register('year', {valueAsNumber: true})}/>
                        </label>
                        {errors.year && <span >{errors.year.message}</span>}
                    </div>

                    <div className={css['btn-wrap']}>

                        <button className={css['btn-add']} >add car</button>
                    </div>

                </form>
            </div>

            <div>

            </div>
        </div>
    );
};

export {
    CarForm
}