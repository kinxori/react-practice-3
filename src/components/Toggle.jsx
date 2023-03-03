export default function Toggle({ onChecked }) {
    return (
      <button onClick={onChecked}  style={{margin: "25px 0px 0px 0px", width: 100, height: 30, textAlign: "center", wordSpacing:10, cursor:" pointer", borderRadius: 50, border: "none", }}>
        Next &rarr; 
      </button >
    )
  }