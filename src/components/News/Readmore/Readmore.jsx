import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from './Readmore.module.css';
import Footer from '../../Footer/Footer'
//import SubNavbar from '../../SubNavbar';

export default function Read(){
    return(
    <div className={styles.main1}>
    <div className={styles.topbar1}>
        <div type="text" className={styles.searchnext}>
            <img className={styles.icon1} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"></img>
            <h5 className={styles.searchword2}>Search</h5>
            </div>
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


{/* <div className={styles.subnavnar}>
  <SubNavbar/>
</div> */}

<img className={styles.bigimg} src="https://cdn2.unrealengine.com/of-bird-and-cage-an-emotional-game-fused-with-metal-music-1920x1080-f508c51f648c.png"></img>
<h1 className={styles.intro1}>Experience metal music fused with an emotional game in Of Bird and Cage</h1>
<div className={styles.date}>12.16.2021</div>
<div className={styles.nameimage}>By Arnold Nesis, & Ben Shmuelof, Capricia Productions</div>

{/* <iframe className={styles.youtube} src='https://www.youtube.com/watch?v=BMqCAfjSxlk'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
/> */}


{/* <div>
            <video className="video-stream html5-main-video"  src="https://www.youtube.com/watch?v=VOQhcUKbGBk&list=PLZnxqowr6IKgOyHVYyXAQxC9EwW_UA0Pp" width="1024px" height="576px" frameborder="0" border></video>
          </div> */}
          <div className ={styles.youtube}>
          <ReactPlayer   width="87%"
            height="568px" url='https://www.youtube.com/watch?v=kPwIuqD6FcA&t=14s' />
          </div>

          <div className ={styles.video}>
          <ReactPlayer  width="92%"
            height="250px" url='https://www.youtube.com/watch?v=kPwIuqD6FcA&t=14s' />
          </div>
<div className={styles.paragraph1}>Of Bird and Cage is a twisted, dark fairy-tale game tailored to its music—a two-hour-long story of madness, violence, and trauma based on the story of ‘Beauty and the Beast’, accompanied by an astounding soundtrack composed by Arnold Nesis. The characters are voiced by Kobra Paige (Kobra and the Lotus), Davidavi 'Vidi' Dolev (Subterranean Masquerade), and Danny Worsnop (Asking Alexandria).</div>
<img  className={styles.bigimg} src="https://cdn2.unrealengine.com/of-bird-and-cage-cage-1920x1080-2e5141b4731f.jpg"></img>
<div className={styles.paragraph1}>Imagine a music video you can fully control and immerse yourself in, with events and an environment that are in perfect sync with the music, and you are able to influence the outcome. The music doesn’t change or adapt according to the game, but the player’s surroundings and the game itself will be influenced by the music and change accordingly.</div>

<img className={styles.gipimg} src="https://cdn2.unrealengine.com/of-bird-and-cage-choices-5f7c79e84547.gif"></img>
<div className={styles.paragraph1}>Our team, Capricia, was originally a metal band and not a game studio. We were doing mostly what we called “theatrical metal” which meant all our songs told stories and the music was based on what was right for the story. At the core of it, our passion was always for telling stories through music in a film, game, lyrics—anything that we felt could tell a good story. We felt, and still do, that a game can enhance a musical experience and make it something new and amazing for the listener. The whole idea in this case wasn’t to create music for the game, but the other way around—a game for the music, available for players all over the world.</div>

<div className={styles.paragraph1}>In our story in Of Bird and Cage you take the role of Gitta Barbot, a 25-year-old drug addict trying to escape the physical and mental prison of her captor—Bres Lupus, while symphonic metal leads you through a two-hour-long story of trauma, madness, and violence. It’s playing music in a brand-new way.</div>

<div className={styles.paragraph1}>Learn more about the game on Facebook, Twitter, and official website.</div>
<img className={styles.bigimg} src="https://cdn2.unrealengine.com/of-bird-and-cage-reach-1920x1080-5cca18303edd.jpg"></img>
<Footer/>
</div>

    );
}