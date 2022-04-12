import cssUserInfo from './UserInfo.module.css'

import React from 'react';

export const UserInfo = ({userId, setUserPostId, setCommenstIdPosts}) => {
    const{id, name, username, email, phone, address, website } = userId
    const {street, suite, city, zipcode}= address

    const click1 = () =>{
        setCommenstIdPosts(false)
        setUserPostId(userId.id)
    }

    return (
       <div className={cssUserInfo['wrap-card']}>
            <div className={cssUserInfo.card}>
            <div className={cssUserInfo['id-user']}><span className={cssUserInfo.userid}>id:</span> {id}</div>
            <div className={cssUserInfo['name-user']}><span className={cssUserInfo.nameuser}>Name:</span> {name}</div>
            <div className={cssUserInfo['username-user']}><span className={cssUserInfo.username}>Username:</span> {username}</div>
            <div className={cssUserInfo['email-user']}><span className={cssUserInfo.emailuser}>Username:</span> {email}</div>
            <div className={cssUserInfo['phone-user']}><span className={cssUserInfo.phoneuser}>Phone:</span> {phone}</div>
            <div className={cssUserInfo['street-user']}><span className={cssUserInfo.streetuser}>Street:</span> {street}</div>
            <div className={cssUserInfo['suite-user']}><span className={cssUserInfo.suiteuser}>Suite:</span> {suite}</div>
            <div className={cssUserInfo['city-user']}><span className={cssUserInfo.cityuser}>City:</span> {city}</div>
            <div className={cssUserInfo['zip-user']}><span className={cssUserInfo.zipuser}>Zip-code:</span> {zipcode}</div>
            <div className={cssUserInfo['websuit-user']}><span className={cssUserInfo.websuituser}>Website:</span> {website}</div>

            <button onClick={click1}>Show Posts</button>

        </div>
       </div>
    );
};

