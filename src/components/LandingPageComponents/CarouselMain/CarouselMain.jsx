import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./carousel.css";
import "./card.module.css";
import styles from "./card.module.css";

const titles = [
  "Ancestors: The Humankind Odyssey",
  "Manifold Garden",
  "Prey",
  "Rebel Galaxy",
  "Wolfenstein: The Old Blood",
  "Battlefield™ 2042",
];

const CarouselMain = () => {
  const data = useSelector((state) => state.landingPageData);
  const carouselData = data.filter((el) => {
    if (titles.includes(el.title)) {
      return el;
    }
    return false;
  });

  return (
    <div className={styles.main}>
      <Carousel
        autoPlay
        showStatus={false}
        stopOnHover={false}
        showThumbs={false}
        swipeable={true}
        transitionTime={500}
        infiniteLoop={true}
        interval={4000}
      >
        {carouselData.map((el, i) => {
          return (
            <Link to={`/games/${el?._id}`} key={i}>
              <div>
                <img src={el?.thumbnail} alt="" className="image" />
                <div className="legend" id="legend">
                  {el?.price.discount > 0 ? (
                    <p className="main__carousel__tag">
                      SAVE {el?.price.discount}% ON {el?.title}
                    </p>
                  ) : null}

                  <p className="main__carousel__description">
                    {el?.gameFeatures[0]}
                  </p>

                  <p className="main__carousel__tag__second">
                    Strating at ₹ {el?.price.mainPrice}
                  </p>

                  <div className="main__buy__btn">
                    <button className="main__btn">Buy Now</button>
                    <div>
                      <p className="wishlist__div">
                        <span>
                          <img
                            className="wishlist__icon"
                            src="/icons/Add_to_Wishlist.svg"
                            alt=""
                          />
                        </span>{" "}
                        ADD TO WISHLIST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </Carousel>
      <div className={styles.bars}>
        {carouselData.map((el, i) => {
          return (
            <Link key={i} to={`/games/${el?._id}`}>
              <div className={styles.bar}>
                <img src={el?.thumbnail} alt="" />
                <p>{el?.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselMain;
