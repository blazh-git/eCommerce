import React from "react";

const Heading = (props) => {
    return (
        <div className="h2-container">
            <h2 className="container">{props.title}</h2>
        </div>
    )
}

export default Heading;