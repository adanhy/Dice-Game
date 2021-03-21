import React, { Component } from "react";
import "./Player.css";
class PLAYER extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="player">
        <div> {this.props.playerinfo.name}</div>
        <div>
          <div>Total Score: {this.props.playerinfo.totalScore}</div>{" "}
          <div>Games Won: {this.props.playerinfo.gamesWon}</div>
        </div>
      </div>
    );
  }
}

export default PLAYER;
