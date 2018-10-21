import React from "react";

const Picture = (props) => {
// console.log(props)
    return (

        <div className="card" style={{height: "100px", width: "100px", padding: "20px", margin: "20px"}}>
            <img className="card-img-top" src={props.image} id= {props.id} alt="game-img" />
        </div>

    )
}

export default Picture;