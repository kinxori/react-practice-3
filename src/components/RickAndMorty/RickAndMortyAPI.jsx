import { useEffect, useState } from "react"
import PropElemRickAndMorty from "./PropElemRickAndMorty";


const elemAPI = "https://rickandmortyapi.com/api/character"

export default function RickAndMortyAPI(){
    
    const [elements, setElements] = useState([])
    
    useEffect(()=>{
        const RickAndMortyAPI = async()=>{
            const response = await fetch(elemAPI)
            const data = await response.json()
            setElements(data.results)
        }
        RickAndMortyAPI();
    },[]);

 return (
    <div style={{margin: 0, fontSize: 18, color: "white", display: "grid", justifyItems: "center", alignItems: "center",  }} >
        <h2>Rick & Morty</h2>
        <PropElemRickAndMorty items={elements}/>
    </div>
    )
}