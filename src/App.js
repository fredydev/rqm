import React,{useState} from 'react';
import logo from './logo.svg';
import styled from "styled-components"
import {quotes} from "./quotes"
import './App.css';
import Rqm from './components/RQM';
import "font-awesome/css/font-awesome.min.css"

function App() {
  var index = Math.floor(Math.random()*quotes.length)
  
  const [quote,setQuote] = useState(quotes[index])
  const [color, setColor] = useState("#544378")
  const ChangeQuote = () =>{
    const idx = Math.floor(Math.random()*quotes.length)
    const currentQuote = quotes[idx]
    setQuote(currentQuote)
  } 
  const changeColor = () =>{
    const hexCaract = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
      let pickedIndex = Math.floor(Math.random()*hexCaract.length)
      hexColor += hexCaract[pickedIndex];
    }
    setColor(hexColor)
  }
  const action = () => {
    changeColor();
    ChangeQuote();
  }
  return (
    <Container color={color}>
      <Rqm citation={quote} color={color} onClick={action}/>
    </Container>
  );
}
const Container = styled.div`
  transition: all 0.3s ease-in-out;
  background-color: ${props=>props.color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default App;
