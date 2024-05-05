import React from "react";

const Header = () => {
    return(
        <header>
            <div className="top-banner">
                <div className="container">
                    <p>Free shipping on all orders over $50</p>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
            <div className="main-bar">
                <div className="container">
                    <div className="logo">
                        <img src="../../assets/main_logo-icon.svg"/>
                        <p className="logo-name">Comforty</p>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search here..."/>
                        <img src="../../assets/search-icon.svg"/>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="../../assets/cart-icon_dark.svg"/>
                        </div>
                        <div className="icon">
                            <img src="../../assets/favorites-icon.svg"/>
                        </div>
                        <div className="icon">
                            <img src="../../assets/profile-icon.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-bar">
                <div className="container">
                    <ul className="nav-list">
                        <li className="nav-item categories">Categories</li>
                        <li className="nav-item active"><a>Home</a></li>
                        <li className="nav-item"><a>Shop</a></li>
                        <li className="nav-item"><a>Product</a></li>
                        <li className="nav-item"><a>Pages</a></li>
                        <li className="nav-item"><a>About</a></li>
                    </ul>
                    <p className="contact">Contact: <span>(808) 555-0111</span></p>
                </div>
            </div>
        </header>
    )
}

export default Header;