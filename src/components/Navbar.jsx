import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import donuta from '../assets/donuta.png'
import {ShoppingCart} from 'lucide-react'
import {useSelector} from 'react-redux'

function Navbar() {
    const cartItems = useSelector(state => state.cartItems.cartItems) || [];
    const navigate = useNavigate();
  return (
    <nav className='navbar d-flex justify-content-around'>
        <span className='nav-item'>
            <Link to="/"><img src={donuta} width={60}/></Link>
        </span>

        <ul className='d-flex justify-content-around'>
                <li className='nav-item mx-2'>
                    <Link to="/" className='nav-link'><strong>Home</strong></Link>
                </li>
                <li className='nav-item mx-2'>
                    <Link to="/about" className='nav-link'><strong>About</strong></Link>
                </li>
                <li className='nav-item mx-2'>
                    <Link to="/contact" className='nav-link'><strong>Contact</strong></Link>
                </li>
                <li className='nav-item mx-2'>
                    <Link to="/DonutsList" className='nav-link'><strong>Menu</strong></Link>
                </li>
        </ul>
            
        <span className='nav-item d-flex'>
            <ShoppingCart size={30} color='black' onClick={() => navigate('/Cart')} /><strong className='badge bg-danger fs-9 my-1'>{cartItems.length}</strong>
        </span>
    </nav>
  )
}

export default Navbar