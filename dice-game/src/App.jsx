import style from "styled-components";
import StartGame from './components/startgame.jsx'
import GamePlay from './components/gamePlay.jsx'
import { useState } from "react";
import './App.css'
function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {

    setIsGameStarted((prev) => !prev);
  }

  return ( <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}

  </>
 )

}
export default App;