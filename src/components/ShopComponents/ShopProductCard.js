export default function ShopProductCard({ product }) {
    const { image, title, price } = product;

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
                    defaultValue='1'
                    className="shop-product-text shop-product-input"
                />
                <button
                    className="shop-product-text shop-product-input add-to-cart-button"
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}