import React from 'react'
import style from 'styled-components'
import {Button} from '../styled/button.js';

const startGame = ({toggle}) => {
  return (
    <Container1>
      <div>
        <img src="dices1.png" alt="" />
      </div>

      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle} > Play Now</Button>
      </div>


    </Container1>
  )
}

const Container1 = style.div`
max-width:1180px;
display:flex;
margin:0 auto;
margin-top:100px;
height:100vh;
align-item:center;
justify-content:center;

.content h1{
font-size:96px;
white-space:nowrap;
margin-top:100px;
}
`;



export default startGame