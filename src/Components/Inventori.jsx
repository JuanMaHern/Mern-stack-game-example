import ItemImg from "./ItemImg"

const Inventori = ({ inventori, type, userAction }) => {
    let style = null
    if(type === 'Inventori'){style = { width: '280px', height: '120px' }}
    if(type === 'Equipment'){style = { width: '200px', height: '40px' }}
    return (
        <div className="br df pdg1 gp ffww brd5" style={style}>
            {inventori.map(item => {
                return <ItemImg key={item.objectId} item={item} userAction={userAction} />
            })}</div>
    )
}

export default Inventori