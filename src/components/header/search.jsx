import React from "react";
import useAppStore from '../../store/useAppStore';
import styles from "../../styles/search.module.scss"



function Search() {

    const { searchValue, onSearchValue } = useAppStore();


    return (
        <div className={styles.headerSearch}>

            <div className={styles.headerSearchInput}>
                <input placeholder="Поиск" onChange={onSearchValue} value={searchValue}></input>
            </div>

            <div className={styles.headerInputImg}>
                <img src='/img/search.svg'></img>
            </div>

        </div>
    )
}

export default Search;