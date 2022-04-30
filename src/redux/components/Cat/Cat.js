import {useDispatch} from "react-redux";
import {actionsCat} from "../../slices";

const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {cat.id} - {cat.name}
            <button onClick={()=>{dispatch(actionsCat.deleteCat({id: cat.id}))}}>delete</button>
            <button onClick={()=>{dispatch(actionsCat.setUpdateCat({cat}))}}>update</button>
            <hr/>
        </div>
    );
};

export {
    Cat
};