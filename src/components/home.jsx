import React from "react";
import styles from "../styles/home.module.scss";
import Card from './card';
import { useNewsStore } from '../store/useCounterStore';
import useAppStore from "../store/useAppStore";

function Home() {

    const { news, fetchNews, isLoading } = useNewsStore();
    const { searchValue } = useAppStore();

    React.useEffect(() => {
        fetchNews({ queries: "" });
    }, []);

    const renderItems = () => {
        if (isLoading) {
            return (
                <div className={styles.newsContent}>
                    {Array(4).fill(0).map((_, i) => (
                        <Card key={i} isLoading={true} />
                    ))}
                </div>
            );
        }

        return (
            <div className={styles.newsContent}>
                {news
                    .filter((item) =>
                        item.title?.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map((item, index) => (
                        <Card key={item.url || index} item={item} />
                    ))}
            </div>
        );
    };

    return (
        <>
            <div className={styles.heading}>
                <h6>
                    {searchValue
                        ? `Поиск по запросу: ${searchValue}`
                        : "НОВОСТИ"}
                </h6>
            </div>

            <div className={styles.news}>
                <div className={styles.newsHeading}>
                    <h6>
                        {!searchValue && <>ПОПУЛЯРНЫЕ <b>НОВОСТИ</b></>}
                    </h6>
                </div>

                {renderItems()}
            </div>
        </>
    );
}

export default Home;