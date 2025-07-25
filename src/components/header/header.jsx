import React from "react";
import styles from "../../styles/header.module.scss"
import Search from "./search";
import { Link, NavLink } from "react-router-dom";
import useAppStore from "../../store/useAppStore";


function Header() {

    const {openMenu} = useAppStore();



    return (
        <header className={styles.header}>

            <Link to="/">
                <div className={styles.headerLogo}>
                    <img src="/img/logo.svg"></img>
                </div>
            </Link>

            <Search>
                
            </Search>

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

            <div className={styles.mobileActions}>
                <img src="/img/searchMob.svg" alt="Search"  />
                <img src="/img/menu.svg" alt="Menu" onClick={openMenu} />
            </div>



        </header>
    )
}

export default Header;