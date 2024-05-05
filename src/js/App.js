import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Clients from "./Components/Clients";
import Heading from "./Components/Heading";
import Product from "./Components/Product";
import ProductsList from "./Components/ProductsList";

import database from "../database.json"
import Category from "./Components/Category";

const App = () => {
    return(
        <>
         <Header />
         <Banner />
         <Clients />
         <Heading title="Featured Products"/>
         <div className="featured-products">
             <div className="featured-container">
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
                     oldprice={"$30"}
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

             </div>
         </div>
         <Heading title="Top Categories"/>
         <div className="categories">
             <div className="categories-container">
                 <Category
                     category="Wing Chair"
                     products="3,584 Products"
                     image={database.chairs[4].image}
                 />
                 <Category
                     category="Wooden Chair"
                     products="157 Products"
                     image={database.chairs[5].image}
                 />
                 <Category
                     category="Desk Chair"
                     products="154 Products"
                     image={database.chairs[6].image}
                 />
             </div>
         </div>
         <Heading title="Our Products"/>
         <ProductsList/>


        </>
    )
}

export default App;