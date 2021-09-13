import React from 'react'
import { NavLink } from 'react-router-dom';


const Nav  = function() {
    return(
        
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                {/* <li><NavLink to="/blog">Blog</NavLink></li> */}
                <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
       
    ) 
}

export default Nav;

