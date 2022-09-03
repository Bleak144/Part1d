import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react";


const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>

  )
}



const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}



const Content = (props) => {

  return (

    <div>
      <Part part={props.part[0].name} exercise={props.part[0].exercises} />
      <Part part={props.part[1].name} exercise={props.part[1].exercises} />
      <Part part={props.part[2].name} exercise={props.part[2].exercises} />
    </div>
  )
}


const Total = (props) => {
  return (
    <div>

      <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
    </div>
  )
}


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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



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

      <Header course={course.name} />
      <Content part={course.parts} />
      <Total part={course.parts} />

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