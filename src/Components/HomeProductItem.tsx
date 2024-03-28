import Product from "../Models/Product";
import "./HomeProductItem.css"

interface props {
    product:Product
}

export default function HomeProductItem({product}:props) {
    return (
        <div className="home-product-container" onClick={onClick}>
            <div className="home-product-image-container">
                <img className="home-product-image"
                     src={"data:image/png;base64," + product.imageData}/>
            </div>
            <div className="home-product-text-container">
                <h3><strong>{product.name}</strong></h3>
                <h2 className="home-product-price">{product.price}</h2>
            </div>
        </div>
    )

    function onClick() {
        console.log('clicked');
    }
}