import cssDetail from './PostDetails.module.css'

const PostDetail = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className={cssDetail['card-detail']} >
            <div>Id: {id}</div>
            <div>title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {PostDetail};