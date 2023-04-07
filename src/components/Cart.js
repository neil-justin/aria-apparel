import CartItemsList from "./CartComponents/CartItemsList";
import CartOrderTotal from "./CartComponents/CartOrderTotal";

export default function Cart({ cart }) {
    return (
        <main id="cart-body">
            {cart.length > 0 ?
                <div>
                    <h1 id='cart-heading'>Your cart</h1>
                    <div>
                        <CartItemsList cart={cart} />
                        <CartOrderTotal orderTotal={null} />
                    </div>
                </div>
                :
                <p id='cart-empty-message'>Your cart is empty</p>
            }
        </main>
    )
}