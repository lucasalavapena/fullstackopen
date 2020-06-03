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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1_={part1.name} part2_={part2.name} part3_={part3.name} exercises1_={part1.exercises} exercises2_={part2.exercises} exercises3_={part3.exercises} />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
