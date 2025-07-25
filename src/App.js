import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/header';
import Home from './components/home';
import Categories from './components/categories/categories';
import CategoryPage from './components/categories/categoryPage';
import Favorites from './components/favorites';
import Menu from './components/header/menu';






function App() {







  return (

    <div className="App">
      <div className="container">


        <Menu/>
        <Header/>
        

        <Routes>

          <Route path="/" element={<Home/>} exact />
          <Route path="/categories" element={<Categories />} exact />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path='/favorites' element={<Favorites/>} exact/>

        </Routes>


      </div>

    </div>
  );

}

export default App;
