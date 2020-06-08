import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523', id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id:2  },
    { name: 'Dan Abramov', number: '12-43-234345', id:3  },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id:4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ currFilter, setFilter ] = useState('')

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
      <div>
          filter show for: <input value={currFilter}
          onChange={handleFilter}/>
        </div>
      <h2>Add a new entry</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handleNameAddition}/>
        </div>
        <div>
          number: <input value={newNumber}
          onChange={handleNumberAddition}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {(persons.filter(person => (person.name).includes(currFilter))).map(person => 
          <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App