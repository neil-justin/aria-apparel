import { NavLink } from "react-router-dom";

export default function Shop() {
    return (
        <div id="shop-body">
            <div id="shop-sidebar">
                <h2 id="shop-navbar-heading">Category</h2>
                <nav className='navbar' id="shop-navbar">
                    <ul>
                        <li><NavLink to='/shop'>All</NavLink></li>
                        <li><NavLink to='/shop/men-clothes'>Men's Clothes</NavLink></li>
                        <li><NavLink to='/shop/women-clothes'>Women's Clothes</NavLink></li>
                        <li><NavLink to='/shop/jewelry'>Jewelry</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}