import React from "react";
import database from "../../database.json"
import Product from "./Product";

const ProductsList = () => {
    return (
        <div className="our-products">
            <div className="products-container">
                <Product
                    image={database.chairs[0].image} alt={database.chairs[0].description} key={database.chairs[0].id}
                    description={database.chairs[0].description}
                    price={database.chairs[0].price}
                    url={database.chairs[0].url}
                    badge={"new-item"}
                    badgeName={"New"}
                />
                <Product
                    image={database.chairs[1].image} alt={database.chairs[1].description} key={database.chairs[1].id}
                    description={database.chairs[1].description}
                    price={database.chairs[1].price}
                    url={database.chairs[1].url}
                    badge={"sales"}
                    badgeName={"Sales"}
                />
                <Product
                    image={database.chairs[2].image} alt={database.chairs[2].description} key={database.chairs[2].id}
                    description={database.chairs[2].description}
                    price={database.chairs[2].price}
                    url={database.chairs[2].url}
                />
                <Product
                    image={database.chairs[3].image} alt={database.chairs[3].description} key={database.chairs[3].id}
                    description={database.chairs[3].description}
                    price={database.chairs[3].price}
                    url={database.chairs[3].url}
                />
                <Product
                    image={database.chairs[4].image} alt={database.chairs[4].description} key={database.chairs[4].id}
                    description={database.chairs[4].description}
                    price={database.chairs[4].price}
                    url={database.chairs[4].url}
                    badge={"new-item"}
                    badgeName={"New"}
                />
                <Product
                    image={database.chairs[7].image} alt={database.chairs[7].description} key={database.chairs[7].id}
                    description={database.chairs[7].description}
                    price={database.chairs[7].price}
                    url={database.chairs[7].url}
                    badge={"sales"}
                    badgeName={"Sales"}
                />
                <Product
                    image={database.chairs[8].image} alt={database.chairs[8].description} key={database.chairs[8].id}
                    description={database.chairs[8].description}
                    price={database.chairs[8].price}
                    url={database.chairs[8].url}
                />
                <Product
                    image={database.chairs[0].image} alt={database.chairs[0].description} key={database.chairs[0].id}
                    description={database.chairs[0].description}
                    price={database.chairs[0].price}
                    url={database.chairs[0].url}
                />
            </div>
        </div>
    )
}

export default ProductsList;