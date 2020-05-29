import React, { useState, useEffect } from 'react';
import './FetchComponent.css';

export default function FetchData(props) {
    const [apiData, setApiData] = useState(null);
    async function getCategory() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            console.log(apiData)
            // const request = await fetch('https://api.mediehuset.net/bakeonline/categories', { headers: fetchHeaders });
            const request = await fetch('https://api.mediehuset.net/bakeonline/products', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response.products);
        } catch (error) {
            console.log('getCategory -> Error', error);
        }
    }
    useEffect(() => {
        getCategory()
    }, [])
    return (
        <div>
            <section>
                <h2 className="fetchheader">Nyeste Bagværk</h2>
                <p className="fetchheadertxt">Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </section>
            <section className="fetchclass">
                {/*indsæt .slice(0,5) efter apiData og før map for at bestemme hvor mange film skal vises. Her er det 5.*/}
                {
                    apiData && apiData.length > 0 && apiData.slice(0, 8).map((item, i) =>
                        <div key={item.title}>
                            <img src={item.image.fullpath} />
                            <h3 className="apiheader">{item.title.slice(0, 33)}</h3>
                            <p className="api-p">{item.teaser.slice(0, 100)}</p>
                            <button className="category-button">Se Mere</button>
                            <br />
                        </div>
                    )
                }
            </section>
        </div>
    )
}