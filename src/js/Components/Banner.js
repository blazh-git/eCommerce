import React from "react";

const Banner = () => {
    return(
        <section className="banner">
            <div className="banner-content">
                <div className="container">
                    <div className="left-column">
                        <p className="welcome">Welcome to chairy</p>
                        <h1>Best Furniture Collection for your interior.</h1>
                        <button>
                            <p>Shop now</p>
                            <img src="../../assets/arrow.svg" alt="arrow icon"/>
                        </button>
                    </div>
                    <div className="right-column">
                        <img src="../../assets/product-image.png" alt="product image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;