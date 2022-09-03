import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react";




const Display = (props) => {


  return (
    <div>
      
      {props.text}
      {props.value}
      {props.percent}
    </div>
  )
}





const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const goodClicks = () => {
    setAll(allClicks+1)
    setGood(good + 1)
  }

  const neutralClicks = () => {
    setAll(allClicks+1)
    setNeutral(neutral + 1)
  }

  const badClicks = () => {
    setAll(allClicks+1)
    setBad(bad + 1)
  }

  return (
    <div>


      <button onClick={goodClicks}> good</button>

      <button onClick={neutralClicks}> neutral</button>

      <button onClick={badClicks}> bad</button>

     
      <Display text={"Good: "} value={good} />
      <Display text={"Neutral: "} value={neutral} />
      <Display text={"Bad: "} value={bad} />
      <Display text={"All: "} value={allClicks} />
      <Display text={"Average: "} value={(good-bad)/allClicks} />
      <Display text={"Positive: "} value={(good*100)/allClicks} percent={"%"} />


    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))