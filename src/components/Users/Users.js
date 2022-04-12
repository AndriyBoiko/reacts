import React, {useEffect, useState} from 'react';


import {usersServices} from "../../services";
import User from "../User/User";

export const Users = ({setUserId, setUserPostId, setCommenstIdPosts}) => {
    const [users, setUsers] = useState([]);



    useEffect(()=>{
        usersServices.getAllUsers().then( ({data}) => setUsers(data))
    },[])

    return (
        <div>
            {
                users && users.map((user)=><User key={user.id} user={user} setUserId={setUserId} setUserPostId={setUserPostId} setCommenstIdPosts={setCommenstIdPosts}/>)
            }
        </div>
    );
};

