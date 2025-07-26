import React from "react";
import styles from "../styles/card.module.scss";
import { useFavoritesStore} from "../store/useCounterStore";
import ContentLoader from "react-content-loader"



function Card({ item , isLoading }) {

  // Добавление и удаление в мзббранное
  const { favorites, removeFromFavorites, addToFavorites } = useFavoritesStore();

  // Если это заглушка, не делаем проверку isFavorite
  const isFavorite = item ? favorites.some(fav => fav.url === item.url) : false;

  if (isLoading) {
    return (
      <ContentLoader 
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="9" y="2" rx="71" ry="71" width="315" height="184" />
      </ContentLoader>
    );
  }

  if (!item) return null;


  return (
    <>
      {isLoading ?

        // Заглушка
        (  <ContentLoader 
          speed={2}
          width={400}
          height={200}
          viewBox="0 0 400 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...item}
        >
          <rect x="6" y="6" rx="71" ry="71" width="280" height="190" />
        </ContentLoader>)

        :

        <div className={styles.newsCard}>

          <div className={styles.newsCardLeft}>

            <div className={styles.newsCardText}>
              <h6>{item.source?.name || "Источник неизвестен"}</h6>
              <p>{item.description || "Без описания"}</p>
            </div>

            <div className={styles.newsCardButton}>

              <div className={styles.button}>
                <a href={item.url}><button>Подробнее</button></a>
              </div>

              <div className={styles.like}>
                <img src={isFavorite ? "/img/favoritesLike.svg" : "/img/favoritesDef.svg"}
                  onClick={() => isFavorite ? removeFromFavorites(item.id) : addToFavorites(item)}></img>
              </div>

            </div>

          </div>

          <div className={styles.newsCardRight}>

          </div>

        </div>}
    </>
  )
}

export default Card;