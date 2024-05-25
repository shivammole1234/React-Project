import style from "styled-components";

export const Button = style.button`
color:white;
padding:10px 18px;

min-width:220px;
background:#000000;
border-radius:5px;
border:none;
font-size:16px;

border:1px solid transparent;
transition:0.4s background ease-out;

&:hover{
  background-color:white;
  border:1px solid black;
  color:black;
  transition:0.3s background ease-in;
}
`;

export const OutLineButton = style(Button)`
border:1px solid black;
background-color:white;
color:black;

&:hover{
    background-color:black;
    border:1px solid transparent;
    color:white;
  }
`;
