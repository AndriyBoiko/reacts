import cssUser from './User.module.css'

import React from 'react';

const User = ({user, setUserId, setUserPostId, setCommenstIdPosts}) => {
    const click =  () => {
        setUserPostId(false)
        setCommenstIdPosts(false)
        setUserId(user)
    }
    return (
        <div>

           <div className={cssUser.block__user}>
                <div className={cssUser.userblock}><h3 className={cssUser.titleUser}>{user.id}) {user.name} </h3></div>
                <div className={cssUser.users__btn}><button className={cssUser.btn__users} onClick={click} >Info User</button></div>
           </div>

        </div>
    );
};

export default User;