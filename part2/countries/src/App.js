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

const Country   = ({country}) => {
  return (
    <>
    <h1> {country.name} </h1>
    <p> capital: {country.capital}</p>
    <p> population: {country.population}</p>
    <h2>languages </h2>
    <ul>
      {(country.languages).map(language => <li key={language.iso639_2}>{language.name}</li>)}
    </ul>
    <img src={country.flag} alt={`${country.name}s flag`} height="100"/>
    </>
  )
}

const Countries   = ({countries,currFilter}) => {
  return (
    // (countries.filter(country => (country.name).includes(currFilter))).map(country => 
    //   <p key={country.alpha3Code}>{country.name}</p>)
    (countries.filter(country => (country.name).includes(currFilter))).map(country => 
      <p key={country.alpha3Code}>{country.name}</p>)
  )
}

const Result   = ({countries,currFilter}) => {
  // (countries.filter(country => (country.name).includes(currFilter))).length is the number of countries meeting hte condition
  let filterCountries = (countries.filter(country => (country.name).includes(currFilter)))
  if (filterCountries.length === 1) {
    return (
      <Country country={filterCountries[0]} currFilter={currFilter}/>
    )
  }
  else {
    return (
      <Countries countries={countries} currFilter={currFilter}/>
    )
  }
}


const App = () => {
  const [ countries, setCountries ] = useState([]) 
  // const [ newName, setNewName ] = useState('')
  const [ currFilter, setFilter ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response)
        setCountries(response.data)
      })
  }, [])
  

  const handleFilter = (event) => {
    setFilter((event.target.value))
  }
  

  return (
    <div>
      <Filter inputValue={currFilter} filterFunction={handleFilter}/>
      <h2>Results:</h2>
      <Result countries={countries} currFilter={currFilter}/>
    </div>
  )
}

export default App