import "./LeftSearchPanel.css"
import {config} from "../config";
import Product from "../Models/Product";

interface props {
    category:number;
    setCategory:(category:number) => void;
}
export default function LeftSearchPanel({category, setCategory}:props) {
    return (
        <div className="left-search-panel-container">
            <div className="search-title-container">
                <h3>Categories</h3>
            </div>
            <div className="search-content-container">
                <h4 onClick={() => getProductsByCategory(1)}>Apparel</h4>
                <h4 onClick={() => getProductsByCategory(2)}>Shoes</h4>
                <h4 onClick={() => getProductsByCategory(3)}>Electronics</h4>
                <h4 onClick={() => getProductsByCategory(4)}>Home & Garden</h4>
                <h4 onClick={() => getProductsByCategory(5)}>Sports & Outdoor</h4>
                <h4 onClick={() => getProductsByCategory(6)}>Toys & Games</h4>
                <h4 onClick={() => getProductsByCategory(7)}>Jewelry</h4>
                <h4 onClick={() => getProductsByCategory(8)}>Books</h4>
                <h4 onClick={() => getProductsByCategory(9)}>Miscellaneous</h4>
            </div>
        </div>
    )

    function getProductsByCategory(category:number) {
        setCategory(category);
    }
}