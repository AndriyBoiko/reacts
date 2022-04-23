import cssPage from './PostPage.module.css'

import React, {useEffect, useState} from 'react';
import {Outlet, useParams, useSearchParams} from "react-router-dom";

import {Post} from "../../components";
import {postsServices} from "../../services";

const PostPage = () => {
    const [posts, setPosts] = useState([])
    const {userId} = useParams();
    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        if (userId) {
            postsServices.getPostsById(userId).then(({data}) => setPosts(data))
        } else {
            postsServices.getAllPosts(query.get('page')).then(({data}) => setPosts(data))
        }

    }, [userId, query])

    const nextPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        if (posts < 7) {
            setQuery('?page=17')
        } else {

            setQuery(queryObj)
        }

    }
    const prevPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page--
        if (+queryObj.page <= 1 ) {
            setQuery('')
        } else {
            setQuery(queryObj)
        }


    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div className={cssPage['wrap-card']}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
                <hr/>
                <button onClick={() => nextPage()}>Next</button>
                <button onClick={() => prevPage()}>Prev</button>
            </div>
            <div className={cssPage['card-info']}><Outlet/></div>
        </div>
    );
};

export {PostPage};




