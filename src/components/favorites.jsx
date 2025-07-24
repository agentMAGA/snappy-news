import React from "react";
import Card from "./card";
import styles from "../styles/favorites.module.scss";
import { useFavoritesStore } from "../store/useCounterStore";


function Favorites() {

  const { favorites, fetchFavorites } = useFavoritesStore();

  React.useEffect(() => {
    fetchFavorites();
  }, []);
  

  return (
    <>
      <div className={styles.heading}>
        <h6>Избранные</h6>
      </div>

      <div className={styles.news}>
        <div className={styles.newsContent}>
          {favorites.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
