import { NavLink } from "react-router-dom";
import {FaBars, FaShoppingCart, FaTimes, FaHeart} from "react-icons/fa";
import { useState } from "react";

const TopNavbar = ()=>{

    const [active, setActive] = useState("navMenu");
    const [toggleIcon, setToggleIcon] = useState(<FaBars/>);

    const navToggle = ()=>{
        active === 'navMenu' 
        ? setActive('navMenu navActive') 
        : setActive('navMenu');

        active === ('navMenu navActive')
        ? setToggleIcon(<FaBars/>)
        : setToggleIcon(<FaTimes/>)

        // toggler Icon
        // toggleIcon === <FaBars/>
        // ? setToggleIcon(<FaTimes/>)
        // : setToggleIcon(<FaBars/>)
    }


    return (
        <>
        <nav>
            <a href="" className="logo"><img src="./images/logo.png"></img></a>
            <ul type="none" className={active}>
                <li>
                    <NavLink
                    to='/'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/about'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/shop'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                    >Shop</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/blog'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                    >Blog</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/contact'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                    >Contact</NavLink>
                </li>
                <li>
                    <NavLink
                    to='/wishlist'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink ' : 'navLink '}
                    ><FaHeart/></NavLink>
                </li>
                <li>
                    <NavLink
                    to='/cart'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink shopCart' : 'navLink shopCart'}
                    ><FaShoppingCart/></NavLink>
                </li>
            </ul>
            <div id='menu-icon' className="bgWhite" onClick={navToggle}>
                {toggleIcon}
            </div>
            
        </nav>
        </>
    );
}

export default TopNavbar;