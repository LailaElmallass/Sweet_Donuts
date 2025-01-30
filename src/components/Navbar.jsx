import React from 'react'
import {Link} from 'react-router-dom'
import donuta from '../assets/donuta.png'
import {ShoppingCart} from 'lucide-react'
import {useSelector} from 'react-redux'

function Navbar() {
    const cartItems = useSelector(state => state.cartItems.cartItems)
  return (
    <nav className='navbar d-flex justify-content-around'>
        <span className='nav-item'>
            <Link to="/"><img src={donuta} width={60}/></Link>
        </span>

        <ul className='d-flex justify-content-around'>
                <li className='nav-item mx-2'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='nav-item mx-2'>
                    <Link to="/about" className='nav-link'>About</Link>
                </li>
                <li className='nav-item mx-2'>
                    <Link to="/contact" className='nav-link'>Contact</Link>
                </li>
                <li className='nav-item mx-2'>
                    <Link to="/menu" className='nav-link'>Menu</Link>
                </li>
        </ul>
            
        <span className='nav-item'>
            <ShoppingCart size={30} color='black'/>{cartItems.length}
        </span>
    </nav>
  )
}

export default Navbar