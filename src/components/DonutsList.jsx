import React from 'react'
import{useSelector, useDispatch} from 'react-redux' 
import DonutsCard from './DonutsCard';
import '../style/DonutsList.css';
import {addToCart} from '../features/CartSlice'

function DonutsList() {
    const donuts = useSelector( state => state.donuts.items);
    const dispatch = useDispatch();

    function handleAdd(item) {
        dispatch(addToCart(item))
    }

  return (
    <div className='container'>
        <h1>Try Them Now </h1>
        <div className='donutList'>
            {donuts.map(donut => (
                <DonutsCard key={donut.id}
                            ImgSrc={donut.image} 
                            title={donut.title}
                            category={donut.category}
                            price={donut.price}
                            handleAdd = {() => handleAdd(donut)}
                />
            ))}
        </div>

    </div>
  )
}

export default DonutsList