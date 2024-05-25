import React, { useState } from 'react'
import styled from 'styled-components';

const rollDice = ({onRollDice,currentDice}) => {

    return (
        <DiceContainer1>
            <div className='dice' onClick={onRollDice} >
                <img src={`dice/dice_${currentDice}.png`} />
            </div>
            <p> Click on Dice to Roll </p>
        </DiceContainer1>
    );
};

export default rollDice

const DiceContainer1 = styled.div`
margin-left: 42%;
margin-bottom: 30px;
display: flex;
flex-direction: column;
    margin-top:48px;
    align-items:centre;


    p{
        font-size:24px;
    }
    .dice{
        cursor: pointer;
    }
`;
