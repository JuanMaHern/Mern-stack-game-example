import './Styles.css'
import Battle from './Components/Battle'
import { useRef } from 'react'
import { Enemi, Player } from './Scripts/Entities'

function App() {
  const player = useRef(Player())
  const enemi = useRef(Enemi())

  return (
    <div className="App">
      <Battle player={player} enemi={enemi} />
    </div>
  )
}

export default App
