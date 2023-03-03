import MarioBrosAPI from "./MarioBros/MarioBrosAPI";
import RickAndMortyAPI from "./RickAndMorty/RickAndMortyAPI";
import Toggle from "./Toggle";
import { useState } from "react"


export default function ToggleFunction(){

    const [toggle, setToggle] = useState(false)

    const handleToggle =() =>{
        setToggle(!toggle);
    }

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems:"center", }}>
            <Toggle onChecked={handleToggle}/>
            { toggle ? (<MarioBrosAPI/>) : (<RickAndMortyAPI/>)}
        </div>
    )
}