import React from "react";
import styles from "../styles/header.module.scss"
import { Link, NavLink } from "react-router-dom";


function Header({onSearchValue, searchValue}) {





    return (
        <header className={styles.header}>

            <Link to="/">
                <div className={styles.headerLogo}>
                    <img src="/img/logo.svg"></img>
                </div>
            </Link>



            <div className={styles.headerSearch}>

                <div className={styles.headerSearchInput}>
                    <input placeholder="Поиск" onChange={onSearchValue} value={searchValue}></input>
                </div>

                <div className={styles.headerInputImg}>
                    <img src='/img/search.svg'></img>
                </div>

            </div>

            <div className={styles.headerButton}>

                <NavLink to="/categories"
                 className={({ isActive }) => isActive ? styles.active : styles.categories}>

                        <img src='/img/categories.svg'></img>
                        <p>Категории</p>

                </NavLink>

                <NavLink to="/favorites"
                className={({ isActive }) => isActive ? styles.active : styles.favorites}>
                <div className={styles.favorites}>
                    <img src='/img/favoritesDef.svg'></img>
                    <p>Избранные</p>
                </div>                
                </NavLink>

            </div>



        </header>
    )
}

export default Header;