import React from 'react'
import "./Header.css"
import { CiBeaker1 } from 'react-icons/ci'

const Header = () => {
    return (
        <header className='header'>
            <CiBeaker1 className='icon' />

            <h5>Not Member? <span className='create'> Create Account </span></h5>
        </header>
    )
}

export default Header