import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  let personsFiltered = filterName && filterName != '' && persons.length ? [...persons.filter(person => person.name.toLowerCase().indexOf(filterName.toLowerCase()) != -1)] : [...persons]

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value.replace(/[A-Za-z]/g,''))
  }
  const handleFilterChange = (e) => {
    setFilterName(e.target.value)
    console.log(personsFiltered)
  }
  const addName = (e) => {
    e.preventDefault()

    if(persons.map(person => person.name).indexOf(newName)!=-1) {
      alert(`${newName} is already added to phonebook`)
      return 
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterName={filterName}
        handleFilterChange={handleFilterChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsFiltered} />
    </div>
  )
}

export default App