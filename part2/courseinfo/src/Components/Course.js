import React from 'react'
import {Header,Content,Total} from './Subcomponents'


const Course  = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course