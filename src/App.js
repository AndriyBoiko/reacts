import cssApp from './App.module.css'

import { useState} from "react";


import {Comments, Posts, UserInfo, Users} from "./components";




function App() {
    const[userId, setUserId]= useState(null);
    const [userPostId, setUserPostId] = useState(null)
    const [commenstIdPosts, setCommenstIdPosts] = useState(null)




    return (<div>
        <div className={cssApp.wrap__users}>
           <div className={cssApp.users__block}> <Users  setUserId={setUserId} setUserPostId={setUserPostId} setCommenstIdPosts={setCommenstIdPosts} /></div>
        <div className={cssApp.wrap__userinfo}>{userId && <UserInfo userId={userId} setUserPostId={setUserPostId}  setCommenstIdPosts={setCommenstIdPosts} />}</div>
        </div>


       <div className={cssApp['wrap-posts']}> {userPostId && <Posts userPostId={userPostId} setCommenstIdPosts={setCommenstIdPosts}  />}</div>
            { commenstIdPosts && <Comments commenstIdPosts={commenstIdPosts}/>}
        </div>

    );
}

export default App;
