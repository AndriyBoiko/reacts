import css from './UserPosts.module.css'
const UserPosts = ({post}) => {
    return (
        <ul >
            <li>{post.title}</li>
        </ul>
    );
};

export {UserPosts};