import styles from './News.module.css'
import Footer from '../Footer/Footer'
export default function News(){
    return(
        <div className={styles.main}>
            <div className={styles.topbar}>
                <div type="text" className={styles.search}>
                    <img className={styles.icon} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"></img>
                    <h5 className={styles.searchword}>Search</h5>
                    <div className={styles.dropdown}>
  <button className={styles.dropbtn}>News</button>
  <div className={styles.dropdowncontent}>
    <a href="#">Discover</a>
    <a href="#">Browse</a>
    <a href="#">News</a>
  </div>
    </div>


              </div>

              
                <div className={styles.tags}>
                    <a>Discovered</a>
                    <a>Browse</a>
                    <a>News</a>
                </div>
                </div>

          <div className={styles.name}>News</div>


                <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/of-bird-and-cage-live-now-on-epic-games-store-1920x1080-922da1725def.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>1H AGO</div>
               <div className={styles.intro}>Experience metal music fused with an emotional<br></br> game in Of Bird and Cage</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>


               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/the-epic-games-store-shopping-cart-is-here-1920x1080-0a7549b472a9.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>1D AGO</div>
               <div className={styles.intro}>Introducing the Epic Games Store Shopping Cart</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/rocket-league-mustang-1248x702-21a04b8c3593.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>2D AGO</div>
               <div className={styles.intro}>Two Ford Mustangs muscle into Rocket League</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/prison-architect-free-on-epic-games-until-december-16-2560x1440-c08bcc581d49.jpg?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>2D AGO</div>
               <div className={styles.intro}>Getting Started with Prison Architect: 10 Tips <br></br>and Tricks to Being the World’s Best Warden</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/the-game-awards-2021-the-winners-the-news-the-games-1920x1080-be28e3cd36b7.jpg?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>3D AGO</div>
               <div className={styles.intro}>The Game Awards 2021: the Winners, the News, the Games</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/arcadegeddons-fall-update-is-here-1920x1080-d62858e988d3.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>3D AGO</div>
               <div className={styles.intro}>Arcadegeddon’s Fall Update Is Here</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/godfall-challenger-edition-free-this-week-on-epic-games-store-1920x1080-5cc681fc44e7.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>4D AGO</div>
               <div className={styles.intro}>The brand new Godfall: Challenger Edition is the free <br></br> game of the week!</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/wolfstride-versus-1598x896-4f3d29f4c328.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>4D AGO</div>
               <div className={styles.intro}>Wolfstride comes screaming out of Brazil and onto the <br></br>Epic Games Store today</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/dying-light-2-stay-human-gameplay-2-1920x1080-64fb3eeadbf5.jpg?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>5D AGO</div>
               <div className={styles.intro}>New Dying Light 2 Stay Human Video Walks You Through<br></br> 15 Minutes of Gameplay</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>


               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/ranch-simulator-1920x1080-2c438975e7b2.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>6D AGO</div>
               <div className={styles.intro}>Prepare for Ranch Simulator’s February launch by getting to<br></br> grips with your ranching duties.</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/the-captain-available-december-3-1248x702-ba98352d2b1f.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>7D AGO</div>
               <div className={styles.intro}>SET FACES TO STUNNED: The Captain is available December 3</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/the-hunter-free-1920x1080-a571ac304e1f.jpg?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>7D AGO</div>
               <div className={styles.intro}>Experience the Thrill of the Hunt in theHunter: Call of the <br></br> Wild, Out Now and Free on Epic Games Store!</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>

               <div className={styles.line}></div>
                <div className={styles.container}>
               <img className={styles.imgbox} src="https://cdn2.unrealengine.com/battlefield-2042-guide-3840x2160-a9db886715fc.png?h=480&resize=1&w=854"></img>
               </div>
               <div className={styles.day}>7D AGO</div>
               <div className={styles.intro}>Battlefield 2042: A Beginner’s Guide</div>
               <div className={styles.read}>Read more</div>
               <div className={styles.bar2}></div>
               <div className={styles.gapping}></div>
               <Footer/>
        </div>
        
    );
}