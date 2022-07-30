import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import Product from "./pages/Product/Product";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='product' element={<Product/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
