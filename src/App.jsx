import './Styles.css'
import Battle from './Components/Battle'
import { useRef, useState } from 'react'
import User from './Components/User'
import Navbar from './Components/Navbar'
import Enemies from "./JSON/Entities.json"
import Player from "./JSON/Player.json"
import ItemsDb from "./JSON/Items.json"

function App() {
  const player = useRef(Player[0])
  const enemi = useRef(Enemies[0])
  const itemsDb = useRef(ItemsDb)

  const [window, setWindow] = useState(null)

  const navBarAction = (option) => {
    console.log(option)
    if(option === 'User'){setWindow(<User player={player} itemsDb={itemsDb} />)}
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
