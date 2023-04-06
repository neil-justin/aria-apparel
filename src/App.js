import './styles/header.css';
import './styles/index.css';
import './styles/home.css';
import './styles/shop.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartItemQuantities, setCartItemQuantities] = useState(0);
  /*
  this is the object representation of the item quantities
  that the user interacts with in the shop page
  */
  const [userItemQuantities, setUserItemQuantities] = useState({});

  function handleItemQuantityChange(event) {
    /*
    it is possible for the input's value to be NaN when the user empties
    the input. to prevent that from happening, if the input's value is not
    greater than 0, fallback to 0
  */
    const inputNumericValue = parseInt(event.target.value) > 0 ?
      parseInt(event.target.value) : 0;

    setUserItemQuantities((prevUserItemQuantities) => {
      const updatedUserItemQuantities = {
        ...prevUserItemQuantities,
        [parseInt(event.target.dataset.shopInputFor)]: inputNumericValue,
      };
      return updatedUserItemQuantities;
    })
  }

  function handleAddItem(event) {
    const chosenItemId = parseInt(event.target.dataset.buttonFor);

    // early return when the added item have a quantity of 0
    if (userItemQuantities[chosenItemId] < 1) {
      window.alert("You can't add an item with a quantity of 0");
      return;
    }

    let isItemAdded = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === chosenItemId) {
        setCart((prevCart) => {
          const updatedItem = {
            ...prevCart[i],
            quantity: prevCart[i].quantity + userItemQuantities[chosenItemId]
          }
          const updatedCart = [...prevCart.slice(0, i), updatedItem, ...prevCart.slice(i + 1)];
          return updatedCart;
        });

        isItemAdded = true;
        break;
      }
    }

    if (isItemAdded) return;

    const item = (() => {
      let temp;

      for (let i = 0; i < products.length; i++) {
        if (products[i].id === chosenItemId) {
          temp = Object.assign({}, products[i]);
          break;
        }
      }

      return temp;
    })();

    item.quantity = userItemQuantities[chosenItemId];

    setCart((prevCart) => {
      const updatedCart = [...prevCart.slice(0, prevCart.length + 1), item]
      return updatedCart;
    })
  }

  function countCartItem() {
    setCart((prevCart) => {
      const updatedCartItemQuantities = prevCart.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0);
      setCartItemQuantities(updatedCartItemQuantities);

      return prevCart;
    })
  }

  useEffect(() => {
    if (products) {
      products.forEach((product) => {
        setUserItemQuantities((prevUserItemQuantities) => {
          let updatedUserItemQuantities = Object.assign({}, prevUserItemQuantities);
          updatedUserItemQuantities[product.id] = 1;
          return updatedUserItemQuantities;
        })
      });
    }
  }, [products])

  return (
    <div className="App">
      <header id='app-header'>
        <span id="logo">Aria Apparel</span>

        <nav id='header-nav'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/shop'>Shop</NavLink></li>
            <li>
              <NavLink to='/cart'>
                Cart{' '}
                <span>
                  [{cartItemQuantities > 99 ?
                    '99+' :
                    cartItemQuantities
                  }]
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/shop'
          element={
            <Shop
              products={products}
              retrieveProducts={(products) => setProducts(products)}
              onItemQuantityChange={handleItemQuantityChange}
              onAddItem={handleAddItem}
              countCartItem={countCartItem}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;