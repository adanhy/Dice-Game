import React, { Component } from "react";
import "./Player.css";
class Dice extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  rollDice = () => {
    var elDiceOne = document.getElementById("dice1");
    var elDiceTwo = document.getElementById("dice2");
    var elComeOut = document.getElementById("roll");

    elComeOut.onclick = function () {
      rollDice();
    };

    var diceOne = Math.floor(Math.random() * 6 + 1);
    var diceTwo = Math.floor(Math.random() * 6 + 1);

    console.log(diceOne + " " + diceTwo);

    for (var i = 1; i <= 6; i++) {
      elDiceOne.classList.remove("show-" + i);
      if (diceOne === i) {
        elDiceOne.classList.add("show-" + i);
      }
    }

    for (var k = 1; k <= 6; k++) {
      elDiceTwo.classList.remove("show-" + k);
      if (diceTwo === k) {
        elDiceTwo.classList.add("show-" + k);
      }
    }
    setTimeout(rollDice(), 1000);
  };

  render() {
    return (
      <div>
        <div class="container">
          <div id="dice1" class="dice dice-one">
            <div id="dice-one-side-one" class="side one">
              <div class="dot one-1"></div>
            </div>
            <div id="dice-one-side-two" class="side two">
              <div class="dot two-1"></div>
              <div class="dot two-2"></div>
            </div>
            <div id="dice-one-side-three" class="side three">
              <div class="dot three-1"></div>
              <div class="dot three-2"></div>
              <div class="dot three-3"></div>
            </div>
            <div id="dice-one-side-four" class="side four">
              <div class="dot four-1"></div>
              <div class="dot four-2"></div>
              <div class="dot four-3"></div>
              <div class="dot four-4"></div>
            </div>
            <div id="dice-one-side-five" class="side five">
              <div class="dot five-1"></div>
              <div class="dot five-2"></div>
              <div class="dot five-3"></div>
              <div class="dot five-4"></div>
              <div class="dot five-5"></div>
            </div>
            <div id="dice-one-side-six" class="side six">
              <div class="dot six-1"></div>
              <div class="dot six-2"></div>
              <div class="dot six-3"></div>
              <div class="dot six-4"></div>
              <div class="dot six-5"></div>
              <div class="dot six-6"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div id="dice2" class="dice dice-two">
            <div id="dice-two-side-one" class="side one">
              <div class="dot one-1"></div>
            </div>
            <div id="dice-two-side-two" class="side two">
              <div class="dot two-1"></div>
              <div class="dot two-2"></div>
            </div>
            <div id="dice-two-side-three" class="side three">
              <div class="dot three-1"></div>
              <div class="dot three-2"></div>
              <div class="dot three-3"></div>
            </div>
            <div id="dice-two-side-four" class="side four">
              <div class="dot four-1"></div>
              <div class="dot four-2"></div>
              <div class="dot four-3"></div>
              <div class="dot four-4"></div>
            </div>
            <div id="dice-two-side-five" class="side five">
              <div class="dot five-1"></div>
              <div class="dot five-2"></div>
              <div class="dot five-3"></div>
              <div class="dot five-4"></div>
              <div class="dot five-5"></div>
            </div>
            <div id="dice-two-side-six" class="side six">
              <div class="dot six-1"></div>
              <div class="dot six-2"></div>
              <div class="dot six-3"></div>
              <div class="dot six-4"></div>
              <div class="dot six-5"></div>
              <div class="dot six-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dice;
