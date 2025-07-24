import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Categories from './components/categories/categories';
import useCart from './hooks/useCard';
import CategoryPage from './components/categories/categoryPage';
import Favorites from './components/favorites';






function App() {

  const { searchValue, onSearchValue } = useCart();






  return (

    <div className="App">
      <div className="container">



        <Header onSearchValue= {onSearchValue} searchValue={searchValue}></Header>

        <Routes>

          <Route path="/" element={<Home 
              searchValue={searchValue} 
              onSearchValue={onSearchValue}
              />} exact />

          <Route path="/categories" element={<Categories />} exact />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path='/favorites' element={<Favorites/>} exact/>


        </Routes>


      </div>

    </div>
  );

}

export default App;
