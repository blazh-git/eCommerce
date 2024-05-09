import React from "react";
import SocialsLogo from "./SocialsLogo";

const Copyright = () => {
    return(
        <div className="copyright">
            <div className="copyright-cont">
                <p className="desc">@ 2021 - Blogy - Designed & Develop by <a href="https://zakirsoft.com" target="_blank" className="dev-link"><span className="developer">Zakirsoft</span></a></p>
                <div className="copyright-logos">
                    <SocialsLogo
                    link="https://mastercard.com"
                    logo="../../assets/mastercard.svg"
                    alt="Mastercard"
                    />
                    <SocialsLogo
                    link="https://paypal.com"
                    logo="../../assets/paypal.svg"
                    alt="PayPal"
                    />
                    <SocialsLogo
                    link="https://americanexpress.com"
                    logo="../../assets/americanexpress.svg"
                    alt="American Express"
                    />
                    <SocialsLogo
                    link="https://visa.com"
                    logo="../../assets/visa.svg"
                    alt="Visa"
                    />
                </div>
            </div>
        </div>
    )
}

export default Copyright;