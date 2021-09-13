import React from 'react'
import { Link } from "react-router-dom"


const Social  = function() {
    return(
        <React.Fragment>
            <Link target="_blank" to={{ pathname: "https://www.instagram.com/"}}><i className="ico ico-ig"></i></Link>
            <Link target="_blank" href={{pathname: "https://twitter.com/"}}><i className="ico ico-tw"></i></Link>
            <Link target="_blank" href={{pathname: "https://www.facebook.com/"}}><i className="ico ico-fa"></i></Link>
        </React.Fragment>
    )
}

export default Social;

//