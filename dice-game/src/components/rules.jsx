import React from 'react'
import style from 'styled-components';
function rules() {
    return (
        <RulesContainer>
            <h2> How to Play Game</h2>
            <p className='text' >
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
            </p>
        </RulesContainer>
    )
}

export default rules

const RulesContainer = style.div`
background-color:#e0cece;
padding:20px;
max-width:800px;
margin:0 auto;
margin-top:40px;
border-radius:10px;
h2{
    font-size:24px;
}
.text{
    margin-top:24px;

}
`;