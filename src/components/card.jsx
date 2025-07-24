import React from "react";
import styles from "../styles/card.module.scss";



function Card({item}) {



    return (
        <div className={styles.newsCard}>

              <div className={styles.newsCardLeft}>

                <div className={styles.newsCardText}>
                  <h6>{item.source.name}</h6>
                  <p>{item.description}</p>
                </div>

                <div className={styles.newsCardButton}>

                  <div className={styles.button}>
                    <a href={item.url}><button>Подробнее</button></a>
                  </div>

                  <div className={styles.like}>
                    <img src="/img/like.svg"></img>
                  </div>

                </div>

              </div>

              <div className={styles.newsCardRight}>

              </div>

            </div>
    )
}

export default Card;