import Product from "../Models/Product";
import "./HomeProductItem.css"
import {config} from "../config";
import {useNavigate} from "react-router-dom";

interface props {
    product:Product
}

export default function HomeProductItem({product}:props) {
    const navigate = useNavigate();

    return (
        <div className="home-product-item-container" onClick={rerouteToProductPage}>
            <div className="home-product-item-image-container">
                <img className="home-product-item-image"
                     src={"data:image/png;base64," + product.imageData}/>
            </div>
            <div className="home-product-item-text-container">
                <h3><strong>{product.name}</strong></h3>
                <h2 className="home-product-item-price">{product.price} {config.currencyType}</h2>
            </div>
        </div>
    )

    function rerouteToProductPage() {
        navigate(`/product/${product.slug}`)
    }
}