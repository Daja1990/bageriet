import React, { useState, useEffect } from 'react';
import './Produkter.css';

export default function FetchDatas(props) {
    const [apiData, setApiData] = useState(null);
    async function getCategory() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            console.log(apiData)
            // const request = await fetch('https://api.mediehuset.net/bakeonline/categories/1', { headers: fetchHeaders });
            const request = await fetch('https://api.mediehuset.net/bakeonline/categories', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response.categories);
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
                {/*indsæt .slice(0,5) efter apiData og før map for at bestemme hvor mange film skal vises. Her er det 5.*/}
                {
                    apiData && apiData.length > 0 && apiData.map((item, i) =>
                        <div key={item.title}>
                            <p className="productlist">{item.title}</p>
                            <br />
                        </div>
                    )
                }
            </section>
        </div>
    )
}