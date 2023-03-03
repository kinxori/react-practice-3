import { useEffect, useState } from "react"
import PropElemMarioBros from "./PropElemMarioBros";


const elemAPI = "https://www.amiiboapi.com/api/amiibo/"

export default function MarioBrosAPI(){
    
    const [elements, setElements] = useState([])
    
    useEffect(()=>{
        const MarioBrosAPI = async()=>{
            const response = await fetch(elemAPI)
            const data = await response.json()
            setElements(data.amiibo)
        }
        MarioBrosAPI();
    },[]);

 return (
    <div style={{margin: 0, fontSize: 18, color: "white", display: "grid", justifyItems: "center", alignItems: "center",  }} >
        <h2>Mario Bros</h2>
        <PropElemMarioBros items={elements}/>
    </div>
    )
}