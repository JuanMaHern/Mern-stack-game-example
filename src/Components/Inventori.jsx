import { useState } from "react"
import ItemImg from "./ItemImg"

const Inventori = ({ player, type }) => {
    const [inventori, setInventori] = useState([{ name: 'item' }])
    let style = null
    if(type === 'Inventori'){style = { width: '292px', height: '129px' }}
    if(type === 'Equipment'){style = { width: '210px', height: '46px' }}
    return (
        <div className="br df pdg1 jcsb ffww" style={style}>
            {inventori.map(item => {
                return <ItemImg item={item} />
            })}</div>
    )
}

export default Inventori