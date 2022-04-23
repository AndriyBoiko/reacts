import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            {id}--- {title} <Link to={`${id}`} state={post}>getDetails</Link>
        </div>
    );
};

export {Post};