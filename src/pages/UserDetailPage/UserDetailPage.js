import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {UserDetail} from "../../components";
import {usersServices} from "../../services";


const UserDetailPage = () => {
    const [user, setUser] = useState([])
    const {id} = useParams()


    useEffect(() => {
        usersServices.getUserById(id).then(({data}) => setUser(data))
    }, [id])


    return (
        <div>
            {user && <UserDetail user={user}/>}

        </div>
    );
};

export {UserDetailPage};