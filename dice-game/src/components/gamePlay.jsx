import React from 'react';
import style from 'styled-components';
import TotalScore from './totalScore';
import NumberSelector from './numberSelector.jsx';
import RollDice from './rollDice.jsx';
import  { useState } from 'react';
import rollDice from './rollDice.jsx';
import Rules from './rules.jsx';
import {Button ,OutLineButton} from '../styled/button.js';


function gamePlay() {

    const [score,setScore] =useState(0);
    const [selectedNum, setSelectedNum] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] =useState("");
    const [showRules,setShowRules] = useState(false);

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const onRollDice = () => {
        if(!selectedNum) {
            setError("You Have Not Selected aNy number");
            return;
        }
        setError("");

        const randomNumber = generateRandom(1, 7);
        setCurrentDice((prev) => randomNumber);
        
        
        if(selectedNum === randomNumber){
            setScore((prev) => prev+randomNumber)
        }else{
            setScore((prev) => prev-2);
        }
        setSelectedNum(undefined);
    }

    const resetScore=()=>{
        setScore(0);
    }
    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score}/>
                <NumberSelector selectedNum={selectedNum} error={error}
                setError={setError}
                setSelectedNum={setSelectedNum}/>
            </div>
        <RollDice currentDice={currentDice} onRollDice={onRollDice} />
        <div className='btn' >
            <OutLineButton onClick={resetScore} >Reset</OutLineButton>
            <Button onClick ={ () =>setShowRules(prev => !prev)}
             >{showRules ? "Hide" : "Show"} Rules</Button>
             </div>
             { showRules && <Rules/> }
        </MainContainer>
    )
}

export default gamePlay

const MainContainer = style.main`
padding-top:70px;
padding-right:100px;
padding-left:100px;
.top_section{
    display:flex;
    justify-content:space-between;
    align-items:end;
}
.btn{
    display:flex;
    flex-direction:column;
    justify-contents:centre;
    gap:10px;
    align-items: center;
}
`;