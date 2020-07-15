import React from 'react'

const commonStyle = {
  background: 'lightgrey',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
}



const SuccessfulNotification = ({ message }) => {
  if (message === null) {
    return null
  }
  const successfulStyle = {...commonStyle,color: 'green'}


  return (
    <div style={successfulStyle}>
      {message}
    </div>
  )
}
const UnSuccessfulNotifcation = ({ message }) => {
  if (message === null) {
    return null
  }
  const unsuccessfulStyle = {...commonStyle,color: 'red'}

  return (
    <div style={unsuccessfulStyle}>
      {message}
    </div>
  )
}




export {SuccessfulNotification, UnSuccessfulNotifcation} 