import React from "react";

const Category = (props) => {
    return(
        <div className="category">
            <a href="#">
                <div className="img-overlay">
                    <h3>{props.category}</h3>
                    <p>{props.products}</p>
                </div>
                <img src={props.image} alt={props.description} key={props.id}/>
            </a>
        </div>
    )
}

export default Category;