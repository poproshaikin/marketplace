import Product from "../Models/Product";
import {JSX, useEffect, useState} from "react";
import {config} from "../config";
import "./Home.css"
import LeftSearchPanel from "./LeftSearchPanel";
import HomeProductItem from "./HomeProductItem";

export default function Home() {
    const [prodCategory, setProdCategory] = useState(0);
    const [products, setProducts] = useState<Product[]|null>(null);

    useEffect(() => {
        updateProducts(prodCategory)
            .then(fetchedProducts => setProducts(fetchedProducts));
    }, [prodCategory]);

    if(products !== null) {
        if(products.length === 0) {
            return (
                <div>
                    <LeftSearchPanel category={prodCategory} setCategory={setProdCategory} />
                    продукты отстутсвуют
                </div>
            )
        }

        return (
            <div className="home-main-container">
                <LeftSearchPanel category={prodCategory} setCategory={setProdCategory} />
                <div className="home-product-list-container">
                    {products.map(product => {
                            return <HomeProductItem product={product}/>
                        }
                    )}
                </div>
            </div>
        );
    }

    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <LeftSearchPanel category={prodCategory} setCategory={setProdCategory} />
            Failed to load...
        </div>
    );

    async function updateProducts(prodCategory:number) {
        const url = `http://${config.serverIp}:${config.serverPort}/products/byCategory?id=${prodCategory}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.text();

            return JSON.parse(data);
        } catch {
            return null;
        }
    }
}