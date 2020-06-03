import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part  = (props) => {
  return (
    <>
      <p>
        {props.cont} {props.ex}
      </p>
    </>
  )
}

const Content  = (props) => {
  return (
    <>
      <Part cont={props.part1_} ex={props.exercises1_} />
      <Part cont={props.part2_} ex={props.exercises2_}/>
      <Part cont={props.part3_} ex={props.exercises3_}/>
    </>
  )
}

const Total  = (props) => {
  return (
    <>
      <p>
      Number of exercises {props.ex1 + props.ex2 + props.ex3}
      </p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1_={part1} part2_={part2} part3_={part3} exercises1_={exercises1} exercises2_={exercises2} exercises3_={exercises3} />
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
