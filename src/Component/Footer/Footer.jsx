import React from 'react'
import Social from '../Social/Social'

const Footer = function() {
    return(
        <div className="footer-social">
            <div className="container">
                <div className="footer-social__wrapper">
                    <div className="foooter-social__copy">© Clay Shop all rights reserved</div>
                    <div className="footer-social__icon"><Social /></div>
                </div>
            </div>
        </div>
    )
    
}

export default Footer;