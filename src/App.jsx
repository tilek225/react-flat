import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
        <Routes>

          <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>} />
          </Route>

        </Routes>
    </div>
  );
}

export default App;
