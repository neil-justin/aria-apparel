import './styles/header.css';
import './styles/index.css';
import './styles/home.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header id='app-header'>
        <span id="logo">Aria Apparel</span>

        <nav id='header-nav'>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
