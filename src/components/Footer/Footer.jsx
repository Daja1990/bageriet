import React from 'react';
import Styles from "./Footer.css";
import arrow from "../pics/chevron.png";

export default function Footer(props) {
    return (
        <footer className={Styles.sitefooter}>
            <div className="blank"></div>
            <a href="#">
                <img className="footerarrow" src={arrow} />
            </a>
            <h3 className="footerheader">bageriet</h3>
            <p className="footertxt">Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer.</p>
            {props.children}
        </footer>
    )
}