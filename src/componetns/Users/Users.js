import usersCss from './Users.module.css';

import React, {useEffect, useState} from 'react';
import {userServices} from "../../services";
import User from "../User/User";




export const Users = () => {
    const [users, setUsers] = useState([])

  useEffect(()=>{
      userServices.getAllUsers().then(value => setUsers(value))
  },[])

    return (
        <div className={usersCss.wrap_users}>
            {
                users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

