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

const CountryView   = ({country}) => {

  const [ weather, setWeather ] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
  const countryWeatherLink= `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`

  const getWeather = () => {
    axios.get(countryWeatherLink).then(response => {
      console.log(response.data)
      setWeather(response.data)
    })
  }
  useEffect(getWeather, [])

  const temperature = ((weather || {}).current || {}).temperature;
  const windSpeed = ((weather || {}).current || {}).wind_speed;
  const windDirection = ((weather || {}).current || {}).wind_dir;
  const imageLink = weather && weather.current ? weather.current.weather_icons[0] : null
 
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
    <h2>Weather in {country.capital} </h2>
    <p> <b>Temperature:</b> {temperature} Celcius </p>
    <img src={imageLink} alt={`${country.name}s weather`} height="100"/>
    <p><b>Wind:</b> {windSpeed}  in {windDirection} direction </p>
    </>
  )
}



const Countries   = ({countries,currFilter,filterFunction}) => {
  return (

    (countries.filter(country => (country.name).includes(currFilter))).map(country => 
      <div key={country.alpha3Code}>{country.name} <button value={country.name} onClick={filterFunction}>show</button></div>)
  )
}
const Result   = ({countries,currFilter,filterFunction}) => {
  // (countries.filter(country => (country.name).includes(currFilter))).length is the number of countries meeting hte condition
  let filterCountries = (countries.filter(country => (country.name).includes(currFilter)))
  if (filterCountries.length === 1) {
    return (
      <CountryView country={filterCountries[0]} currFilter={currFilter}/>
    )
  } 
  else if (filterCountries.length> 10) {
    return (
      <p> Too many matches, specify another filter </p>
    )
  }
  else {
    return (
      <Countries countries={countries} currFilter={currFilter} filterFunction={filterFunction}/>
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
      <Result countries={countries} currFilter={currFilter} filterFunction={handleFilter}/>
    </div>
  )
}

export default App