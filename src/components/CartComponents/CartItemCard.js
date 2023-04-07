import { useState } from "react";

export default function CartItemCard({ item }) {
    const { title, price, image, quantity } = item;
    const [itemQuantity, setItemQuantity] = useState(quantity);

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
                    onChange={null}
                    className='cart-card-text cart-item-input'
                />
            </div>
        </div>
    )
}