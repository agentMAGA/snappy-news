import React from 'react';
import axios from "axios";


function App() {

  const [news, setNews] = React.useState([]);

  React.useEffect(() => {

    axios.get("https://687779a8dba809d901ef8e66.mockapi.io/test/items")
    .then((res) => {
      setNews(res.data);
    })

  }, []);

  return (
    <div className="App">
      <div className="container">

        <header className="header">

          <div className="headerLogo">
            <img src="/img/logo.svg"></img>
          </div>



          <div className="headerSearch">

            <div className='headerSearchInput'>
              <input placeholder="Поиск"></input>
            </div>

            <div className='headerInputImg'>
              <img src='/img/search.svg'></img>
            </div>

          </div>

          <div className='headerButton'>

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


        <div className='heading'>
          <h6>НОВОСТИ</h6>
        </div>

        <div className='news'>

          <div className='newsHeading'>
            <h6>ПОПУЛЯРНЫЕ <b>НОВОСТИ</b></h6>
          </div>

          <div className='newsContent'>

            <div className='newsCard'>

              <div className='newsCardLeft'>

                <div className='newsCardText'>
                  <h6>Новости IT</h6>
                  <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                </div>

                <div className='newsCardButton'>

                  <div className='button'>
                    <button>Подробнее</button>
                  </div>

                  <div className='like'>
                    <img src='./img/like.svg'></img>
                  </div>

                </div>

              </div>

              <div className='newsCardRight'>

              </div>

            </div>

            <div className='newsCard'>

              <div className='newsCardLeft'>

                <div className='newsCardText'>
                  <h6>Новости IT</h6>
                  <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                </div>

                <div className='newsCardButton'>

                  <div className='button'>
                    <button>Подробнее</button>
                  </div>

                  <div className='like'>
                    <img src='./img/like.svg'></img>
                  </div>

                </div>

              </div>

              <div className='newsCardRight'>

              </div>

            </div>

            <div className='newsCard'>

              <div className='newsCardLeft'>

                <div className='newsCardText'>
                  <h6>Новости IT</h6>
                  <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
                </div>

                <div className='newsCardButton'>

                  <div className='button'>
                    <button>Подробнее</button>
                  </div>

                  <div className='like'>
                    <img src='./img/like.svg'></img>
                  </div>

                </div>

              </div>

              <div className='newsCardRight'>

              </div>

            </div>

          </div>

        </div>


      </div>

    </div>
  );

}

export default App;
