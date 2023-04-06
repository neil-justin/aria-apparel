import ProductsList from "./ShopComponents/ProductsList";
import React, { useState, useEffect } from "react";

export default function Shop({
    products,
    retrieveProducts,
    onItemQuantityChange,
    onAddItem,
    countCartItem,
}) {
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const fakeStoreApiResponse = await fetch('https://fakestoreapi.com/products');
            const jsonData = await fakeStoreApiResponse.json();
            return jsonData;
        }

        async function filterProducts() {
            const fetchedProducts = await fetchProducts();
            const categoriesMap = {
                "men's clothes": "men's clothing",
                "women's clothes": "women's clothing",
            };
            const filteredProducts = fetchedProducts.filter(product => {
                for (let key in categoriesMap) {
                    if (product.category === categoriesMap[key]) {
                        return true;
                    }
                }

                return false;
            });

            return filteredProducts;
        }

        async function passProducts() {
            const temp = await filterProducts();
            retrieveProducts(temp);
            setIsFetching(false);
        }

        passProducts();
    }, [])

    return (
        <main id="shop-body">
            <h1 id='shop-heading'>Products</h1>
            {isFetching ?
                <p>Fetching data...</p> :
                <ProductsList
                    products={products}
                    onItemQuantityChange={onItemQuantityChange}
                    onAddItem={onAddItem}
                    countCartItem={countCartItem}
                />
            }
        </main>
    )
}