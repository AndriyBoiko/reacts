import cssPosts from './Posts.module.css'

import React, {useEffect, useState} from 'react';


import {postsServices} from "../../services/posts.services";
import Post from "../Post/Post";

export const Posts = ({userPostId, setCommenstIdPosts}) => {
    const [post, setPost] =useState([])




     useEffect( () =>{
       postsServices.getAllPosts(userPostId)
            .then(({data}) =>setPost(data))
    },[])


    return (

        <div className={cssPosts['wrapper-posts']}>


            <div className={cssPosts['wrap-slider']}>{post.map((post)=><Post key={post.id} post={post} setCommenstIdPosts={setCommenstIdPosts} />)}

            </div>

        </div>
    );
};

