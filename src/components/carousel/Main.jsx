import React from "react";
import "./styles/main.css";
import { MobileMain } from "./MobileMain";

//
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Main = () => {
  return (
    <>
      <div className="screen">
        <div className="carousel__main__div">
          <Carousel
            // autoPlay
            infiniteLoop
            showIndicators={false}
            showArrows={false}
            stopOnHover={false}
            showStatus={false}
            showThumbs={false}
          >
            <div className="main__container">
              <img
                className="main__slider__img"
                src="https://cdn2.unrealengine.com/gtao-contract-launch-epic-firstparty-desktopimage-1248x702-1248x702-512dc7744ddb.png?h=1080&resize=1&w=1920"
                alt=""
              />
              <div className="legend" id="legend">
                <p className="main__carousel__tag">SAVE 50% ON GTA V</p>

                <p className="main__carousel__decspriction">
                  Experience an all-new adventure in Los <br /> Santos
                </p>

                <p className="main__carousel__tag__second">
                  Strating at ₹1,160.72
                </p>

                <div className="main__buy__btn">
                  <button className="main__btn">Buy Now</button>
                  <div>
                    <p className="wishlist__div">
                      <span>
                        <img
                          className="wishlist__icon"
                          src="/icons/add_circle.svg"
                          alt=""
                        />
                      </span>{" "}
                      ADD TO WISHLIST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                className="main__slider__img"
                src="https://cdn2.unrealengine.com/egs-finalfantasyviiremakeintergrade-squareenix-s1-2560x1440-2560x1440-6f7b84c569fc.jpg?h=1080&resize=1&w=1920"
                alt=""
              />

              {/* ==== */}
              <div className="legend" id="legend">
                <p className="main__carousel__tag">EGS PC EXCLUSIVE</p>

                <p className="main__carousel__decspriction">
                  The timeless classic FINAL FANTASY® VII REMAKE <br />{" "}
                  INTERGRADE is reborn.
                </p>

                <p className="main__carousel__tag__second">
                  Strating at ₹1,160.72
                </p>

                <div className="main__buy__btn">
                  <button className="main__btn">Buy Now</button>
                  <div>
                    <p className="wishlist__div">
                      <span>
                        <img
                          className="wishlist__icon"
                          src="/icons/add_circle.svg"
                          alt=""
                        />
                      </span>{" "}
                      ADD TO WISHLIST
                    </p>
                  </div>
                </div>
              </div>
              {/*  ====== */}
            </div>
            <div>
              <img
                className="main__slider__img"
                src="https://cdn2.unrealengine.com/fm22-carousel-1248x702-a454ec674601.png?h=1080&resize=1&w=1920"
                alt=""
              />
              <div className="legend" id="legend">
                <p className="main__carousel__tag">Out Now</p>

                <p className="main__carousel__decspriction">
                  Take charge of the world's greatest teams in Football Manager
                  2022, <br /> available now!
                </p>

                <p className="main__carousel__tag__second">
                  Strating at ₹2,699.00
                </p>

                <div className="main__buy__btn">
                  <button className="main__btn">Buy Now</button>
                  <div>
                    <p className="wishlist__div">
                      <span>
                        <img
                          className="wishlist__icon"
                          src="/icons/add_circle.svg"
                          alt=""
                        />
                      </span>{" "}
                      ADD TO WISHLIST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                className="main__slider__img"
                src="https://cdn2.unrealengine.com/egs-homeworld-3-desktop-1248x702-1248x702-5d38d90b7d90.jpg?h=1080&resize=1&w=1920"
                alt=""
              />

              <div className="legend" id="legend">
                <p className="main__carousel__tag">Coming Soon</p>

                <p className="main__carousel__decspriction">
                  The GOTY-winning sci-fi RTS is coming to Epic Games Store.
                  Wishlist now and <br /> get ready to battle on a galactic
                  scale.
                </p>

                <p className="main__carousel__tag__second">
                  Strating at ₹1,160.72
                </p>

                <div className="main__buy__btn">
                  <button className="main__btn">Buy Now</button>
                  <div>
                    <p className="wishlist__div">
                      <span>
                        <img
                          className="wishlist__icon"
                          src="/icons/add_circle.svg"
                          alt=""
                        />
                      </span>{" "}
                      ADD TO WISHLIST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                className="main__slider__img"
                src="https://cdn2.unrealengine.com/1248x702-unbranded-key-1248x702-b308c2b42091.png?h=1080&resize=1&w=1920"
                alt=""
              />

              <div className="legend" id="legend">
                <p className="main__carousel__tag">Out Now</p>

                <p className="main__carousel__decspriction">
                  Now available! Experience gripping turn-based combat and
                  unforgettable <br /> art in this challenging RPG.
                </p>

                <p className="main__carousel__tag__second">
                  Strating at ₹709.00
                </p>

                <div className="main__buy__btn">
                  <button className="main__btn">Buy Now</button>
                  <div>
                    <p className="wishlist__div">
                      <span>
                        <img
                          className="wishlist__icon"
                          src="/icons/add_circle.svg"
                          alt=""
                        />
                      </span>{" "}
                      ADD TO WISHLIST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                className="main__slider__img"
                src="https://cdn2.unrealengine.com/19br-keyart-egs-launcher-breaker-1920x1080-alt-1920x1080-6c7888b1de81.jpg?h=1080&resize=1&w=1920"
                alt=""
              />
              <div className="legend" id="legend">
                <p className="main__carousel__tag">
                  FORTNITE CHAPTER 3 SEASON 1
                </p>

                <p className="main__carousel__decspriction">
                  The Island you once knew has been
                  <br /> turned upside down...literally.
                </p>

                <p className="main__carousel__tag__second">Free</p>

                <div className="main__buy__btn">
                  <button className="main__btn">Buy Now</button>
                  <div>
                    <p className="wishlist__div">
                      <span>
                        <img
                          className="wishlist__icon"
                          src="/icons/add_circle.svg"
                          alt=""
                        />
                      </span>{" "}
                      ADD TO WISHLIST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="carousel__main__sidebar">
          <div className="carousel__main__sidebar__div">
            <div className="sidebar__profile">
              <img
                src="https://cdn2.unrealengine.com/gtao-contract-launch-epic-firstparty-crm-portrait-1200x1600-1200x1600-f2ad602d7309.png"
                alt=""
              />
            </div>

            <div className="sidebar__desc">
              <p>Grand Theft Auto</p>
              <p>V</p>
            </div>
          </div>

          <div className="carousel__main__sidebar__div">
            <div className="sidebar__profile">
              <img
                src="https://cdn2.unrealengine.com/end-plus-portrait-offer-image-with-logo-1200x1600-1200x1600-6c375adec92d.jpg"
                alt=""
              />
            </div>

            <div className="sidebar__desc">
              <p>Final Fantasy</p>
              <p>VII</p>
            </div>
          </div>
          <div className="carousel__main__sidebar__div">
            <div className="sidebar__profile">
              <img
                src="https://cdn2.unrealengine.com/fm22-thumbnail-1200x1600-39e81db212a7.png"
                alt=""
              />
            </div>

            <div className="sidebar__desc">
              <p>Football Manager</p>
              <p>2020</p>
            </div>
          </div>
          <div className="carousel__main__sidebar__div">
            <div className="sidebar__profile">
              <img
                src="https://cdn2.unrealengine.com/egs-homeworld-3-epic-thumb-1200x1600-1200x1600-ac4f7a4b136c.jpg"
                alt=""
              />
            </div>

            <div className="sidebar__desc">
              <p>Homeworld 3</p>
              <p></p>
            </div>
          </div>
          <div className="carousel__main__sidebar__div">
            <div className="sidebar__profile">
              <img
                src="https://cdn2.unrealengine.com/315x399-branded-keyart-thumb-315x399-346c4f26c76e.png"
                alt=""
              />
            </div>

            <div className="sidebar__desc">
              <p>
                Darkest <br /> Dungeon
              </p>
              <p>II</p>
            </div>
          </div>
          <div className="carousel__main__sidebar__div">
            <div className="sidebar__profile">
              <img
                src="https://cdn2.unrealengine.com/19br-keyart-egs-launcher-fc-1200x1600-thumb-alt-1200x1600-1499c260c3d4.jpg"
                alt=""
              />
            </div>

            <div className="sidebar__desc">
              <p>Fortnite</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="render">
        <MobileMain />
      </div>
    </>
  );
};
