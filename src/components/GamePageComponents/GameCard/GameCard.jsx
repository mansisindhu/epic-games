import PaymentCard from "../Paymentcard";
import styles from "./gameCard.module.css";
import LinksCard from "../LinksCard";
import Specifications from "../SpecificationsCard/Specifications";
import ReviewCardContainer from "../ReviewCardContainer/ReviewCardContainer";
import SubNavbar from "../../SubNavbar/SubNavbar";
import Slider from "../Silder/Slider";

const GameCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <SubNavbar />
        <p className={styles.heading}>{data.title}</p>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.slider}>
              <Slider data={data.heroImages} />
            </div>

            <div>
              <p className={styles.description}>{data.description}</p>
            </div>

            <div className={styles.features_div}>
              <div className={styles.genres}>
                <p className={styles.features_title}>Genre</p>
                <div className={styles.features_points_div}>
                  {data.genres.map((e, i) => (
                    <p key={i} className={styles.features_points}>
                      {e}{" "}
                    </p>
                  ))}
                </div>
              </div>

              <div className={styles.features}>
                <p className={styles.features_title}>Features</p>
                <div className={styles.features_points_div}>
                  {data.features.map((e, i) => (
                    <p key={i} className={styles.features_points}>
                      {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* about section */}
            <div className={styles.about_div}>
              <p className={styles.game_heading}>About Game</p>
              <div className={styles.about_game}>
                <p>{data.aboutGame}</p>
              </div>

              <div className={styles.game_features_div}>
                <p className={styles.game_heading}>Game Features</p>
                <div className={styles.game_features}>
                  {data.gameFeatures.map((e, i) => (
                    <p className={styles.list} key={i}>
                      • {e}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.about_images}>
              <div className={styles.images_div}>
                <img src={data.images[0]} alt="images" />
                <img src={data.images[1]} alt="" />
              </div>
              <img src={data.images[2]} alt="" />

              <div className={styles.images_div}>
                <img src={data.images[3]} alt="" />
                <img src={data.images[4]} alt="" />
              </div>
            </div>

            {/* <div className={styles.accordion}>
              <Accordion
                image1={data.images[0]}
                image2={data.images[1]}
                image3={data.images[2]}
                image4={data.images[3]}
                image5={data.images[4]}
                image6={data.images[5]}
              />
            </div> */}

            <div className={styles.links}>
              <LinksCard />
            </div>

            <div className={styles.reviews}>
              <ReviewCardContainer data={data.reviews} />
            </div>

            <div className={styles.specifications}>
              <Specifications />
            </div>
          </div>

          <div className={styles.payment}>
            <PaymentCard
              logo={data.logo}
              discount={data.price.discount}
              price={data.price.mainPrice}
              developer={data.developer}
              publisher={data.publisher}
              releaseDate={data.releaseDate}
              platform={data.platform}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameCard;
