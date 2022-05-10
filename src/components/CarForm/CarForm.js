import css from './CarForm.module.css'

import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const CarForm = () => {
    const {CarForUpdate} = useSelector(state => state.cars);
    const {reset, register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        if (CarForUpdate) {
            const {model, year, price} = CarForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    },[CarForUpdate])

    const submit = async (newCar) => {
        if (CarForUpdate){
             await dispatch(carActions.updateById({id:CarForUpdate.id, car: newCar}))
        }else{
             await dispatch(carActions.createAsync({car: newCar}))
        }
        navigate('/cars')
        reset()
    }
    return (
       <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={css['form-title']}>
                    <h2>Add your car</h2>
                </div>
            <div className={css['form-input']}>
                <label>
                    <input type="text"{...register('model')} placeholder={'MODEL'}/>
                </label>
            </div>
            <div className={css['form-input']}>
                <label>
                    <input type="text"{...register('price')} placeholder={'PRICE'}/>
                </label>
            </div>
            <div className={css['form-input']} >
                <label>
                    <input type="text"{...register('year')} placeholder={'YEAR'}/>
                </label>
            </div>
            <button>save</button>
        </form>
       </div>

    );
};

export {
    CarForm
};