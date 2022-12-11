import React from 'react'
import './Navbar.css'
import {AiFillApple, AiOutlineSearch} from 'react-icons/ai'
import { IconContext } from 'react-icons';

const Navbar = () => {
  return (
    <div className="navbarGrandPar">
        <div className='navbarPar'>
            <ul className='navbarList'>
                <a href='/'><li>
                    <IconContext.Provider value={{className:'Appleicon'}}>
                        <AiFillApple size={20}/>
                    </IconContext.Provider>
                    </li>
                </a>

                <a href='/'>
                    <li>Store</li>
                </a>

                <a href='/'>
                    <li>Mac</li>
                </a>

                <a href='/'>
                    <li>iPad</li>
                </a>

                <a href='/'>
                    <li>iPhone</li>
                </a>

                <a href='/'>
                    <li>Watch</li>
                </a>

                <a href='/'>
                    <li>Airpods</li>
                </a>

                <a href='/'>
                    <li>Tv & Home</li>
                </a>

                <a href='/'>
                    <li>Accessories</li>
                </a>

                <a href='/'>
                    <li>Support</li>
                </a>

                <a href='/'>
                    <li>
                    <IconContext.Provider value={{className:'searchIcon'}}>
                        <AiOutlineSearch size={20}/>
                    </IconContext.Provider>
                    </li>
                </a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
