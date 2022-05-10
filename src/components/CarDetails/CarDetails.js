import css from './CarDetail.module.css'

import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import {carActions} from "../../redux";

const CarDetails = ({car, car: {id, model, price, year}}) => {
    console.log(car)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const deleteById = async () => {
        await dispatch(carActions.deleteById({id}))
        navigate('/cars')
    }
    return (
        <div>
            <div className={css.card}>
                <h3 className={css['car-details']}>Car details</h3>
                <p><span>Id:</span> {id}</p>
                <p><span>Model:</span> {model}</p>
                <p><span>Price: </span>{price} $</p>
                <p><span>Year:</span> {year}</p>
                <button className={css['btn']} onClick={deleteById}>delete</button>
                <button className={css['btn']} onClick={() => {
                    dispatch(carActions.setCarForUpdate({car}))
                }}>update
                </button>
            </div>
        </div>
    );
};

export {
    CarDetails
};