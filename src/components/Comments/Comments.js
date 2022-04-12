import React, {useEffect, useState} from 'react';


import {commentsServices} from "../../services";
import Comment from "../Comment/Comment";

export const Comments = ({commenstIdPosts}) => {
    const [comment, setComment] = useState([])


    useEffect(()=>{
        commentsServices.getAllComments(commenstIdPosts).then(({data})=>setComment(data))
    },[])

    return (
        <div>
            {comment.map((comment)=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

