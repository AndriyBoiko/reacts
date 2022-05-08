import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarDetailPage, CarPage} from "./pages";



function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetailPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
