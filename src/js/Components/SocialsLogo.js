import React from "react";

const SocialsLogo = (props) => {
    return(
        <div>
            <a href={props.link} target="_blank"> <img className="socials-logo" src={props.logo} alt={props.alt}/></a>
        </div>
    )
}

export default SocialsLogo;