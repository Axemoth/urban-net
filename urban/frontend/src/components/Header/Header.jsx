import React from 'react'
import headerImage from "../../assets/Main Image.png"
import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <img src={headerImage} alt="Header" className='header-image' style={{ height: "500px", width: "1240px" }} />
        </div>
    )
}

export default Header
