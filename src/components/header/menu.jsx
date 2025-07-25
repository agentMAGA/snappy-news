import React from "react";
import styles from "../../styles/menu.module.scss"
import { Link } from "react-router-dom";
import useAppStore from "../../store/useAppStore";


function Menu() {

    const { isOpen,closeMenu} = useAppStore();
    return (
        <div className={styles.burgerMenu} style={isOpen ? {display:"block"} : {display:"none"}}>            
            <div className={styles['burgerMenu__header']}> 
                <img src="/img/menuExt.svg" alt="Закрыть меню" onClick={closeMenu} />
            </div>

            <div className={styles['burgerMenu__body']}>  
                <nav className={styles['burgerMenu__nav']} onClick={closeMenu}>  
                    <Link
                        to="/categories"
                        className={styles['burgerMenu__link']}    
                    >
                        <span className={styles['burgerMenu__label']}>Категории</span>
                    </Link>

                    <Link
                        to="/favorites"
                        className={styles['burgerMenu__link']}
                    >
                        <span className={styles['burgerMenu__label']}>Избранное</span>
                    </Link>
                </nav>
            </div>

            <div className={styles['burgerMenu__futer']}>
                
            </div>
        </div>

    )
}

export default Menu;