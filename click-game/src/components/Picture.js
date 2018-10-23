import React from "react";

const Picture = (props) => {
// console.log(props)
    return (

        <div className="card card-style">
            <img className="card-img-top" src={props.image} id= {props.id} alt="game-img"  />
        </div>

    )
}

export default Picture;
// style={{ maxWidth: "200px", maxHeight: "200px", margin: "30px", borderRadius:20, padding:10}}
// style={{ width:"150px", cursor: "pointer"}}