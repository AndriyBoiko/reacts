import {useDispatch} from "react-redux";
import {actionsDog} from "../../slices";

const Dog = ({dog}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {dog.id} -- {dog.name}
            <button onClick={()=>{dispatch(actionsDog.deleteDog({id: dog.id}))}}>delete</button>
            <button onClick={()=>{dispatch(actionsDog.setDogUpdate({dog}))}}>update</button>
            <hr/>
        </div>
    );
};

export {
    Dog
};