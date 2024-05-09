import React from "react";
import SocialsLogo from "./SocialsLogo";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-cont">
                <div className="col-1">
                    <div className="logo">
                        <img src="../../assets/main_logo-icon.svg" alt="Comforty logo"/>
                        <p className="logo-name">Comforty</p>
                    </div>
                    <p className="desc">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                        Cras egestas purus </p>
                    <div className="socials">
                        <SocialsLogo link="https://www.facebook.com" logo={"../../assets/fb.svg"}/>
                        <SocialsLogo link="https://www.twitter.com" logo={"../../assets/twitter.svg"}/>
                        <SocialsLogo link="https://www.instagram.com" logo={"../../assets/ig.svg"}/>
                        <SocialsLogo link="https://www.pinterest.com" logo={"../../assets/pinterest.svg"}/>
                        <SocialsLogo link="https://www.youtube.com" logo={"../../assets/youtube.svg"}/>
                    </div>
                </div>
                <div className="col-2">
                    <p className="footer-list_title">Category</p>
                    <ul className="footer-list_links">
                        <a href="#" target="_blank"><li>Sofa</li></a>
                        <a href="#" target="_blank"><li>Armchair</li></a>
                        <a href="#" target="_blank"><li>Wing Chair</li></a>
                        <a href="#" target="_blank"><li>Desk Chair</li></a>
                        <a href="#" target="_blank"><li>Wooden Chair</li></a>
                        <a href="#" target="_blank"><li>Bark Bench</li></a>
                    </ul>
                </div>
                <div className="col-3">
                    <p className="footer-list_title">Support</p>
                    <ul className="footer-list_links">
                        <a href="#" target="_blank"><li>Help & Support</li></a>
                        <a href="#" target="_blank"><li>Terms & Conditions</li></a>
                        <a href="#" target="_blank"><li>Privacy Policy</li></a>
                        <a href="#" target="_blank"><li>Help</li></a>
                    </ul>
                </div>
                <div className="col-4">
                    <p className="footer-list_title">Newsletter</p>
                    <div className="footer-newsletter">
                        <div className="subscribe">
                            <input className="newsletter-input" placeholder="Your email"/>
                            <button type="submit" className="sub-btn">Subscribe</button>
                        </div>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;