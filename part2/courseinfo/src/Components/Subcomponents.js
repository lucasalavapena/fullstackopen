import React from 'react'

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

export {Header,Content,Total}
