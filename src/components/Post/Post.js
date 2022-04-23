import cssPost from './Post.module.css'

import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title, body} = post
    return (
        <div>
            <div className={cssPost['card']}>
                <div className={cssPost['card-body']}>
                    <div className={cssPost['card-title']}>
                        {id} : {title}
                    </div>
                    <div>
                        {body}
                    </div>
                </div>
                <div className={cssPost['card-block-link']}>
                    <Link  to={`${id}`} state={post} className={cssPost['card-link']}>MORE</Link>
                </div>
            </div>
        </div>
    );
};

export {Post};