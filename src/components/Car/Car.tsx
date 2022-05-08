import {FC} from "react";
import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps{
    car:ICar
}

const Car:FC<IProps> = ({car:{price, id, year, model}}) => {
    return (
        <div>
                <div>{id}</div>
                <div>{price}</div>
                <div>{model}</div>
                <div>{year}</div>
            <Link to={`${id}`}>
                <button>getDetails</button>
            </Link>
            <hr/>
        </div>
    );
};

export {
    Car
};