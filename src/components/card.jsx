import React from "react";
import styles from "../styles/card.module.scss";
import {useFavoritesStore} from "../store/useCounterStore";



function Card({item}) {

  // Добавление и удаление в мзббранное
  const {favorites,removeFromFavorites , addToFavorites} = useFavoritesStore();

  // Проверка добавлен ли он уже в избранное
  const isFavorite = favorites.some(fav => fav.url === item.url);

    return (
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
                    <img src={isFavorite ?  "/img/favoritesLike.svg" : "/img/favoritesDef.svg"} 
                    onClick={() => isFavorite ?  removeFromFavorites(item.id) : addToFavorites(item)}></img>
                  </div>

                </div>

              </div>

              <div className={styles.newsCardRight}>

              </div>

            </div>
    )
}

export default Card;