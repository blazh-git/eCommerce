import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Clients from "./Components/Clients";
import Heading from "./Components/Heading";
import FeaturedList from "./Components/FeaturedList";
import ProductList from "./Components/ProductsList";

import database from "../database.json"
import Category from "./Components/Category";
import Footer from "./Components/Footer";
import Copyright from "./Components/Copyright";

const App = () => {
    return(
        <>
         <Header />
         <Banner />
         <Clients />
         <Heading title="Featured Products"/>
         <div className="featured-products">
             <div className="featured-cont">
                 <FeaturedList/>
             </div>
         </div>
         <Heading title="Top Categories"/>
         <div className="categories">
             <div className="categories-cont">
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
         <ProductList/>
         <Footer />
         <Copyright/>
        </>
    )
}

export default App;