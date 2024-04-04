import { useState } from "react";
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function App() {
  const [value, setValue] = useState("")

  const reset = () => {
    setValue("")
  }

  const back = () => {
    setValue(value.slice(0, -1))
  }

  const evalueExpresion = () => {
    try {
      const evaluar = eval(value)
      setValue(evaluar.toString())
    } catch (error) {
      `error: ${console.log(error)}`
    }
  }

  return (
    <div className="container">
      <div className="displayInput">
        <input
          type="text"
          name="display"
          value={value}
          onClick={(e) => setValue(value + e.target.value)}
        />
      </div>
      <ButtonGroup variant="outlined" size="large" orientation="vertical" aria-label="Basic button group">
        <div className="calculateButton">
          <Button value="1" onClick={e => setValue(value + e.target.value)}>1</Button>

          <Button value="2" onClick={e => setValue(value + e.target.value)}>2</Button>

          <Button value="3" onClick={e => setValue(value + e.target.value)}>3</Button>

          <Button value="/" onClick={e => setValue(value + e.target.value)}>/</Button>

          <Button value="4" onClick={e => setValue(value + e.target.value)}>4</Button>

          <Button value="5" onClick={e => setValue(value + e.target.value)}>5</Button>

          <Button value="6" onClick={e => setValue(value + e.target.value)}>6</Button>

          <Button value="*" onClick={e => setValue(value + e.target.value)}>*</Button>

          <Button value="7" onClick={e => setValue(value + e.target.value)}>7</Button>

          <Button value="8" onClick={e => setValue(value + e.target.value)}>8</Button>

          <Button value="9" onClick={e => setValue(value + e.target.value)}>9</Button>

          <Button value="+" onClick={e => setValue(value + e.target.value)}>+</Button>



          <Button value="." onClick={e => setValue(value + e.target.value)}>.</Button>

          <Button value="Reset" onClick={reset}>R</Button>

          <Button value="Back" onClick={back}>Back</Button>

          <Button value="-" onClick={e => setValue(value + e.target.value)}>-</Button>

        </div>
        <div className="lastLine">
          <Button value="0" onClick={e => setValue(value + e.target.value)}>0</Button>

          <Button value="=" onClick={evalueExpresion}>=</Button>
        </div>
      </ButtonGroup>
    </div>
  );
}