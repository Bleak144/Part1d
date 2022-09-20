import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from "react";





const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState([0, 0, 0, 0, 0, 0])

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const votes = () => {
    const copy = [...vote]
    copy[selected] += 1;
    setVote(copy);
  }

  var largest = vote[0];
 

  for (var i = 0; i < vote.length; i++) {
    if (largest < vote[i]) {
      largest = vote[i];
    }
  }


  const max = Math.max(...vote);


  return (
    <div>

      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={votes} >vote</button>
      <button onClick={nextAnecdote} >next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[vote.indexOf(max)]}</p>
      <p>{largest}</p>


    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
