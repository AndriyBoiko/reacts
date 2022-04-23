import {useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {UserPosts} from "../../components";
import {usersServices} from "../../services";

const UserPostPage = () => {
    const {id} = useParams()
    console.log(id)

    const [posts, setPost] = useState([]);
    useEffect(() => {
        usersServices.getUserPostById(id).then(({data}) => setPost(data))
    }, [id])
    return (
        <div>
            <div>{posts.map(post => <UserPosts key={post.id} post={post}/>)}</div>
            <Outlet/>
        </div>
    );
};

export {UserPostPage};