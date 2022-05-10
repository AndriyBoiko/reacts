import css from './Cars.module.css'

import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {useEffect} from "react";

import {carActions} from "../../redux";

const Cars = () => {

    const {cars, status} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(carActions.getAll())
    },[])
    return (
        <div>
            {/*{status&&<p>{ status}</p>}*/}
           <div className={css.wrapper} > {cars.map(car=><Car key={car.id} car={car}/>)}</div>
        </div>
    );
};

export {
    Cars
};