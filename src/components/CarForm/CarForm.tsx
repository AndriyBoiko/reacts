import {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hook";
import {carActions} from "../../redux";

const CarForm:FC = () => {

    const {register, handleSubmit, reset} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit:SubmitHandler<ICar> = async (car)=> {
        await dispatch(carActions.create({car}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} >
            <input type="text" placeholder={''} {...register('model')}/>
            <input type="text" placeholder={''} {...register('year')}/>
            <input type="text" placeholder={''} {...register('price')}/>
            <button>save</button>
        </form>
    );
};

export {
    CarForm
};