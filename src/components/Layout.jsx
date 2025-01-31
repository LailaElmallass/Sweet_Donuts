import React from 'react';
import '../style/Layout.css';
import Navbar from './Navbar';
import background_image3 from '../assets/background_image3.png'
import {Facebook, Instagram, Twitter} from 'lucide-react'
import DonutsList from './DonutsList';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='container'>
        <div className='content'>
          <div className='leftDiv'>
            <h1> DONUTS  WORLD </h1>
            <h3>Welcome to our delicious donuts world</h3>
            <button className='button_shop_now' onClick={() => navigate('/DonutsList')}>ORDER NOW</button>
            <div className='icons'>
              <Facebook /> 
              <Instagram />
              <Twitter />
           </div>
          </div>
          <div className='rightDiv'>
            <img src={background_image3} alt='donuts'  width={350}/>
          </div>
        </div>
    </div>
    <div>
      < DonutsList />
    </div>
    <div>
      <Contact />
    </div>
    <div>
      <div className='footer'>
        <p> 2022 Donuts World. All rights reserved.</p>
      </div>
    </div>
    </div>
    
  );
}

export default Layout;
