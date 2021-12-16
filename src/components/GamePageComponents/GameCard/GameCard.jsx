import PaymentCard from "../Paymentcard";
import styles from "./gameCard.module.css";
import LinksCard from "../LinksCard";
import SimpleAccordion from "../Accordion/Accordion";
import Specifications from "../SpecificationsCard/Specifications";

const GameCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <p>{data.title}</p>
            <div>
              <img src={data.thumbnail} alt="banner" />
            </div>

            <div>
              <p>{data.description}</p>
            </div>

            <div className={styles.features_div}>
              <div className={styles.genres}>
                <p>Genre</p>
                {data.genres.map((e) => (
                  <>
                    <p>{e}</p>
                  </>
                ))}
              </div>

              <div className={styles.features}>
                <p>Features</p>
                {data.features.map((e) => (
                  <>
                    <p>{e}</p>
                  </>
                ))}
              </div>
            </div>

            <SimpleAccordion />

            <div className={styles.links}>
              <LinksCard />
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
