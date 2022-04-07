import React, {useEffect, useState} from 'react';
import {commentServices} from "../../services";
import {Comment} from "../Comment/Comment";



export const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(()=>{
      commentServices.getAllComments().then(value=> value.slice(0,10) ).then(value => setComments(value))
    }, [])

    return (
        <div>
            {
                comments.map((comment)=> <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

