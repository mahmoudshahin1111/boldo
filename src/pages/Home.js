import { TopNavigation } from "../components";
import graph1 from "../theme/images/graph1.png";
import graph2 from "../theme/images/graph2.png";
import graph3 from "../theme/images/graph3.png";
import logo1 from "../theme/images/Logo (1).svg";
import logo2 from "../theme/images/Logo (2).svg";
import rightArrow from "../theme/images/rightArrow.png";
import section2card1 from "../theme/images/section2card1.png";
import section2card2 from "../theme/images/section2card2.png";
import section2card3 from "../theme/images/section2card3.png";
import section3connect from '../theme/images/section3connect.png';
import section3mark from '../theme/images/section3mark.png';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="ms-section-1">
        <span className="bg-cycle"></span>
        <TopNavigation></TopNavigation>
        {/* INFO SECTION */}
        <div className="ms-hero-section">
          <div>
            <h2>
              Save time by building <br></br> fast with Boldo Template
            </h2>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership.<br></br>First mover advantage innovator success
              deployment non-disclosure.
            </p>
            <div className="ms-buttons">
              <Link className="ms-buy-template" to="/">
                Buy template
              </Link>
              <Link className="ms-explore" to="/">
                Explore
              </Link>
            </div>
          </div>
          <div>
            <img src={graph1} alt="logo"></img>
            <div>
              <img src={graph2} alt="logo"></img>
              <img src={graph3} alt="logo"></img>
            </div>
          </div>
        </div>
        {/* END INFO SECTION */}

        {/* SLIDER */}
        <div className="ms-logos-slider">
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
      <div className="section-2">
        <p>Our Services</p>
        <h2>Handshake infographic mass market crowdfunding iteration.</h2>
        <div>
          <div>
            <img src={section2card1} alt="section-2-card-1"></img>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects <br></br> return on investment.</p>
            <Link to="/">Explore page <img src={rightArrow} alt="rightArrow"></img></Link>
          </div>
          <div>
            <img src={section2card2} alt="section-2-card-2"></img>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects <br></br> return on investment.</p>
            <Link to="/">Explore page <img src={rightArrow} alt="rightArrow"></img></Link>
          </div>
          <div>
            <img src={section2card3} alt="section-2-card-3"></img>
            <h3>Cool feature title</h3>
            <p>Learning curve network effects <br></br> return on investment.</p>
            <Link to="/">Explore page <img src={rightArrow} alt="rightArrow"></img></Link>
          </div>
        </div>
      </div>
      <div className="section-3">
        <img src={section3connect} alt="section3connect"></img>
        <div>
            <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
            <div>
              <img src={section3mark} alt="section3connect"></img>
              <span>We connect our customers with the best.</span>
            </div>
            <div>
              <img src={section3mark} alt="section3connect"></img>
              <span>Advisor success customer launch party.</span>
            </div>
            <div>
              <img src={section3mark} alt="section3connect"></img>
              <span>Business-to-consumer long tail.</span>
            </div>
            <Link to="/">Start now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
