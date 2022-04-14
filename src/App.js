import './App.css';
import {CarForm, Cars} from "./components";
import {useState} from "react";


function App() {
    const [newCar, setNewCar] = useState([])
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [carUpdate, setCarUpdate] = useState(null)

    //

    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setCarUpdate={setCarUpdate}
                     setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} carUpdate={carUpdate}/>
        </div>
    );
}

export default App;
