import css from './Car.module.css'
import {Link} from "react-router-dom";

const Car = ({car, car: {id, model}}) => {


    return (

        <div >
            <div className={css.wrap}>
                <h3>{model}</h3>
                <Link to={id.toString()} state={car}>
                    <button className={css['btn-info']}>Info</button>
                </Link>
            </div>


        </div>
    );
};

export {
    Car
};