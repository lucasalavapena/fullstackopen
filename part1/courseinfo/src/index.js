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
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content part1_={parts[0].name} part2_={parts[1].name} part3_={parts[2].name} exercises1_={parts[0].exercises} exercises2_={parts[1].exercises} exercises3_={parts[2].exercises} />
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
