import {ImSearch} from 'react-icons/im';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from './Components/Pages/Shop';
import Blog from'./Components/Pages/Blog';
import Cart from './Components/Pages/Cart';
import Login from './Components/Pages/Login';
import Signup from './Components/Pages/Signup';
import MyAccount from './Components/Pages/MyAccount';
import './App.css';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    
    <div className="App">
      <header>
        <NavBar/>
        </header>
        <main className='main'>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route  path="/shop" element={<Shop/>} />
            <Route  path="/shop/:id" element={<Shop/>} />
            <Route  path="/cart" element={<Cart/>} />
            <Route  path="/blog" element={<Blog/>} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/signup" element={<Signup/>} />
            <Route  path="/myaccount" element={<MyAccount/>} />
            </Routes>
        </main>
        <div className="utility">
          <div className="search_button">
            <span><ImSearch/></span>
          </div>
          <div className={`theme_button ${isActive ? 'active' : ''}`} onClick={handleToggle}>
            <div className='switch'>
              <div className='slider_round'></div>
            </div>
          </div>
        </div>
        <footer className='footer'>
        <p>Copyright<span>@</span>2021 | All rights Reserved</p>
        </footer>
    </div>
    
  );
}

export default App;
