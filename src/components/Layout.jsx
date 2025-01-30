import React from 'react';
import '../style/Layout.css';
import Navbar from './Navbar';
import background_image3 from '../assets/background_image3.png'
import {Facebook, Instagram, Twitter} from 'lucide-react'
import DonutsList from './DonutsList';

function Layout() {
  return (
    <div>
      <div className='container'>
        <Navbar />
        <div className='content'>
          <div className='leftDiv'>
            <h1> DONUTS  WORLD </h1>
            <h3>Welcome to our delicious donuts world</h3>
            <button className='button_shop_now'>ORDER NOW</button>
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
    </div>
    
  );
}

export default Layout;
