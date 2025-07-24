import React from "react";
import styles from "../../styles/categories.module.scss";
import { Link } from "react-router-dom";


function Categories() {


    return (

        <>
            <div className={styles.heading}>
                <h6>КАТЕГОРИИ</h6>
            </div>

            <div className={styles.news}>

                <div className={styles.newsContent}>

                    <Link to="/categories/technologies" className={styles.card}>
                        <p>Технологии</p>
                        <img src="/img/categories/technologies.svg" alt="" />
                    </Link>

                    <Link to="/categories/business" className={styles.card}>
                        <p>Бизнес</p>
                        <img src="/img/categories/business.svg" alt="" />
                    </Link>

                    <Link to="/categories/sport" className={styles.card}>
                        <p>Спорт</p>
                        <img src="/img/categories/sport.svg" alt="" />
                    </Link>

                    <Link to="/categories/science" className={styles.card}>
                        <p>Наука</p>
                        <img src="/img/categories/science.svg" alt="" />
                    </Link>

                    <Link to="/categories/health" className={styles.card}>
                        <p>Здоровье</p>
                        <img src="/img/categories/health.svg" alt="" />
                    </Link>

                    <Link to="/categories/entertainment" className={styles.card}>
                        <p>Развлечения</p>
                        <img src="/img/categories/entertainment.svg" alt="" />
                    </Link>

                </div>

            </div>
        </>
    )
}

export default Categories;