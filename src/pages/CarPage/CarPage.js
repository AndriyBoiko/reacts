import css from './CarPage.module.css'

import {Cars} from "../../components";

const CarPage = () => {
    return (
        <div className={css.wrap}>
            <Cars/>
        </div>
    );
};

export {
    CarPage
};