const ItemImg = ({ item, userAction }) => {
  let border = item.rarity === 'Legendary'? 'bLeg': item.rarity === 'Epic'? 'bEpc' : item.rarity === 'Rare'? 'bRar' : 'bCom'
  return (
    <div className={`br cp jsc aic brd5 ${border}`} style={{width: '34px', height: '34px'}} onClick={() => userAction(item)} >
      <img src={item.img} />
    </div>
  )
}

export default ItemImg