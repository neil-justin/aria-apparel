import { useState } from "react";

export default function CartItemCard({
    item,
    itemId,
    onCartItemQuantityChange,
    removeCartItem,
    countCartItem,
}) {
    const { title, price, image, quantity } = item;
    const [itemQuantity, setItemQuantity] = useState(quantity);

    function handleChange(e) {
        setItemQuantity(e.target.value);
        onCartItemQuantityChange(e);
        removeCartItem();
        countCartItem();
    }

    return (
        <div className="cart-item-container">
            <img
                src={image}
                alt={title}
                className='cart-item-img'
            />
            <div>
                <p className="cart-card-text cart-item-name">{title}</p>
                <p className="cart-card-text cart-item-price">$ {price}</p>
                <input
                    type='number'
                    value={itemQuantity}
                    step='1'
                    min='0'
                    onChange={handleChange}
                    className='cart-card-text cart-item-input'
                    data-cart-input-for={itemId}
                />
            </div>
        </div>
    )
}