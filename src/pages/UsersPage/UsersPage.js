import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";


import {User} from "../../components";
import {usersServices} from "../../services";


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersServices.getAllUsers().then(({data}) => setUsers(data))
    }, [])


    return (
        <div>
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {UsersPage};