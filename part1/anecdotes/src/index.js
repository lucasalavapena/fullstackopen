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
  const [maxIdx, setMaxIdx] = useState(0)
  const [votes,setVote] = useState(Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  

  const MostvotedArray = () => {
    let points_copy =  [...votes] 
    // console.log(*points_copy)
    // console.log(...points_copy)
    let max = Math.max(...points_copy)
    setMaxIdx(votes.indexOf(max))
  }
  const RandomAnecdote = () => {
    console.log("Random")
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
    MostvotedArray()
  }
  const Increase_Vote = () => {
    console.log("Increase vote")
    const points_copy =  [...votes] 
    points_copy[selected] += 1
    setVote([...points_copy])
    // console.log(votes)
    // [0,0,0,0,0]
    // the fact that votes is not being updated here is causing problems (in terms of getting the intended behaviour) in my implementation
    // console.log(points_copy)
    // [1,0,0,0,0]
    MostvotedArray()
  }




  return (
    <div>
      <TextBody heading="Anecdote of the day" selectedAnecdotes={props.anecdotes[selected]} votesAnecdotes={votes[selected]}/>
      <Button onClick={Increase_Vote} text="vote"/>
      <Button onClick={RandomAnecdote} text="next anecdote"/> 
      <TextBody heading="Anecdote with most votes" selectedAnecdotes={props.anecdotes[maxIdx]} votesAnecdotes={votes[maxIdx]}/>
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