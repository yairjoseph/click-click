import React from "react";
import Picture from "./Picture";


const Game = (props) => {

    console.log(props)
    return (
        <div className='container'>
            <div className='row'>
                {props.data.friends.map(friends => {
                    if (props.data.friends.indexOf(friends) < 4) {
                        return (
                            <div onClick={props.shuffle} className ="image-center">

                                <Picture
                                    id={friends.id}
                                    name={friends.name}
                                    image={friends.link}
                                />
                            </div>
                        )
                    }
                }
                )}
            </div>
            <div className="row">
                {props.data.friends.map(friends => {
                    if (props.data.friends.indexOf(friends) < 8 && props.data.friends.indexOf(friends) > 3) {
                        return (
                            <div onClick={props.shuffle} className ="image-center">
                                <Picture
                                    id={friends.id}
                                    name={friends.name}
                                    image={friends.link}
                                />
                            </div>
                        )
                    }
                }
                )}
            </div>
            <div className='row'>
                {props.data.friends.map(friends => {
                    if (props.data.friends.indexOf(friends) < 12 && props.data.friends.indexOf(friends) > 7) {
                        return (
                            <div onClick={props.shuffle} className ="image-center">

                                <Picture
                                    id={friends.id}
                                    name={friends.name}
                                    image={friends.link}
                                />
                            </div>
                        )
                    }
                }
                )}
            </div>
        </div>
    )
}

export default Game;