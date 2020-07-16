import React, { useState,useEffect  } from 'react'
import { Filter, PersonForm, Persons } from './Components/Person'
import {SuccessfulNotification, UnSuccessfulNotifcation}  from './Components/Notification'
import personService from './Services/phonebook'




const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ currFilter, setFilter ] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    personService.getAll().then(response => {
        setPersons(response)
      })
  }, [])

  function sendNotificationMessage (Name,action) {
    setNotificationMessage(`'${Name}' has been ${action}`)
    setTimeout(() => {
      setNotificationMessage(null)
    }, 1500) 
  }
  
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    let originalEntry = persons.find(person => person.name === newName)

    if (originalEntry) {
      if (originalEntry.number ===  newNumber) {
        window.alert(`${newName} is already added to phonebook`)
      }
      else{
        const result = window.confirm(`'${newName}' has already been added to the phone book, do you want to replace the old number with the newly input number?`);
        if (result) {
          nameObject.id = originalEntry.id
          personService
          .update(originalEntry.id,nameObject).then(updatedPerson => {
            setPersons(persons.map(person => person.id !== nameObject.id  ? person:nameObject))
            setNewName('')
            setNewNumber('')
            sendNotificationMessage(newName,"updated")
          })
          .catch(error => {
            setErrorMessage(`'${newName}' has been already been deleted.`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 2500) 
            setPersons(persons.filter(person => person.id !== nameObject.id))
          })
        }
      }

    }
    else {
      personService.create(nameObject).then(response => {
        sendNotificationMessage(newName,"added")
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
    }

  }  

  
  const handleEntryDeletion = (id) => {
    personService.deleteEntry(id)
    const newPersons = persons.filter(x => x.id !== id)
    setPersons(newPersons)
  }

  const handleNameAddition = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberAddition = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter((event.target.value))
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessfulNotification message={notificationMessage} />
      <UnSuccessfulNotifcation message={errorMessage} />
      <Filter inputValue={currFilter} filterFunction={handleFilter}/>
      <h2>Add a new entry</h2>
      <PersonForm onSubmitFun={addPerson} nameInput={newName} nameFunc={handleNameAddition} numberInput={newNumber} numberFunc={handleNumberAddition} />
      <h2>Numbers</h2>
        <Persons persons={persons} currFilter={currFilter} deleteEntry={handleEntryDeletion}/>
    </div>
  )
}

export default App