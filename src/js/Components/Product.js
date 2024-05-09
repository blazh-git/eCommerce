import React from "react";

const Product = (props) => {
    return (
        <div className="chair">
            <div className="chair-container">
                <a href={props.url} target="_blank">
                    <img src={props.image} alt={props.alt}/>
                    <div className="favorites">
                        <img src="../../assets/favorites-icon.svg" alt="favorites icon"/>
                    </div>
                </a>
                <div className="chair-contents">
                    <div className="chair-left-col">
                        <p className="chair-desc">{props.description}</p>
                        <p className="chair-price">{props.price}</p>
                    </div>
                    <a href={props.url} target="_blank">
                        <div className="cart-cont">
                            <img className="cart" src="../../assets/cart-icon_dark.svg" alt="cart icon"/>
                        </div>
                    </a>
                </div>
            </div>
            <div className={props.badge}>
                <span>{props.badgeName}</span>
            </div>
        </div>
    )
}

export default Product;