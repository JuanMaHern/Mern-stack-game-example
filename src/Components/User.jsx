import { useEffect, useState } from "react"
import Inventori from "./Inventori"

const User = ({ player, itemsDb }) => {
    const [playerSt, setPlayerSt] = useState(JSON.parse(JSON.stringify(player.current)))
    let inventori = []
    let equipment = []
    for (let item of playerSt.inventori) {
        let auxItem = itemsDb.current.find(object => object.id === item.id)
        inventori.push({ ...auxItem, ...item, ...{ equiped: false } })
    }
    for (let item of playerSt.equipment) {
        let auxItem = itemsDb.current.find(object => object.id === item.id)
        equipment.push({ ...auxItem, ...item, ... { equiped: true } })
    }
    const Action = (item) => {
        let auxPlayer = JSON.parse(JSON.stringify(playerSt))
        if (item.equiped === false) {
            let auxItem = auxPlayer.inventori.find(object => object.objectId === item.objectId)
            let slotEquiped = auxPlayer.equipment.find(object => object.slot === item.slot)
            if (slotEquiped !== undefined) {
                auxPlayer.equipment = auxPlayer.equipment.filter(object => object.objectId !== slotEquiped.objectId)
                auxPlayer.atq -= slotEquiped.damage
                auxPlayer.inventori.push(slotEquiped)
            }
            auxPlayer.inventori = auxPlayer.inventori.filter(object => object.objectId !== item.objectId)
            auxPlayer.equipment.push(auxItem)
            auxPlayer.atq += auxItem.damage
            setPlayerSt(auxPlayer)
            player.current = auxPlayer
        }
        if (item.equiped === true) {
            let auxItem = auxPlayer.equipment.find(object => object.objectId === item.objectId)
            auxPlayer.equipment = auxPlayer.equipment.filter(object => object.objectId !== auxItem.objectId)
            auxPlayer.atq -= auxItem.damage
            auxPlayer.inventori.push(auxItem)
            setPlayerSt(auxPlayer)
            player.current = auxPlayer
        }
    }

    return (
        <div className="df fdc br" style={{ width: '400px', height: '350px' }}>
            <p>{playerSt.name}</p>
            <p>PV: {playerSt.pv}</p>
            <p>Lvl: {playerSt.lvl}</p>
            <p>Exp: {playerSt.exp}/{50 * playerSt.lvl}</p>
            <p>Damage: {playerSt.atq}</p>
            <p>Defense: {playerSt.def}</p>
            <p>Gold: {playerSt.gold}</p>
            <p>Equipment</p>
            <Inventori inventori={equipment} type={'Equipment'} userAction={Action} />
            <p>Inventori</p>
            <Inventori inventori={inventori} type={'Inventori'} userAction={Action} />
        </div>
    )
}
export default User
