import appCss from './App.module.css';
import {Users, Posts, Comments} from "./componetns";


function App() {
    return (
        <div>
            <div className={appCss.block}>
                <div className={appCss.block_users}>
                    <h2 className={appCss.title_users}>Users All</h2>
                    <Users/>
                </div>
                <div className={appCss.block_posts}>
                    <h2 className={appCss.title_posts}>First 15 posts</h2>
                    <Posts/>
                </div>
            </div>
            <h2>Comments All</h2>
            <Comments/>
        </div>
    );
}

export default App;
