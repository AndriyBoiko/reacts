import css from './App.module.css';
import {CarForm, Cars} from "./components";
import {useState} from "react";


function App() {
    const [newCar, setNewCar] = useState([])
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [carUpdate, setCarUpdate] = useState(null)

    //

    return (
        <div className={css.wrapper}>
           <div className={css['wrapper-from']}>
                <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setCarUpdate={setCarUpdate}
                     setCarForUpdate={setCarForUpdate}/>
           </div>
            <div className={css['wrapper-cards']}>
                <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} carUpdate={carUpdate}/>
            </div>
        </div>
    );
}

export default App;
