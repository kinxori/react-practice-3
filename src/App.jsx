import './App.css'
import MarioBrosAPI from './components/MarioBros/MarioBrosAPI'
import RickAndMortyAPI from './components/RickAndMorty/RickAndMortyAPI'
import ToggleFunction from './components/ToggleFunction'

export default function App() {

  return (
  <div style={{margin:0, background: "#323232", color: "white", display: "grid", justifyItems: "center", alignItems: "center", fontFamily: "sans-serif",  width: "100%", height:"100%" }}>
    <h2 style={{fontSize: 40, margin: 30 }}>API: </h2>
    <hr style={{width: "90%", border: "1px solid hsla(100, 100%, 100%, 0.5)", margin: 0}} />
    <ToggleFunction /> 
  </div>
  )
}

