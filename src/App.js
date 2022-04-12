
import './App.css';
import {CarForm, Cars} from "./components";
import {useState} from "react";



function App() {
  const [newCar, setNewCar]= useState(null)
  const [carForUpdate, setCarForUpdate] = useState(null)


  //

  return (
    <div >
    <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} />
      <hr/>
      <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}  carForUpdate={carForUpdate} />
    </div>
  );
}

export default App;
