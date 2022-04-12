import {carServices} from "../../services";


const Car = ({car, setIdByDelete, setCarForUpdate, }) => {
    const {model, price, year, id} = car;

    const deleteCar = async () => {
        await carServices.deleteById(id)
        setIdByDelete(id)
    }


    return (
        <div>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <div>Id: {id}</div>
            <button onClick={() => deleteCar()}>delete</button>
            <button onClick={() => {

                setCarForUpdate(car)
            } }>update</button>

            <br/>
        </div>
    );

};

export default Car;
