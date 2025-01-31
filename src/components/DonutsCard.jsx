import React from 'react';
import '../style/DonutsCard.css'
import {Plus} from 'lucide-react'

function DonutsCard({ ImgSrc, title, category, price, handleAdd }) {
  return (
    <div className='card'>
      <img className='card-img-top' src={ImgSrc} alt={title} />
      <h1 className='title'>{title}</h1>
      <div className='PriceCategory'>
        <p className='badge-Cat '>{category}</p>
        <p className='card-text'>{price} $</p>
      </div>
      <button className='btn' onClick={handleAdd}><Plus/>Add To Cart</button>
    </div>
  );
}

export default DonutsCard;
