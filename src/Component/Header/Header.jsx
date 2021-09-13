import React from 'react'
import Social from '../Social/Social';
import CartIcon from './CartIcon';
import Nav from './Nav';


const Header  = function({cartData}) {
    return(
    <header className="header">
        <div className="container">
            <div className="header__wrapper">
                <div className="header__top">
                    <div className="logo">Clay Shop</div>
                    <div className="header__social"><Social /></div>
                    <CartIcon cartData={cartData}/>
                </div>
                <nav className="header__nav"><Nav /></nav>
            </div>
        </div>
    </header>


    )
}

export default Header;