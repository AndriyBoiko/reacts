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
        if (+queryObj.page <= 1) {
            setQuery('')
        } else {
            setQuery(queryObj)
        }


    }
    return (
        <div>
            <div className={cssPage['wrap-posts']}>
                <div className={cssPage['wrap-page']}>

                    <div className={cssPage['wrap-card']}>
                        <div className={cssPage['btn-block']}>
                            <button className={cssPage['btn-prev', 'btn']} onClick={() => prevPage()}>Prev</button>
                            <button className={cssPage['btn-next', 'btn']} onClick={() => nextPage()}>Next</button>
                        </div>
                        <div className={cssPage.posts}>
                            {posts.map(post => <Post key={post.id} post={post}/>)}
                        </div>
                        <div className={cssPage['btn-block']}>
                            <button className={cssPage['btn-prev', 'btn']} onClick={() => prevPage()}>Prev</button>
                            <button className={cssPage['btn-next', 'btn']} onClick={() => nextPage()}>Next</button>
                        </div>

                    </div>
                    <div className={cssPage['card-info']}>
                        <Outlet/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export {PostPage};




