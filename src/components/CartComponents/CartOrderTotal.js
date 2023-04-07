export default function CartOrderTotal({ orderTotal }) {
    return (
        <div id='cart-order-total-card'>
            <p className="cart-card-text">Order Summary</p>
            <p className="cart-card-text">
                Total
                <span id="cart-order-total-text" >{orderTotal}</span>
            </p>
            <button
                id='cart-checkout-button'
                className="cart-card-text"
            >
                Proceed to checkout
            </button>
            <p
                id='cart-checkout-button-reminder'
                className="cart-card-text"
            >
                This button is under construction
            </p>
        </div>
    )
}