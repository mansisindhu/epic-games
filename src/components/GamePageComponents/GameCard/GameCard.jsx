import PaymentCard from "../Paymentcard";
import styles from "./gameCard.module.css";
import LinksCard from "../LinksCard";
import SimpleAccordion from "../Accordion/Accordion";
import Specifications from "../SpecificationsCard/Specifications";
import ReviewCardContainer from "../ReviewCardContainer/ReviewCardContainer";

const GameCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <p className={styles.heading}>{data.title}</p>
            <div>
              <img src={data.thumbnail} alt="banner" />
            </div>

            <div>
              <p className={styles.description}>{data.description}</p>
            </div>

            <div className={styles.features_div}>
              <div className={styles.genres}>
                <p className={styles.features_title}>Genre</p>
                <div className={styles.features_points_div}>
                  {data.genres.map((e) => (
                    <>
                      <p className={styles.features_points}>{e} </p>
                    </>
                  ))}
                </div>
              </div>

              <div className={styles.features}>
                <p className={styles.features_title}>Features</p>
                <div className={styles.features_points_div}>
                  {data.features.map((e) => (
                    <>
                      <p className={styles.features_points}>{e} </p>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.accordion}>
              <SimpleAccordion />
            </div>

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
