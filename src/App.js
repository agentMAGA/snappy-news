import React from 'react';


function App() {

  return (
    <div className="App">
      <div className="container">

        <header className="header">

          <div className="headerLogo">
            <img src="/img/logo.svg"></img>
          </div>

          <div className='headerContent'>

            <div className="headerSearch">

              <div className='headerSearchInput'>
                <input placeholder="Поиск"></input>
              </div>

              <div className='headerInputImg'>
                <img src='/img/search.svg'></img>
              </div>

            </div>

            <div className="categories">
              <img src='/img/categories.svg'></img>
              <p>Категории</p>
            </div>

            <div className='favorites'>
              <img src='/img/favorites.svg'></img>
              <p>Избранные</p>
            </div>

          </div>

        </header>


        <div className='news'>
          <h6>НОВОСТИ</h6>
        </div>

        <div className='contentNews'>
          
        </div>


      </div>

    </div>
  );

}

export default App;
