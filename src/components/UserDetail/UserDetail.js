import {Link, Outlet} from "react-router-dom";

const UserDetail = ({user}) => {
    const {email, id} = user

    return (
        <div>
            {id}-{email}
            <Link to={`${id}`} state={user}>getDetails</Link>
            <div><Outlet/></div>
        </div>
    );
};

export {UserDetail};