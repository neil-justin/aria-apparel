import ShopProductCard from "./ShopProductCard";

export default function ProductsList({ products }) {
    return (
        <div id='products-list'>
            {products.map((product, index) => {
                return <ShopProductCard product={product} key={index} />;
            })}
        </div>
    )
}