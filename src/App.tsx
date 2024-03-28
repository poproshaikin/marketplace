import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import ProductPage from "./Components/ProductPage";

function App() {

    return (
        <div>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/product/:slug" element={<ProductPage/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
