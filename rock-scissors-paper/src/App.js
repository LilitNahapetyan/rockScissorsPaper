import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userChoice, setUserChoise] = useState("rock");
  const [computerChoice, setComputerChoise] = useState("rock");
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [result, setResult] = useState("Let's see who wins?");
  const [gameOver, setGameOver] = useState(false);

  const choice = ["rock", "scissors", "paper"];

  const handleOnClick = (choice) => {
    setUserChoise(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choice[Math.floor(Math.random() * choice.length)];
    setComputerChoise(randomChoice);
  };
  const reset = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (computerPoints == 5) {
      setResult("Computer win.");
      alert("Ooops! Computeer win.");
      setGameOver(true);
    }
    if (userPoints == 5) {
      setResult("You win.");
      alert("Congratulations!You win!");
      setGameOver(true);
    }
  }, [userPoints, computerPoints]);

  useEffect(() => {
    if (userChoice == computerChoice) {
      return;
    }
    if (userChoice == "rock") {
      if (computerChoice == "paper") {
        setComputerPoints((prev) => prev + 1);
      } else {
        setUserPoints((prev) => prev + 1);
      }
    } else if (userChoice == "paper") {
      if (computerChoice == "rock") {
        setUserPoints((prev) => prev + 1);
      } else {
        setComputerPoints((prev) => prev + 1);
      }
    } else if (userChoice == "scissors") {
      if (computerChoice == "paper") {
        setUserPoints((prev) => prev + 1);
      } else {
        setComputerPoints((prev) => prev + 1);
      }
    }
  }, [computerChoice, userChoice]);
  return (
    <div className="App">
      <div className="score">
        <h1>Your points: {userPoints}</h1>
        <h1>Computer points: {computerPoints}</h1>
      </div>
      <div className="choices">
        <div>
          <h3>You</h3>
          <img className="img" src={`../images/${userChoice}.jpg`} />
        </div>
        <div>
          <h3>Computer</h3>
          <img className="img" src={`../images/${computerChoice}.jpg`} />
        </div>
      </div>

      <div className="button-div">
        {choice.map((choice, index) => {
          return (
            <button
              disabled={gameOver}
              className="btn"
              key={index}
              onClick={() => handleOnClick(choice)}
            >
              {choice}
            </button>
          );
        })}
      </div>

      <div className="result">
        <h1>Final result:{result}</h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="restart" onClick={() => reset()}>
            Restart
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
