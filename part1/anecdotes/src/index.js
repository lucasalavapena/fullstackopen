import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const TextBody = ({ heading, selectedAnecdotes, votesAnecdotes }) => {
  return (
    <>
      <h1> {heading} </h1>
      <p>{selectedAnecdotes} </p>
      <p>has {votesAnecdotes} votes</p>
    </>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * (anecdotes.length)))
  const [votes,setVote] = useState(Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  
  const RandomAnecdote = () => {
    console.log("Random")
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }
  const Increase_Vote = () => {
    console.log("Increase vote")
    let points_copy =  [...votes] 
    points_copy[selected] += 1
    setVote([...points_copy])
  }




  return (
    <div>
      <TextBody heading="Anecdote of the day" selectedAnecdotes={props.anecdotes[selected]} votesAnecdotes={votes[selected]}/>
      <Button onClick={Increase_Vote} text="vote"/>
      <Button onClick={RandomAnecdote} text="next anecdote"/> 
      <TextBody heading="Anecdote with most votes" selectedAnecdotes={props.anecdotes[votes.indexOf(Math.max(...votes))]} votesAnecdotes={votes[votes.indexOf(Math.max(...votes))]}/>
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