import React from "react";
import database from "../../database.json"

const ProductsList = () => {
    const chair = database.chairs.map(item => (
        <a href={item.url} target="_blank"> <img className="chair-img" key={item.id} src={item.image} alt={item.title}/></a>
    ))


    return (
        <div className="product">
            <div className="chairs container">
                {chair}
            </div>
        </div>
    )
}

export default ProductsList;