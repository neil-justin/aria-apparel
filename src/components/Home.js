import { Link, Route, Routes } from "react-router-dom";
import Shop from "./Shop";

export default function Home(
    products,
    retrieveProducts,
    onItemQuantityChange,
    onAddItem,
    countCartItem
) {
    return (
        <main id="home-main-content">
            <div id="hero">
                <h1 id="hero-heading">Welcome to Aria Apparel!</h1>
                <p id="hero-para">
                    Shop with ease and convenience at Aria Apparel. Find
                    unbeatable prices on high-quality products, all in
                    one convenient location
                </p>
                <button id='hero-button'>
                    <Link to='/shop'>
                        Shop now
                    </Link>
                </button>
            </div>

            <Routes>
                <Route
                    path='/shop'
                    element={
                        <Shop
                            products={products}
                            retrieveProducts={retrieveProducts}
                            onItemQuantityChange={onItemQuantityChange}
                            onAddItem={onAddItem}
                            countCartItem={countCartItem}
                        />
                    }
                />
            </Routes>
        </main>
    )
}