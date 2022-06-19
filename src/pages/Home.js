import { TopNavigation } from "../components";
import section1Background from "../theme/images/hero graphics.svg";
import logo1 from "../theme/images/Logo (1).svg";
import logo2 from "../theme/images/Logo (2).svg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="ms-section-1 d-flex flex-column">
        <div className="z-index-1">
          <TopNavigation></TopNavigation>
          {/* INFO SECTION */}
          <div className="ms-hero-section d-flex flex-row">
            <div className="d-flex flex-column col-6 align-items-start ">
              <div className="ms-info-section">
                <h2 className="ms-fs-2 head">
                  Save time by building <br></br> fast with Boldo Template
                </h2>
                <p className="sub-head ms-fs-6">
                  Funding handshake buyer business-to-business metrics iPad
                  partnership. First mover advantage innovator success
                  deployment non-disclosure.
                </p>
                <div className="d-flex flex-row gap-4">
                  <Link className="ms-button ms-buy-template" to="/">
                    Buy template
                  </Link>
                  <Link className="ms-button ms-buy-explore" to="/">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column col-6 align-items-end">
              <img src={section1Background} alt="logo"></img>
            </div>
          </div>
          {/* END INFO SECTION */}

          {/* SLIDER */}
          <div className="ms-logos-slider d-flex flex-row">
            <span className="ms-shadow ms-left"></span>
            <span className="ms-shadow ms-right"></span>
            <Swiper
              spaceBetween={10}
              slidesPerView={6}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={logo1} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo2} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo1} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo2} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo1} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo2} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo1} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo2} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo1} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo2} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo1} alt="logo"></img>
              </SwiperSlide>
              <SwiperSlide>
                <img src={logo2} alt="logo"></img>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* END SLIDER */}
        </div>
        <span className="bg-cycle"></span>
      </div>
    </div>
  );
}

export default Home;
