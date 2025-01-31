import React, {useState} from 'react'
import{useSelector, useDispatch} from 'react-redux' 
import DonutsCard from './DonutsCard';
import '../style/DonutsList.css';
import { addToCart } from '../features/CartSlice';
import Navbar from './Navbar';

function DonutsList() {
    const donuts = useSelector( state => state.donuts.items);
    const dispatch = useDispatch();

    function handleAdd(item) {
        dispatch(addToCart({ item, quantity: 1 }));
    }
    
    // to get filtered Categories
    const CategorieList = [...new Set(donuts.map(donut => donut.category))];

    const [categorie, setCategorie] = useState('')

    // handle Categories 
    function handleCategorie(e){
        setCategorie(e.target.value);
    }

    // Get filtered Items by Category
    const filteredItems = donuts.filter(donut => donut.category.includes(categorie))

    
  return (
    <div className='container'>
        <h1>Try Them Now </h1>
        
        {/* buttons of Categories */}
        <div className='CategoriesButton'>
            {
                CategorieList.map((category,index) => (
                    <button key={index} className='btn-Categorie' onClick={(e) => handleCategorie(e)} value={category}>{category}</button>
                ))
            }
        </div>
        <div className='donutList'>
            {filteredItems.map(donut => (
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