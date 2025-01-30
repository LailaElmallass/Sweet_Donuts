import React from 'react';
import '../style/DonutsCard.css'
import {Plus} from 'lucide-react'

function DonutsCard({ ImgSrc, title, category, price }) {
  return (
    <div className='card'>
      <img className='card-img-top' src={ImgSrc} alt={title} />
      <h1 className='title'>{title}</h1>
      <div className='PriceCategory'>
        <p className='badge '>{category}</p>
        <p className='card-text'>{price} $</p>
      </div>
      <button className='btn'><Plus/>Add To Cart</button>
    </div>
  );
}

export default DonutsCard;
