import React, { useState, useEffect } from 'react';
import './Produkter.css';

export default function FetchDatas(props) {
    const [apiData, setApiData] = useState(null);
    async function getCategory() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            console.log(apiData)
            const request = await fetch('https://api.mediehuset.net/bakeonline/categories/1', { headers: fetchHeaders });
            // const request = await fetch('https://api.mediehuset.net/bakeonline/products', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response.products.products);
        } catch (error) {
            console.log('getCategory -> Error', error);
        }
    }
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div>
            {/* <section>
                <h2 className="fetchheader">Vores Elskede Bagværk</h2>
                <p className="fetchheadertxt">Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </section> */}
            <section className="gridcontainer">
                {/*indsæt .slice(0,5) efter apiData og før map for at bestemme hvor mange film skal vises. Her er det 5.*/}
                {
                    apiData && apiData.length > 0 && apiData.map((item, i) =>
                        <div key={item.title}>
                            <img className="images2" src={item.image.fullpath} />
                            <h3 className="apiheader">{item.title}</h3>
                            <p className="api-p">{item.teaser.slice(0, 220)}</p>
                            <button className="category-button">Se mere</button>
                            <br />
                        </div>
                    )
                }
            </section>
        </div>
    )
}