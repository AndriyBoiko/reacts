import React, {useEffect, useState} from 'react';

import {Outlet} from "react-router-dom";

import {Post} from "../../components";
import {postsServices} from "../../services";

const PostPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postsServices.getAllPosts().then(({data}) => setPosts(data))
    }, [])

    return (
        <div style={{display: 'flex'}}>
            <div> {posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostPage};




