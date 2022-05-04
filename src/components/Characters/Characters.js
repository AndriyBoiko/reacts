import {useEffect, useState} from "react";
import {charactersServices} from "../../services/characters.services";
import {Char} from "../Char/Char";

const Characters = () => {

    const [chars, setChar] = useState([])
    useEffect(()=>{
        charactersServices.getAllCharacters().then(({data})=>setChar(data.results))
    },[])

    console.log(chars)
    return (
        <div>
            {
                chars.map(char=><Char key={char.id} char={char}/>)
            }
        </div>
    );
};

export {
    Characters
};