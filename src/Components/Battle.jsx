import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

const Battle = ({ player, enemi }) => {

    const [battle, setBattle] = useState({
        player: JSON.parse(JSON.stringify(player.current)),
        enemi: JSON.parse(JSON.stringify(enemi.current)),
        turn: 'player',
        log: [],
        state: 'battle'
    })

    const logBott = useRef(null)
    useEffect(() => {
        logBott.current.scrollIntoView({behavior: "smooth"});
    }, [battle.log])

    if (battle.turn === 'enemi' && battle.state === 'battle') {
        let auxBattle = JSON.parse(JSON.stringify(battle))
        auxBattle.player.pv -= auxBattle.enemi.atq
        auxBattle.turn = 'player'
        auxBattle.log.push(`Player -${auxBattle.enemi.atq} PV`)
        setTimeout(() => {
            setBattle(auxBattle)
        }, 1000)
    }
    if(battle.state === 'win'){
        let auxBattle = JSON.parse(JSON.stringify(battle))
        auxBattle.enemi.pv = enemi.current.pv
        auxBattle.state = 'battle'
        auxBattle.turn = 'player'
        setTimeout(() => {
            setBattle(auxBattle)
        }, 1000)
    }

    const atack = () => {
        let auxBattle = JSON.parse(JSON.stringify(battle))
        auxBattle.enemi.pv -= auxBattle.player.atq
        auxBattle.log.push(`Enemi -${auxBattle.player.atq} PV`)
        if (auxBattle.enemi.pv <= 0) {
            auxBattle.player.exp += auxBattle.enemi.exp
            auxBattle.state = 'win'
            auxBattle.log.push(`Player +${auxBattle.enemi.exp} exp`)
            auxBattle.log.push(`Player kills Enemi`)
            if (auxBattle.player.exp === 50) {
                auxBattle.player.exp = 0
                auxBattle.player.lvl += 1
                auxBattle.player.atq += 1
                auxBattle.log.push(`Player lvl up`)
            }
        }
        auxBattle.turn = 'enemi'
        setBattle(auxBattle)
    }

    return <div className="df br" style={{ width: '50%', height: '50%' }}>
        <div className="df fdc aic" style={{ width: '40%', height: '100%' }}>
            <p>{battle.player.name}</p>
            <p>PV: {battle.player.pv}</p>
            <p>Exp: {battle.player.exp}</p>
            <p>Lvl: {battle.player.lvl}</p>
            <p>Atack: {battle.player.atq}</p>
            <p>Defense: {battle.player.def}</p>
            <p>Gold: {battle.player.gold}</p>
            <button onClick={atack} className={battle.turn === 'enemi'? 'hidde': null}>Atack!</button>
        </div>
        <div className="df fdc aic" style={{ width: '40%', height: '100%' }}>
            <p>{battle.enemi.name}</p>
            <p>PV: {battle.enemi.pv}</p>
            <p>Exp: {battle.enemi.exp}</p>
            <p>Lvl: {battle.enemi.lvl}</p>
            <p>Atack: {battle.enemi.atq}</p>
            <p>Defense: {battle.enemi.def}</p>
        </div>
        <div className="df fdc aic ys" style={{ width: '20%', height: '100%' }}>
            {battle.log.map(data => {
                return <p>{data}</p>
            })}
            <div ref={logBott} />
        </div>
    </div>
}
export default Battle