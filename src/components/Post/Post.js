import cssPost from './Post.module.css'

import React from 'react';

const Post = ({post, setCommenstIdPosts}) => {


    return (
        <div>

            <div className={cssPost['card-post']}>


                <div>
                    <span>Title:</span>
                    <p className={cssPost['title-post']}>  {post.title}  </p>
                    <span>Post:</span>
                    <p className={cssPost['body-post']}>  {post.body}  </p>
                    <p className={cssPost['id-post']}> Id: {post.id}  </p>
                    <div>
                        <button onClick={() => setCommenstIdPosts(post.id)}>Comments</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Post;