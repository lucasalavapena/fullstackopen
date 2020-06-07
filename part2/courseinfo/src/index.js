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

const Content  = ({parts}) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} cont={part.name} ex={part.exercises}/>
      )}
    </>
  )
}

const Total  = ({parts}) => {
  return (
    <>
      <p>
        <b>Number of exercises: {parts.reduce((sum,part) => sum + part.exercises,0)}</b>
      </p>
    </>
  )
}

const Course  = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },
        {
          name: 'School',
          exercises: 17,
          id: 3
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course}/>
      )}
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))
