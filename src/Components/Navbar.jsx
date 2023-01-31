import React from 'react'
import NavbarButton from './NavbarButton'

const Navbar = ({ navBarAction }) => {
  return (
    <div className='df fdc aic br obf' style={{width: '150px', height: '100%', padding: '5px'}}>
        <h2>Mern Game</h2>
        <NavbarButton option={'User'} handleClick={navBarAction} />
        <NavbarButton option={'Battle'} handleClick={navBarAction} />
        <NavbarButton option={'Shop'} handleClick={navBarAction} />
    </div>
  )
}

export default Navbar