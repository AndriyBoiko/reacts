import {carActions} from "../../redux";
import {useDispatch} from "react-redux";

const Car = ({car:{id, model, price, year}}) => {

    const dispatch = useDispatch;
    const deleteByID = () => {
     dispatch(carActions.deleteById({id}))
    }
    return (
        
        <div>
            {id} --{model} --{price} -- {year}
            <button onClick={()=>{deleteByID()}}>delete</button>
            <button>update</button>
        </div>
    );
};

export {
    Car
};