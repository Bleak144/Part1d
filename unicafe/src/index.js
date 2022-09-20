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
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const neutralClicks = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
  }

  const badClicks = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }
  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <div>

        <p>Give Feedback</p>


        <button onClick={goodClicks}> good</button>

        <button onClick={neutralClicks}> neutral</button>

        <button onClick={badClicks}> bad</button>

        <p>Statistics</p>

        <table>
          <tr>
            <th><Display text={"Good: "} /></th>
            <th><Display value={good} /></th>
          </tr>
          <tr>
            <th><Display text={"Neutral: "} /></th>
            <th><Display value={neutral} /></th>
          </tr>
          <tr>
            <th><Display text={"Bad: "} /></th>
            <th><Display value={bad} /></th>
          </tr>
          <tr>
            <th><Display text={"All: "} /></th>
            <th><Display value={allClicks} /></th>
          </tr>
          <tr>
            <th><Display text={"Average: "} /></th>
            <th><Display value={(good - bad) / allClicks} /></th>
          </tr>
          <tr>
            <th><Display text={"Positive: "} /></th>
            <th><Display value={(good * 100) / allClicks} percent={"%"}  /></th>
          </tr>


        </table>
        


      </div>
    )

  }
  else {
    return (
      <div>

        <p>Give Feedback</p>


        <button onClick={goodClicks}> good</button>

        <button onClick={neutralClicks}> neutral</button>

        <button onClick={badClicks}> bad</button>

        <p>No Feedback given.</p>




      </div>
    )

  }


}

ReactDOM.render(<App />, document.getElementById('root'))