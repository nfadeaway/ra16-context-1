import './App.css'
import React, {useEffect, useState} from 'react';
import List from './components/List.jsx';
import Details from './components/Details.jsx';

function App() {
  const [persons, setPersons] = useState([])
  const [activePersonID, setActivePersonID] = useState({currentPerson: '', prevPerson: ''})
  const [info, setInfo] = useState()
  const [isLoading, setLoading] = useState(false)

  async function getData() {
    let response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
    response = await response.json();
    setPersons(response)
  }

  async function getPersonData(id) {
    setLoading(true)
    let response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    response = await response.json();
    setInfo(response)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (activePersonID.currentPerson) {
      getPersonData(activePersonID.currentPerson)
    }
  }, [activePersonID.currentPerson])

  return (
    <div className="blocks">
      <List persons={persons} activePersonID={activePersonID} setActivePersonID={setActivePersonID} />
      {isLoading && <div>Loading...</div>}
      {info && <Details info={info}/>}
    </div>
  )
}

export default App