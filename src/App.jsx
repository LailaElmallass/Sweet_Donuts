import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from'react-redux';
import store from './App/Store.js'
import Cart from './components/Cart.jsx';

function App() {
  return (
    <Provider store = {store}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Router>
    </Provider>
  )
}

export default App