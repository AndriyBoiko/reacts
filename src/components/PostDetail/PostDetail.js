const PostDetail = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <div>Id: {id}</div>
            <div>title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {PostDetail};