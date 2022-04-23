import './App.css';

import {Routes, Route, Navigate} from 'react-router-dom'
import {MainLoyaut} from "./loyaut";

import {UserPostPage} from "./pages/UserPostPage/UserPostPage";
import {AboutPage, HomePage, NotFoundPage, PostPage, SinglePostPage, UserDetailPage, UsersPage} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLoyaut/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailPage/>}>
                        <Route path={':postId'} element={<UserPostPage/>}/>
                    </Route>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;
