import React from "react";

const Picture = (props) => {
// console.log(props)
    return (

        <div className="card" style={{ maxWidth: "200px", maxHeight: "200px", margin: "30px", borderRadius:20, padding:10}}>
            <img className="card-img-top" src={props.image} id= {props.id} alt="game-img" style={{ width:"150px"}} />
        </div>

    )
}

export default Picture;