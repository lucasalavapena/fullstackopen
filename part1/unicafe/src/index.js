import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({headerText}) => (<h1> {headerText}</h1>)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const History = ({good,neutral,bad}) => {

  if (good+neutral+bad === 0) {
    return (
      <div>
        No feedback is given
      </div>
    )
  }

  return (
    <Statistics good={good} neutral={neutral} bad={bad}/>
  )
} 

const Statistic = ({ text, number }) => {
  return(
    <tr> 
      <td>{text}</td>
      <td> {number}</td>
    </tr>
  )
}


const Statistics = ({good,neutral,bad}) =>  {

  return (
    <table>
      <tbody>
        <Statistic text="good" number={good} />
        <Statistic text="neutral" number={neutral}/>
        <Statistic text="bad" number={bad}/>
        <Statistic text="all" number={good+neutral+bad}/>
        <Statistic text="average" number={(good-bad)/(good+neutral+bad)}/>
        <Statistic text="positive" number={((good)/(good+neutral+bad)*100).toString() + " %"}/>
      </tbody>
    </table>
  )
} 



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
      <History good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)