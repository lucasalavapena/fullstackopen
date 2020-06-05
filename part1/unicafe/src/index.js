import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({headerText}) => (<h1> {headerText}</h1>)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ text, number }) => (<p> {text} {number} </p>)



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good + 1)}
  const handleNeutralClick = () => {setNeutral(neutral + 1)}
  const handleBadClick = () => {setBad(bad + 1)}
  return (
    <div>
      <Header headerText="give feedback"/>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header headerText="statistics"/>
      <Statistics text="good" number={good} />
      <Statistics text="neutral" number={neutral}/>
      <Statistics text="bad" number={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)