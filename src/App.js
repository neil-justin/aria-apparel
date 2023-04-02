import './styles/header.css';
import './styles/index.css';
import './styles/home.css';
import './styles/shop.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <header id='app-header'>
        <span id="logo">Aria Apparel</span>

        <nav id='header-nav'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/shop'>Shop</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;