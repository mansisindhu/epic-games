import styles from './News.module.css'

export default function News(){
    return(
        <div className={styles.main}>
            <div className={styles.topbar}>
                <div type="text" className={styles.search}>
                    <img className={styles.icon} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"></img>
                    <h5 className={styles.searchword}>Search</h5>

                </div>
                <div className={styles.tags}>
                    <a>Discovered</a>
                    <a>Browse</a>
                    <a>News</a>
                </div>
            </div>

            <div className={styles.name}>News</div>
                <div className={styles.line}></div>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/the-epic-games-store-shopping-cart-is-here-1920x1080-0a7549b472a9.png?h=480&resize=1&w=854"></img>
               <div className={styles.day}>7D AGO</div>
               <div className={styles.intro}>Introducing the Epic Games Store Shopping Cart</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>
        </div>
    )
}