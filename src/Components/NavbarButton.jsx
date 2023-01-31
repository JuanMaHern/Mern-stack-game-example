const NavbarButton = ({ option, handleClick }) => {
    return (
        <div className="cp usn bwbb tac" style={{ width: '80%', height: '20px', padding: '2px' }} onClick={() => handleClick(option)}>
            {option}
        </div>
    )
}

export default NavbarButton