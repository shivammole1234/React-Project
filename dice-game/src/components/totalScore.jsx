import React from 'react'
import style from 'styled-components';
function totalScore({score}) {
    return (
        <ScoreContainer>
            
            <h1>{score}</h1>
            <p>Total Score</p>
      
        </ScoreContainer>
    )
}

export default totalScore

const ScoreContainer = style.div`
max-width:200px;
text-align:centre;

h1{
    font-size:100px;
    line-height:100px;
}
p{
    font-size:24px;
    font-weight:500px;
}
`;