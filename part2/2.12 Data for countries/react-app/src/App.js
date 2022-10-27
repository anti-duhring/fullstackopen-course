import {useState, useEffect} from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [searchName, setSearchName] = useState('')
  let countriesFiltered = searchName && searchName != '' && allCountries.length ? allCountries.filter(country => country.name.common.indexOf(searchName) != -1) : allCountries

  const handleSearchName = (e) => {
    setSearchName(e.target.value)
  }

  const showCountry = (countryName) => {
    setSearchName(countryName)
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setAllCountries(response.data)
    })
  },[])

  return ( 
    <div>
      <h1>Data for countries</h1>
      <div>
        find countries <input value={searchName} onChange={handleSearchName} />
      </div>
      <div>
        {searchName && searchName != '' ?

          countriesFiltered.length < 10 ?

            countriesFiltered.length == 1 ?

              <Country country={countriesFiltered[0]} />

              : countriesFiltered.map(country => {
                return (
                  <p key={country.name.common}>
                    {country.name.common} <button onClick={() => showCountry(country.name.common)}>show</button>
                  </p>
                )
              }) 

            : <p>Too many matches, specify another filter</p>
         
          : <p>Type any name to search</p>
        }
      </div>
    </div>
   );
}
 
export default App;