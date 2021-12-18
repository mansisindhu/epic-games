import "./styles/mobileMain.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

export const MobileMain = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider__div">
            <div className="slider__inner__div">
              <img
                src="https://cdn2.unrealengine.com/gtao-contract-launch-epic-firstparty-crm-portrait-1200x1600-1200x1600-f2ad602d7309.png?h=854&resize=1&w=640"
                alt=""
              />
            </div>
            <div className="slider__description">
              <p className="slider__img__title">EGS PC EXCLUSIVE</p>

              <p className="slider__img__desc">
                The timeless classic FINAL FANTASY® VII REMAKE <br /> INTERGRADE
                is reborn.
              </p>

              <p className="slider__img__tag">Strating at ₹1,160.72</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__div">
            <div className="slider__inner__div">
              <img
                src="https://cdn2.unrealengine.com/end-plus-portrait-offer-image-with-logo-1200x1600-1200x1600-6c375adec92d.jpg?h=854&resize=1&w=640"
                alt=""
              />
            </div>
            <div className="slider__description">
              <p className="slider__img__title">Out Now</p>

              <p className="slider__img__desc">
                Take charge of the world's greatest teams in Football Manager
                2022, <br /> available now!
              </p>

              <p className="slider__img__tag">Strating at ₹2,699.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__div">
            <div className="slider__inner__div">
              <img
                src="https://cdn2.unrealengine.com/fm22-mobile-image-1200x1600-662ab72a0671.png?h=854&resize=1&w=640"
                alt=""
              />
            </div>
            <div className="slider__description">
              <p className="slider__img__title">Coming Soon</p>

              <p className="slider__img__desc">
                The GOTY-winning sci-fi RTS is coming to Epic Games Store.
                Wishlist now and <br /> get ready to battle on a galactic scale.
              </p>

              <p className="slider__img__tag">Strating at ₹1,160.72</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__div">
            <div className="slider__inner__div">
              <img
                src="https://cdn2.unrealengine.com/egs-homeworld-3-mobile-1200x1600-1200x1600-42b6431374b4.jpg?h=854&resize=1&w=640"
                alt=""
              />
            </div>
            <div className="slider__description">
              <p className="slider__img__title">Out Now</p>

              <p className="slider__img__desc">
                Now available! Experience gripping turn-based combat and
                unforgettable <br /> art in this challenging RPG.
              </p>

              <p className="slider__img__tag">Strating at ₹709.00</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__div">
            <div className="slider__inner__div">
              <img
                src="https://cdn2.unrealengine.com/1200x1600-unbranded-mobile-1200x1600-9d1a1a4ff1e7.png?h=854&resize=1&w=640"
                alt=""
              />
            </div>
            <div className="slider__description">
              <p className="slider__img__title">Out Now</p>

              <p className="slider__img__desc">
                The Island you once knew has been turned <br /> upside
                down...literaly.
              </p>

              <p className="slider__img__tag">Free</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider__div">
            <div className="slider__inner__div">
              <img
                src="https://cdn2.unrealengine.com/19br-keyart-egs-launcher-fc-1200x1600-thumb-alt-1200x1600-1499c260c3d4.jpg?h=854&resize=1&w=640"
                alt=""
              />
            </div>
            <div className="slider__description">
              <p className="slider__img__title">Fortnite Chapter 3 Season 1</p>

              <p className="slider__img__desc">
                The Island you once knew has been turned <br /> upside
                down...literaly.
              </p>

              <p className="slider__img__tag">Free</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
