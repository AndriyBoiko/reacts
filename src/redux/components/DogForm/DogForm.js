import {useEffect,  useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionsDog} from "../../slices";

const DogForm = () => {
    const [name, setName] = useState('')

    const dispatch = useDispatch();
    const {dogForUpdate} =useSelector(({dogs})=> dogs)

    useEffect(()=>{
        if (dogForUpdate){
            setName(dogForUpdate.name)
        }
    },[dogForUpdate])

    const save = () => {
      if (dogForUpdate){
          dispatch(actionsDog.updateDog({name, id:dogForUpdate.id}))
      }else{
          dispatch(actionsDog.addDog({name}))
      }
      setName('')
    }
    return (
        <div>
             <label>Dog name: <input type="text"  onChange={(e) => setName(e.target.value)} value={name}/> </label>
            <button onClick={save}> save</button>
        </div>
    );
};

export {
    DogForm
};