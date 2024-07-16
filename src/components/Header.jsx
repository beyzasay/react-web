import React from 'react'
import '../css/Header.css';


function Header() {
    return (
        <div style={{ display: 'flex', flexDiection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png.png" />
                <p className='logo-text'> badex </p>
            </div>

            <div>
                <inpıt className="search-input" type="text" />
            </div>
        </div>
    )
}

export default Header