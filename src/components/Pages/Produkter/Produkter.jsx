import React from 'react';
import NavbarSmall from '../../NavbarSmall/NavbarSmall';
import './Produkter.css';
import FetchProducts from './FetchProducts';
import FetchList from './FetchList';

export default function Produkter(props) {
    return (
        <div>
            <NavbarSmall />
            <section className="productsec">
                <br />
                <h2 className="fetchheader">Vores Elskede Bagværk</h2>
                <p className="fetchheadertxt">Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer,<br /> når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </section>
            <section className="produktgrid">
                <FetchList />
                <FetchProducts />
            </section>
        </div>
    )
}