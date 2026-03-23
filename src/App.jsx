import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './PAGES/Home.jsx';
import Products from './PAGES/Product.jsx';
import Contact from './PAGES/Contact.jsx';
import Cart from './PAGES/Cart.jsx';
import Login from './PAGES/Login.jsx';


function App() {
  return (
    <BrowserRouter>
      <div id='container'>
        <header>
          <nav>
            {/* Fix wrong tag: <image> ❌ → <img> ✔ */}
            <img 
              src='https://i.pinimg.com/474x/15/96/e3/1596e3b738d6e32dbd700844ed062488.jpg' 
              alt='logo'
              width="50"
            />

            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/contact'>Contact</Link>

            <Link to='/cart'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5"/>
                <path d="M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
              </svg>
            </Link>

            <Link to='/login'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
            </Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>

        <footer className='bg-gray-200 p-4 text-center'>
          &copy; {new Date().getFullYear()} Shopping Buddy. All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
