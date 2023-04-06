import ShopProductCard from "./ShopProductCard";

export default function ProductsList({
    products,
    onItemQuantityChange,
    onAddItem,
    countCartItem
}) {
    return (
        <div id='products-list'>
            {products.map((product) => {
                return <ShopProductCard
                    product={product}
                    key={product.id}
                    itemId={product.id}
                    onItemQuantityChange={onItemQuantityChange}
                    onAddItem={onAddItem}
                    countCartItem={countCartItem}
                />;
            })}
        </div>
    )
}