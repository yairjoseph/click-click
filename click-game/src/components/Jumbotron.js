import React from "react";

const Jumbotron = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4"><a style={{color:"black"}}href="/click-click">Clicky Game</a></h1>
                <p className="lead">Click the image to gain points towards your new high score, if you click the same image twice your score will reset! Lets Go!</p>
                <ul className="navbar-nav">
                    <li className="nav-item nav-score">
                        <div className="nav-link" style={{fontSize:30}}>Score: {props.score} | Top Score: {props.topScore}</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Jumbotron;