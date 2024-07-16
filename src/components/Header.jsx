import React from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
{/* import { FaMoon } from "react-icons/fa"; */ }


function Header() {
    const [theme, setTheme] = useState(false);
    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "black";
        }


    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'> badex </p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type='text' placeholder='Search' />
                <div>
                    <CiShoppingBasket className='icon' />

                    {theme ? <FaMoon className='icon' /> : <CiLight className='icon' onClick={changeTheme} />}
                </div>


            </div>
        </div>
    )
}

export default Header