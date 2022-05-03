import {CarForm} from "../../components";
import { Outlet} from "react-router-dom"
const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
};