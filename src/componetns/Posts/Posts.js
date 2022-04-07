import postsCss from './Posts.module.css'

import {useEffect, useState} from "react";
import {postServices} from "../../services";
import Post from "../Post/Post";


export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postServices.getAllPosts().then(value => value.slice(0,15)).then(value => setPosts(value))
    }, [])


    return (
        <div className={postsCss.wrap_posts}>
            {
                posts.map((post)=> <Post key={post.id} post={post} />)
            }
        </div>
    );
};

