import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react"

const Battle = ({ player, enemi, setWindow }) => {

    const [battle, setBattle] = useState({
        player: JSON.parse(JSON.stringify(player.current)),
        enemi: JSON.parse(JSON.stringify(enemi.current)),
        turn: 'player',
        log: [],
        state: 'battle'
    })

    const logBott = useRef(null)
    useEffect(() => {
        logBott.current.scrollIntoView({ behavior: "smooth" });
    }, [battle.log])

    if (battle.turn === 'enemi' && battle.state === 'battle') {
        let auxBattle = JSON.parse(JSON.stringify(battle))
        auxBattle.player.pv -= auxBattle.enemi.atq
        auxBattle.turn = 'player'
        auxBattle.log.push(`Player -${auxBattle.enemi.atq} PV`)
        setTimeout(() => {
            setBattle(auxBattle)
            player.current = auxBattle.player
        }, 1000)
    }
    if (battle.state === 'win') {
        let auxBattle = JSON.parse(JSON.stringify(battle))
        auxBattle.enemi.pv = enemi.current.pv
        auxBattle.state = 'battle'
        auxBattle.turn = 'player'
        setTimeout(() => {
            setBattle(auxBattle)
        }, 1000)
    }

    const atack = () => {
        console.log('atack')
        let auxBattle = JSON.parse(JSON.stringify(battle))
        console.log(auxBattle)
        let damage = auxBattle.enemi.pv < auxBattle.player.atq ? auxBattle.enemi.pv : auxBattle.player.atq
        auxBattle.enemi.pv -= damage
        auxBattle.log.push(`Enemi -${damage} PV`)
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
        player.current = auxBattle.player
    }

    return <div className="df jsc aic blr zi2 pa" style={{width: '100%', height: '100%'}}>
        <div className="df jsc fdc aic obf" style={{ width: '250px', height: '350px' }}>
            <div className="df fdc aic jsc br" style={{ width: '250px', height: '50%' }}>
                <p>{battle.enemi.name}</p>
                <p>PV: {battle.enemi.pv}</p>
                <progress style={{ width: '200px' }} id="life" max={enemi.current.pv} value={battle.enemi.pv} />
            </div>
            <div className="df fdc aic jsc br" style={{ width: '250px', height: '50%' }}>
                <p>{battle.player.name}</p>
                <p>PV: {battle.player.pv}</p>
                <progress style={{ width: '200px' }} id="life" max={player.current.pv} value={battle.player.pv} />
                <button onClick={atack} className={battle.turn === 'enemi' ? 'hidde' : null} >Atack!</button>
                <button onClick={() => setWindow(null)} className={battle.turn === 'enemi' ? 'hidde' : null}>Close</button>
            </div>
        </div>
        <div className="df fdc aic ys br obf" style={{ width: '150px', height: '350px' }}>
            {battle.log.map(data => {
                return <p>{data}</p>
            })}
            <div ref={logBott} />
        </div>
    </div>
}
export default Battle