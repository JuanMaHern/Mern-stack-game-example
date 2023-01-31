import { useEffect, useState } from "react"
import Inventori from "./Inventori"

const User = ({ player }) => {


    return (
        <div className="df fdc br" style={{ width: '400px', height: '350px' }}>
            <p>{player.current.name}</p>
            <p>PV: {player.current.pv}</p>
            <p>Lvl: {player.current.lvl}</p>
            <p>Exp: {player.current.exp}/{50*player.current.lvl}</p>
            <p>Damage: {player.current.atq}</p>
            <p>Defense: {player.current.def}</p>
            <p>Gold: {player.current.gold}</p>
            <p>Equipment</p>
            <Inventori player={player} type={'Equipment'} />
            <p>Inventori</p>
            <Inventori player={player} type={'Inventori'} />
        </div>
    )
}
export default User
