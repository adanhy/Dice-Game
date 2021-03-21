import React, { Component } from "react";
import PLAYER from "../Player/Player.component";
// import Dice from "../Dice/dice.component";
// import useSound from "use-sound";
// import boopSfx from "../../sounds/boop.mp3";

import "./normalize.css";
import "./Game.css";

class DICEGAME extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfdiceSides: 6,
      winningScore: 50,
      playerTurn: 0,
      dices: [0, 0],
      players: [
        {
          name: "Player 1",
          totalScore: 0,
          currentRound: 0,
          gamesWon: 0,
        },
        {
          name: "Player 2",
          totalScore: 0,
          currentRound: 0,
          gamesWon: 0,
        },
      ],
    };
  }

  handleCallback = (childData) => {
    this.setState((state) => {
      const players = state.players.map((v, i, arr) => {
        console.log(v);
        if (i === state.playerTurn) {
          v.totalScore = childData;
        }
        return arr[i];
      });
      return {
        players,
      };
    });
  };

  Roll = () => {
    return Math.floor(Math.random() * this.state.numOfdiceSides) + 1;
  };

  handleRoll = () => {
    // const [play] = useSound(boopSfx);
    // play();

    console.log(`roll`);
    const dcs = [this.Roll(), this.Roll()];
    const diceSum = dcs[0] + dcs[1];

    // loss of all points if same die result

    if (dcs[0] === dcs[1]) {
      console.log(`you lose`);
      this.setState((state) => {
        const plrs = state.players.map((v, i, arr) => {
          if (i === state.playerTurn) {
            console.log(`wa wa wa lost it all`);
            arr[i].currentRound = 0;
            arr[i].totalScore = 0;
          }
          return arr[i];
        });

        console.log(`switching player due to loss`);
        let plrtrn;
        this.state.playerTurn === 0 ? (plrtrn = 1) : (plrtrn = 0);

        return {
          players: plrs,
          dices: dcs,
          playerTurn: plrtrn,
        };
      });
      return;
    }

    //adding to current score

    this.setState((state) => {
      const plrs = state.players.map((v, i, arr) => {
        if (i === state.playerTurn) {
          console.log(`inside`);
          arr[i].currentRound = arr[i].currentRound + diceSum;
          console.log(v.currentRound);
        }
        return arr[i];
      });

      return {
        players: plrs,
        dices: dcs,
      };
    });

    console.log(this.state);
    // checking if the game is over (current round + total score > winning score)
    if (
      this.state.players[this.state.playerTurn].totalScore +
        diceSum +
        this.state.players[this.state.playerTurn].currentRound >=
      this.state.winningScore
    ) {
      console.log(`player ${this.state.playerTurn} WON`);
      this.setState((state) => {
        const plrs = state.players.map((v, i, arr) => {
          return {
            name: v.name,
            totalScore: 0,
            currentRound: 0,
            gamesWon: state.playerTurn === i ? v.gamesWon + 1 : v.gamesWon,
          };
        });

        return {
          playerTurn: state.playerTurn,
          dices: [0, 0],
          players: plrs,
        };
      });
    }
  };

  handleRestartGame = () => {
    this.setState((state) => {
      const plrs = state.players.map((v) => {
        return {
          name: v.name,
          totalScore: 0,
          currentRound: 0,
          gamesWon: 0,
        };
      });

      return {
        playerTurn: state.playerTurn,
        dices: [0, 0],
        players: plrs,
      };
    });
  };

  handleHold = () => {
    console.log(`hold`);

    this.setState((state) => {
      let plrTrn;
      const plrs = state.players.map((v, i, arr) => {
        if (i === state.playerTurn) {
          arr[i].totalScore += arr[i].currentRound;
          arr[i].currentRound = 0;
        }

        plrTrn = state.playerTurn === 0 ? 1 : 0;

        return arr[i];
      });

      return {
        players: plrs,
        playerTurn: plrTrn,
      };
    });
  };

  handleChange = (event) => {
    console.log(`textbox changed`);
    this.setState({ winningScore: event.target.value });
  };

  render() {
    return (
      <div>
        <div id="dices">
          dice: <label>{this.state.dices[0]} </label>
          <label>{this.state.dices[1]}</label>
        </div>
        <div id="rollhold">
          <button onClick={this.handleRoll}>Roll</button>
          <button onClick={this.handleHold}>Hold</button>
        </div>
        <div id="currentscore">
          current round:
          {this.state.players[this.state.playerTurn].currentRound}
        </div>
        <div> {this.state.players[this.state.playerTurn].name}, Your Turn!</div>

        <div>
          <label htmlFor="text">first to: </label>
          <input
            name="text"
            type="number"
            value={this.state.winningScore}
            onChange={this.handleChange}
          />
          {" wins! "}
        </div>
        <div>
          <button onClick={this.handleRestartGame}>Restart Game</button>
        </div>
        <div id="players_container">
          <PLAYER
            playerinfo={this.state.players[0]}
            parentCallback={this.handleCallback}
          />
          <PLAYER
            playerinfo={this.state.players[1]}
            parentCallback={this.handleCallback}
          />
        </div>
      </div>
    );
  }
}

export default DICEGAME;
