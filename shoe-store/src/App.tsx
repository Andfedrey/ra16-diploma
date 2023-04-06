import React from 'react'
import { Route, Routes } from 'react-router'
import { PageNotFound } from './components/404/PageNotFound'
import { AboutUs } from './components/aboutUs/AboutUs'
import { Cart } from './components/cart/Cart'
import { CatalogPage } from './components/catalogPage/CatalogPage'
import { Contacts } from './components/contacts/Contacts'
import { Footer } from './components/footer/Footer'
import { Main } from './components/main/Main'
import { Navbar } from './components/navbar/Navbar'
import { Product } from './components/Product/Product'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/catalog' element={<CatalogPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/catalog/:id' element={<Product/>}/>
        <Route path='/catalog/catalog/:id' element={<Product/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
