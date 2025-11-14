import "../css/style.css"

const Style = () => {
  const myStyle = {
    color: "blue",
    textAlign: "center",
    fontWeight: "bold"
  }
  return (
    <>
      <h1 style={{ color: "red", fontSize: "40px", fontStyle: "italic", fontWeight: "bold", textAlign: "center" }}>My Name is Deelolade</h1>

      <p style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, placeat!</p>
      <p style={myStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos assumenda earum, est repellendus, soluta quidem dolore officia quia ipsam modi eveniet itaque error animi illum, doloremque dolorum corporis perspiciatis.</p>

      <div className="main">
        <div className="first-child"> 1st block</div>
        <div className="second-child">2nd block</div>
      </div>

    </>
  )
}

export default Style
