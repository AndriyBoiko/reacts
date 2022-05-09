import cssCar from './Car.module.css'

import {carServices} from "../../services";


const Car = ({car, setIdByDelete, setCarForUpdate,}) => {
    const {model, price, year, id} = car;

    const deleteCar = async () => {
        await carServices.deleteById(id)
        setIdByDelete(id)
    }


    return (
        <div className={cssCar['wrap-card']}>
            <div className={cssCar.cards}>
                <div className={cssCar['card-info']}>
                    <div><span className={cssCar['card-span']}>Id:</span> {id}</div>
                    <div><span className={cssCar['card-span']}>Model: </span>{model}</div>
                    <div><span className={cssCar['card-span']}>Price: </span>{price} </div>
                    <div><span className={cssCar['card-span']}>Year:</span> {year}</div>
                </div>
                <button className={cssCar['btn-delete']} onClick={() => deleteCar()}>delete</button>
                <button className={cssCar['btn-update']} onClick={() => {
                    setCarForUpdate(car)
                }}>update
                </button>
            </div>


        </div>
    );

};

export default Car;
