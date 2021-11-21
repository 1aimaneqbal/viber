import React from 'react'

const Navbar = ({ham, setHam}) => {
    const hamChange = () =>{
        setHam(!ham)
    }
    return (
        <div className="navbar">
        <div className="hamburger" onClick={hamChange}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
            <h3>Viber - Video Chat App</h3>
        </div>
    )
}

export default Navbar
