import userCss from './User.module.css'

const User = ({user}) => {
    return (
        <div>
            <ul>
                 <li> <i>{user.username}</i> {user.name}   <p>City - {user.address.street}</p></li>
            </ul>

        </div>
    );
};

export default User;