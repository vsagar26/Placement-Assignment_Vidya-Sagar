import React from 'react'
import './input.css'

const Input = ({result, text}) => {
  return (
    <div className="input-wrapper">
        <div className="result-wrapper"><h1>{result}</h1></div>
        <div className="text"><h3>{text}</h3></div>
    </div>
  )
}

export default Input;