import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Input from "./component/Input";
import * as math from "mathjs";

function App() {

  const btnColor = "#e69138";

  const [result, setResult] = useState("");
  const [text, setText] = useState(""); 

  const addToText = (val)=>{
    setText((text)=>
      [...text, val + ""]
    )
  }

  const resetButton = () => {
    setResult("")
    setText("")
  }

  const calculateResult = () =>{
    const input = text.join("");
    setResult(math.evaluate(input))
  }

  return (
    <div className="App">
      <Input result={result} text={text}/>
      <div className="app-wrapper ">
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="/" color={btnColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="*" color={btnColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="-" color={btnColor} handleClick={addToText}/>
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="+" handleClick={addToText}/>
          <Button symbol="=" color={btnColor} handleClick={calculateResult}/>
        </div>
        <div className="clear-btn">
          <Button symbol="Clear" color="#F15925" handleClick={resetButton}/>
        </div>
      </div>
    </div>
  );
}

export default App;

