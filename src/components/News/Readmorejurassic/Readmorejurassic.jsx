import React from 'react'
import ReactPlayer from 'react-player/youtube'
import styles from './jurassic.module.css';
import Footer from '../../Footer/Footer'

export default function Readjurassic(){
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

<img className={styles.bigimg} src="https://cdn2.unrealengine.com/jurassic-world-evolution-2-early-cretaceous-pack-1920x1080-e999ad26e304.jpg?h=480&resize=1&w=854"></img>
<h1 className={styles.intro1}>Discover a stunning array of Cretaceous animals with Jurassic World Evolution 2: Early Cretaceous Pack</h1>
<div className={styles.date}>12.15.2021</div>
<div className={styles.paragraph1}>Discover a stunning array of Cretaceous animals with Jurassic World Evolution 2: Early Cretaceous Pack. Expand your park with four thrilling prehistoric species, including land dwelling dinosaurs, and marine and flying reptiles. These majestic species feel more alive than ever as they preside over territory and display brand-new behaviours when interacting with each other, fighting for dominance and reacting intelligently to the world around them.</div>

          {/* <div className ={styles.youtube}>
          <ReactPlayer   width="87%"
            height="568px" url='https://www.youtube.com/watch?v=kPwIuqD6FcA&t=14s' />
          </div>

          <div className ={styles.video}>
          <ReactPlayer  width="92%"
            height="250px" url='https://www.youtube.com/watch?v=kPwIuqD6FcA&t=14s' />
          </div> */}

<img className={styles.bigimg} src="https://cdn2.unrealengine.com/jurassic-world-evolution-2-early-cretaceous-pack-kronosaurus-1920x1080-646a87a65072.jpg"></img>

<h3 className={styles.heading}>This pack features:</h3>

<ul className={styles.list}>
  <li>Kronosaurus is named after the King of the Titans, Kronos, as it is one of the largest ever pliosaurs, a carnivorous species of marine reptiles with powerful, paddle-like flippers to help it capture its prey.</li>
  <li>Dsungaripterus is a small and stout pterosaur, easily identified by its distinctive head crest and its long, upcurved jaw. </li>
  <li>Minmi is a small, tank-like dinosaur belonging to the ankylosaur family. Unlike other ankylosaurians, it has horizontally oriented bone plates running along the sides of its back, making the Minmi well-protected against predators.</li>
  <li>Wuerhosaurus is part of the stegosaurid family of dinosaurs. It sits low to the ground in order to feed on lower vegetation and uses tail spikes as a defence against any potential predators.</li>
</ul>

<img className={styles.bigimg} src="https://cdn2.unrealengine.com/jurassic-world-evolution-2-early-cretaceous-pack-dsungaripterus-1920x1080-4a03c8fb8f65.jpg"></img>

<div className={styles.paragraph1}>Jurassic World Evolution 2: Early Cretaceous Pack is available now on the Epic Games Store.</div>
<img className={styles.bigimg} src="https://cdn2.unrealengine.com/jurassic-world-evolution-2-early-cretaceous-pack-minmi-1920x1080-8330c865d674.jpg"></img>
<div className={styles.paragraph1}>The Jurassic World Evolution 2: Early Cretaceous Pack requires the Jurassic World Evolution 2 base game to download and play. Jurassic World Evolution 2 is available on Epic Games Store.</div>
<div className={styles.gapping}></div>
<Footer/>
</div>

    );
}