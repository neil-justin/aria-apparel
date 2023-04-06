
import { useState } from "react";

export default function ShopProductCard({
    product,
    itemId,
    onItemQuantityChange,
    onAddItem,
    countCartItem
}) {
    const { image, title, price } = product;
    const [value, setValue] = useState(1);

    function handleChange(e) {
        setValue(e.target.value);
        onItemQuantityChange(e);
    }

    function handleClick(e) {
        onAddItem(e);
        countCartItem();
    }

    return (
        <div className="shop-product-container">
            <img src={image} alt={title} className='shop-product-img' />
            <div className="shop-product-details">
                <p className="shop-product-text shop-product-name">{title}</p>
                <p className="shop-product-text shop-product-price">$ {price}</p>
            </div>
            <div className="shop-product-inputs-container">
                <input
                    type="number"
                    min='1'
                    step='1'
                    className="shop-product-text shop-product-input"
                    data-shop-input-for={itemId}
                    value={value}
                    onChange={handleChange}
                />
                <button
                    className="shop-product-text shop-product-input add-to-cart-button"
                    data-button-for={itemId}
                    onClick={handleClick}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}