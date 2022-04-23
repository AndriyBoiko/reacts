import cssLoyaut from './MainLoyaut.module.css'

import {Outlet, NavLink} from 'react-router-dom'

const MainLoyaut = () => {
    return (
        <div>
            <div className={cssLoyaut['nav-wrap']}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/about">About</NavLink>

            </div>
            <Outlet/>
        </div>

    );
};

export {MainLoyaut};