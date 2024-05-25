import React, { useState } from 'react'
import style from 'styled-components';
function numberSelector({ selectedNum, setSelectedNum, error,setError }) {
    const arrNum = [1, 2, 3, 4, 5, 6];

    const numberSelectoorHandler = (value)=>{
        setSelectedNum(value);
        setError("");
    }

    return (
        <NumSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex1' >
                {
                    arrNum.map((value, i) => (
                        <Box
                            key={i} isSelected={value === selectedNum}
                            onClick={() => numberSelectoorHandler(value)} >
                            {value}
                        </Box>
                    ))}
            </div>
            <p>Select Number </p>
        </NumSelectorContainer>



    )
}

export default numberSelector

const NumSelectorContainer = style.div`

display:flex;
flex-direction:column;
align-items:end;
.flex1{
    display:flex;
    gap:24px;
}
p{
    font-size:24px;
    font-weight:700px;
}
.error{
    color:red;
}
`;

const Box = style.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:centre;
font-size:24px;
font-weight:700;
color:${(propes) => propes.isSelected ? "white" : "black"};
background-color:${(propes) => propes.isSelected ? "black" : "white"};
`;