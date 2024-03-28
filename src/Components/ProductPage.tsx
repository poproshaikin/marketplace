import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Product from "../Models/Product";
import {config} from "../config";

export default function ProductPage() {
    const {slug} = useParams();
    const formattedSlug = slug || '';

    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        getProductBySlug(formattedSlug)
            .then(response => {
                if(response !== 'Not found') {
                    setProduct(response);
                }
            })
    }, [formattedSlug]);

    if(product !== undefined) {
        return (
            <div>
                {product.name}
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

    async function getProductBySlug(slug:string) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
        }
        const url = `http://${config.serverIp}:${config.serverPort}/products/bySlug?slug=${slug}`;

        try {
            const response = await fetch(url, options);
            const data = await response.text();
            return JSON.parse(data);
        } catch {
            return null
        }
    }
}