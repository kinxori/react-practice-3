export default function PropElemRickAndMorty(props) {
    return (<div style={{overflow: "scroll",height:"500px", padding:20, backgroundColor: "#000000", display: "flex", flexDirection: "column", justifyContent: "top", alignItems: "center", width:500, borderRadius: 18, border: "2px solid white", boxShadow: "0px 0px 11px 1px hsla(0, 0%, 0%, 0.14)", marginBottom: 60, }}> {props.items.map(item => {
        return (
          <div key={item.id} style={{ margin: 10, display: "flex", justifyContent: "left", alignItems: "center", width: 420, }} >
            <img src={item.image} style={{ margin: 0, borderRadius: "50%", height: 100, width: 100, border: "2px solid white"  }}/>
            <div style={{ marginLeft: 20, }}>
                <p style={{ margin: 0}}>Name:  {item.name} </p>
                <p style={{ margin: 0}}> Status: {item.status}</p>
            </div>
          </div>
        )
    })} </div>)
}