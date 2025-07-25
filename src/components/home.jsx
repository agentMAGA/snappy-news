import React from "react";
import styles from "../styles/home.module.scss";
import Card from './card';
import { useNewsStore } from '../store/useCounterStore';
import useCard from "../store/useAppStore";

function Home() {

    const { news, fetchNews } = useNewsStore();
    const { searchValue } = useCard();

    React.useEffect(() => {
        fetchNews({ queries: "" });
    }, []);

    return (

        <>
            <div className={styles.heading}>
                <h6>{searchValue
                    ? `Поиск по запросу: ${searchValue}`
                    : <>НОВОСТИ</>
                }</h6>
            </div>

            <div className={styles.news}>

                <div className={styles.newsHeading}>
                    <h6>{searchValue
                        ? <></>
                        : <>ПОПУЛЯРНЫЕ <b>НОВОСТИ</b></>
                    }</h6>
                </div>

                <div className={styles.newsContent}>

                    {news.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item) => (
                            <Card key={item.id} item={item} />
                        ))}

                </div>

            </div>
        </>

    )
}


export default Home;