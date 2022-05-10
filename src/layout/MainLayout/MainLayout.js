import css from './MainLayout.module.css'

import {CarForm} from "../../components";
import { Outlet} from "react-router-dom"
const MainLayout = () => {
    return (
        <div className={css.wrapper}>
            <CarForm/>
           <div >
                <Outlet/>
           </div>
        </div>
    );
};

export {
    MainLayout
};