import css from './App.module.css'

import {Cats, CatForm, Dogs, DogForm} from "./redux/components";

function App() {
    return (
        <div>
            <div className={css['wrap']}>
                <div><DogForm/></div>
                <div><CatForm/></div>
            </div>
            <hr/>
            <div className={css['wrap']}>
                <div><Dogs/></div>
                <div><Cats/></div>
            </div>
        </div>
    );
}

export default App;
