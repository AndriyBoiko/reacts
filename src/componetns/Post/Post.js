import postCss from './Post.module.css'

const Post = ({post}) => {
    return (
        <div className={postCss.wrap_post}>
            <div >
                {post.body}
            </div>

        </div>
    );
};

export default Post;