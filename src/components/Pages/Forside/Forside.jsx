import React from 'react';
import Slider from '../../Slider/Slider';
import FetchComponent from '../../FetchComponent/FetchComponent';
import './Forside.css';
import img1 from "../../pics/article.jpg";
import img2 from "../../pics/article2.jpg";
import img3 from "../../pics/article3.jpg";
import Newsletter from "../../pics/newsletterbgfixed.jpg";


export default function Forside(props) {
    function myAlert() {
        alert("Tak fordi du tilmeldte dig vores nyhedsbrev!");
    }
    return (
        <div>
            <Slider />
            <h2 className="clowntxt">Vi skaber lækkert! brød</h2>
            <section className="section-1">
                <article>
                    <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
                </article>
            </section>

            <section className="section-2">
                <figure>
                    <img src={img1} />
                    <figcaption>
                        <h4>KREATIVITET DYRKES</h4>
                        <p>Der er mange tilgængelige udgaver af<br /> Lorem Ipsum, men de fleste udgaver har gennemgået<br /> forandringer, når nogen har</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={img2} />
                    <figcaption>
                        <h4>VI ELSKER BRØD</h4>
                        <p>Der er mange tilgængelige udgaver af<br /> Lorem Ipsum, men de fleste udgaver har gennemgået<br /> forandringer, når nogen har</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={img3} />
                    <figcaption>
                        <h4>SANS FOR DETALJER</h4>
                        <p>Der er mange tilgængelige udgaver af<br /> Lorem Ipsum, men de fleste udgaver har gennemgået<br /> forandringer, når nogen har</p>
                    </figcaption>
                </figure>
            </section>

            <section className="nyhedsbrev">
                <img src={Newsletter} />
                <div className="wrapper">
                    <h2 className="nyhedos">Tilmeld dig vores nyhedsbrev</h2>
                    <p className="nyhedlorem">Der er mange tilgængelig udgaver af Lorem Ipsum, men de fleste udgaver</p>
                    <form method="post" action="">
                        {/* <input type="text" name="search-str" id="search-str" value="" /> */}
                        <div className="mailicon">
                            <i className="far fa-envelope"></i>
                        </div>
                        <input id="mail" className="inputnyhed" type="email" id="fname" name="fname" placeholder="Indtast din email..." />
                        <button id="send" className="nyhedbutton" type="button" onClick={() => myAlert()}>TILMELD</button>
                    </form>
                </div>
            </section>
            <FetchComponent />

        </div>
    )
}

