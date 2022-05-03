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
    }, [CarForUpdate])

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
        <form onSubmit={handleSubmit(submit)}>
            <div><label> Model: <input type="text"{...register('model')}/></label></div>
            <div><label> Price: <input type="text"{...register('price')}/></label></div>
            <div><label> Year: <input type="text"{...register('year')}/></label></div>
            <button>save</button>
        </form>

    );
};

export {
    CarForm
};