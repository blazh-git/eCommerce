import React from "react";

const Heading = (props) => {
    return (
        <div className="h2-cont">
            <h2 className="cont">{props.title}</h2>
        </div>
    )
}

export default Heading;