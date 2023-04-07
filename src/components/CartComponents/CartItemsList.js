import CartItemCard from "./CartItemCard"

export default function CartItemsList({
    cart,
    onCartItemQuantityChange,
    removeCartItem,
    countCartItem,
}) {
    return (
        <div id='cart-items-list'>
            {cart.map((item) => {
                return (
                    <CartItemCard
                        item={item}
                        itemId={item.id}
                        onCartItemQuantityChange={onCartItemQuantityChange}
                        key={item.id}
                        removeCartItem={removeCartItem}
                        countCartItem={countCartItem}
                    />
                )
            })}
        </div>
    )
}