import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {

    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const submit = async (newCar) => {
      await dispatch(carActions.create({car:newCar}))
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