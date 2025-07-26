import React from "react";
import styles from "../../styles/searchMob.module.scss"
import useAppStore from "../../store/useAppStore";


function SearchMob(){
    
    const { searchValue, onSearchValue, searchOpen, closeSearch} = useAppStore();


    return (
        <div className={styles.headerSearchMob} style={searchOpen ? {display:"flex"} : {display:"none"}}>

            <div className={styles.headerInputMob}>
                <input placeholder="Поиск" onChange={onSearchValue} value={searchValue}></input>
            </div>

            <div className={styles.headerInputImg}>
                <img src='/img/search.svg' onClick={closeSearch}></img>
            </div>

        </div>
    )
}

export default SearchMob;