import React, { useState,useEffect  } from 'react'
import axios from 'axios'


const Filter  = ({inputValue,filterFunction}) => {
  return (
      <div>
        filter show for: <input value={inputValue}
        onChange={filterFunction}/>
      </div>
  )
}

const PersonForm   = ({onSubmitFun,nameInput,nameFunc,numberInput,numberFunc}) => {
  return (
    <form onSubmit={onSubmitFun}>
    <div>
      name: <input value={nameInput}
      onChange={nameFunc}/>
    </div>
    <div>
      number: <input value={numberInput}
      onChange={numberFunc}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

const Persons   = ({persons,currFilter}) => {
  return (
    (persons.filter(person => (person.name).includes(currFilter))).map(person => 
      <p key={person.id}>{person.name} {person.number}</p>)
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ currFilter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id:persons.length+1
    }

    let person_names = persons.map(person => person.name)

    if ((person_names).includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
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
      <Filter inputValue={currFilter} filterFunction={handleFilter}/>
      <h2>Add a new entry</h2>
      <PersonForm onSubmitFun={addPerson} nameInput={newName} nameFunc={handleNameAddition} numberInput={newNumber} numberFunc={handleNumberAddition} />
      <h2>Numbers</h2>
        <Persons persons={persons} currFilter={currFilter}/>
    </div>
  )
}

export default App