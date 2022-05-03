import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import {carActions} from "../../redux";

const CarDetails = ({ car, car: { id, model, price, year } }) => {
    console.log(car)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const deleteById = async () => {
        await dispatch(carActions.deleteById({id}))
        navigate('/cars')
    }
    return (
        <div>
            <p>id: {id}</p>
            <p>price: {price}</p>
            <p>model: {model}</p>
            <p>year: {year}</p>
            <button onClick={deleteById}>delete</button>
            <button onClick={() => {
                dispatch(carActions.setCarForUpdate({car}))

            }}>
              update</button>
        </div>
    );
};

export {
    CarDetails
};