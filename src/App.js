import {CarForm, Cars} from "./components";
import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {CarPage, NotFoundPage, SingleCarPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={"cars/:carId"} element={<SingleCarPage/>}/>
                <Route path={"cars"} element={<CarPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>


        </Routes>
    );
}

export default App;
