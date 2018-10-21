import React from "react";
import Picture from "./Picture";


const Game = (props) => {

    console.log(props)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    {props.data.friends.map(friends => {
                        if (friends.id < 4) {
                            return (
                                <div onClick={props.shuffle}>

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
                <div className='col-md-3'>
                    {props.data.friends.map(friends => {
                        if (friends.id < 7 && friends.id > 3) {
                            return (
                                <div onClick={props.shuffle}>

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
                <div className='col-md-3'>
                    {props.data.friends.map(friends => {
                        if (friends.id < 10 && friends.id > 6) {
                            return (
                                <div onClick={props.shuffle}>

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
                <div className='col-md-3'>
                    {props.data.friends.map(friends => {
                        if (friends.id < 13 && friends.id > 9) {
                            return (
                                <div onClick={props.shuffle}>
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

        </div>

    )
}

export default Game;