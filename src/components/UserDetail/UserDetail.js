import css from './UserDetail.module.css'

import {Link, Outlet} from "react-router-dom";

const UserDetail = ({user}) => {
    const {email, id, username, name, phone,  website} = user


    return (
        <div className={css.wrapper}>
            <ul className={css.persons}>
                <li>{id}</li>
                <li>{name}</li>
                <li>{username}</li>
                <li>{phone}</li>
                <li>{email}</li>
                <li>{website}</li>
               <div className={css['btn-link']}>
                    <Link to={`${id}`} state={user}>Posts</Link>
               </div>
            </ul>

            <div><Outlet/></div>
        </div>
    );
};

export {UserDetail};