import React, {useEffect, useState} from 'react';

import {useLocation, useParams} from "react-router-dom";

import {PostDetail} from "../../components";
import {postsServices} from "../../services";

const SinglePostPage = () => {
    const {state} = useLocation()
    const [post, setPost] = useState(state)
    const {id} = useParams();


    useEffect(() => {

        if (!state) {
            postsServices.getPostsById(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }

    }, [id, state])
    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {
    SinglePostPage
};