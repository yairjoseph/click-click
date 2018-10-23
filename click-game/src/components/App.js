import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron"
import Game from "./Game";
import Friend from "../assets/pictures.json";


class App extends Component {

  state = {
    picked: [],
    score: 0,
    topScore: 0,
    friends: Friend

  }

  shuffle = (event) => {

    console.log(event.target.id)
    if (this.state.picked.indexOf(event.target.id) === -1) {
      this.setState({ picked: this.state.picked.concat(event.target.id) })
      this.setState({ score: this.state.score + 1 }, function () {

        if (this.state.score > this.state.topScore) {
          this.setState({ topScore: this.state.score })
        }
      })
    }

    else {
      this.setState({ score: 0 })
      this.setState({ picked: [] })
    }
    var newFriends = this.state.friends
    for (let i = newFriends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newFriends[i], newFriends[j]] = [newFriends[j], newFriends[i]];
    }
    this.setState({ friends: newFriends });
  }

  render() {
    return (
      <div>
        {/* <Navbar  /> */}
        <Jumbotron topScore={this.state.topScore} score={this.state.score}/>
        <Game shuffle={this.shuffle} data={this.state} />

      </div>


    );
  }
}

export default App;
