import {Link} from "react-router-dom";

const User = ({user}) => {
    const {name, id} = user
    return (
        <div>
            {id}.) {name} <Link to={`${id}`} state={user}>getDetails</Link>
        </div>
    );
};

export {User};