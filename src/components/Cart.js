import { useEffect, useState } from "react";
import CartItemsList from "./CartComponents/CartItemsList";
import CartOrderTotal from "./CartComponents/CartOrderTotal";

export default function Cart({
    cart,
    onCartItemQuantityChange,
    removeCartItem,
    countCartItem,
}) {
    const [orderTotal, setOrderTotal] = useState(0);

    function computeOrderTotal() {
        const updatedOrderTotal = cart.reduce((accumulator, item) => {
            return accumulator + (item.quantity * item.price);
        }, 0);
        setOrderTotal(updatedOrderTotal);
    }

    useEffect(() => {
        if (cart.length > 0) computeOrderTotal();
    }, [cart])
    return (
        <main id="cart-body">
            {cart.length > 0 ?
                <div>
                    <h1 id='cart-heading'>Your cart</h1>
                    <div>
                        <CartItemsList
                            cart={cart}
                            onCartItemQuantityChange={onCartItemQuantityChange}
                            removeCartItem={removeCartItem}
                            countCartItem={countCartItem}
                        />
                        <CartOrderTotal orderTotal={orderTotal} />
                    </div>
                </div>
                :
                <p id='cart-empty-message'>Your cart is empty</p>
            }
        </main>
    )
}