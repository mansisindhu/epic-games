import styles from './Footer.module.css'

// import "../../..//icons/facebook.svg"
export default function Footer(){
    return(
       <>
       
           <div className={styles.footer1}>
               <div className={styles.footer2}>
                   <img  className={styles.img1} src="./icons/facebook.svg"></img>
                   <img  className={styles.img2} src="./icons/twitter.svg"></img>
                   <img  className={styles.img3} src="./icons/youtube.svg"></img>
              </div>
              <div className={styles.footerright}>
                   <img  className={styles.img4} src="./icons/Vector7.svg"></img>
                   </div>
                   <div className={styles.footer12}>
               <p>Resources</p>
           </div>
                <div className={styles.footerwar}>
                <div className={styles.para}>
                    <p>Support-A-Creator</p>
                    <p>Publish on Epic Games</p>
                    <p>Careers</p>
                    </div>
                    <div className={styles.para}>
                    <p>Company</p>
                    <p>Fan Art Policy</p>
                    <p>UX Research</p>
                    </div>
                    <div className={styles.para}>
                    <p>Store EULA</p>
                    <p>Online Services</p>
                    <p>Community Rules</p>
                    </div>
                </div>

                <div className={styles.footer12}>
               <p>Made By Epic Games</p>
           </div>

           <div className={styles.footerwar}>
                <div className={styles.para}>
                    <p>Battle Breakers</p>
                    <p>Fortnite</p>
                    <p>Infinity Blade</p>
                    <p>Robo Recall</p>
                    </div>
                    <div className={styles.para}>
                    <p>Shadow Complex</p>
                    <p>Spyjinx</p>
                    <p>Unreal Tournament</p>
                    </div>
                     </div>
                        <div className={styles.line}></div>

                        <div className={styles.paragraph}>
                            <p>© 2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   </p>
                        </div>

                        <div className={styles.threeline}>
                           <a>Terms of Service</a>
                           <a>Privacy Policy</a>
                           <a>Store Refund Policy</a>
                        </div>

                        <div className={styles.lastimg}>
                            <img src="./icons/Epic_games_white.svg"></img>
                            <img src="./icons/unreal_Engine_Logo.svg"></img>
                        </div>
           </div>
         
            
       </> 
    )
}