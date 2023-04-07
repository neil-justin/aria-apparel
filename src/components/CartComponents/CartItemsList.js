import CartItemCard from "./CartItemCard"

export default function CartItemsList({ cart }) {
    return (
        <div id='cart-items-list'>
            {cart.map((item) => {
                return (
                    <CartItemCard
                        item={item}
                        key={item.id}
                    />
                )
            })}
        </div>
    )
}