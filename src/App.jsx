import './Styles.css'
import Battle from './Components/Battle'
import { useRef, useState } from 'react'
import { Enemi, Player } from './Scripts/Entities'
import User from './Components/User'
import Navbar from './Components/Navbar'

function App() {
  const player = useRef(Player())
  const enemi = useRef(Enemi())

  const [window, setWindow] = useState(null)

  const navBarAction = (option) => {
    console.log(option)
    if(option === 'User'){setWindow(<User player={player} />)}
    if(option === 'Battle'){setWindow(<Battle player={player} enemi={enemi} setWindow={setWindow} />)}
  }

  return (
    <div className="App">
      <Navbar navBarAction={navBarAction} />
      {window}
      {/* <User player={player} />
      <Battle player={user} setPlayer={setUser} enemi={enemi} /> */}
    </div>
  )
}

export default App
