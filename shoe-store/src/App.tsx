import React from 'react';
import { Route, Routes } from 'react-router';
import { PageNotFound } from './components/404/PageNotFound';
import { AboutUs } from './components/aboutUs/AboutUs';
import Catalog from './components/catalog/Catalog';
import { Contacts } from './components/contacts/Contacts';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
