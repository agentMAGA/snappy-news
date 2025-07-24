import React from "react";
import { useParams } from "react-router-dom";
import { useNewsStore } from "../../store/useCounterStore";
import Card from "../card";
import styles from "../../styles/home.module.scss";

const categoryNames = {
  tech: "Технологии",
  business: "Бизнес",
  sport: "Спорт",
  science: "Наука",
  health: "Здоровье",
  entertainment: "Развлечения",
};

function CategoryPage() {
  const { category } = useParams();
  const { news, fetchNews } = useNewsStore();

  React.useEffect(() => {
    console.log("Категория изменена, вызываем fetchNews с query =", category);
    fetchNews({ query: category });
  }, [category]);
  

  return (
    <>
      <div className={styles.heading}>
        <h6>{categoryNames[category] || "Новости"}</h6>
      </div>

      <div className={styles.news}>
        <div className={styles.newsContent}>
          {news.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
