import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <p>{comment.email}</p>
        </div>
    );
};

export default Comment;