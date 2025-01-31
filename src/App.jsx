import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './App/Store.js'
import Cart from './components/Cart.jsx'
import DonutsList from './components/DonutsList.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <Provider store={store}>
      <Router basename="/Sweet_Donuts"> {/* Set the basename to match the GitHub Pages subdirectory */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/DonutsList" element={<DonutsList />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
