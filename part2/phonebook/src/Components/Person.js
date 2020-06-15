import React from 'react'

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


const Persons   = ({persons,currFilter,deleteEntry}) => {
  // console.log(persons)
  // console.log(persons.find(x => x.id === 2))
  
  function deletePerson(person,deleteEntry) {
    const result = window.confirm(`Delete ${person.name} ?`);
    if (result) {
      // console.log(persons)
      deleteEntry(person.id)
    }

}
  if (persons[persons.length-1] === undefined) {
    return ((persons.slice(0,persons.length-1).filter(person => (person.name).includes(currFilter))).map(person => 
        <p key={person.id}>{person.name} {person.number} <button value={person.id} onClick={() => deletePerson(person,deleteEntry)}>delete</button></p>))
  } else {
    return ((persons.filter(person => (person.name).includes(currFilter))).map(person => 
        <p key={person.id}>{person.name} {person.number} <button value={person.id} onClick={() => deletePerson(person,deleteEntry)}>delete</button></p>)
    )
  }
}

export { Filter, PersonForm, Persons }