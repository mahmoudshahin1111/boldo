import TopNavigation from "../components/TopNavigation";
import HeroGraphics from "../theme/images/hero graphics (1).png";
import logo1 from "../theme/images/Logo (1).svg";
import logo2 from "../theme/images/Logo (2).svg";
import Logo from "../theme/images/Logo.png";
import rightArrow from "../theme/images/rightArrow.png";
import section2card1 from "../theme/images/section2card1.png";
import section2card2 from "../theme/images/section2card2.png";
import section2card3 from "../theme/images/section2card3.png";
import section3connect from "../theme/images/section3connect.png";
import section4connect2 from "../theme/images/section4connect2.png";
import section5leftArrow from "../theme/images/section5leftArrow.png";
import section5rightArrow from "../theme/images/section5rightArrow.png";
import section5avatar1 from "../theme/images/section5avatar1.png";
import section6mainImage from "../theme/images/section6mainImage.png";
import section6arrowDown from "../theme/images/section6arrowDown.png";
import section7card1 from "../theme/images/section7card1.png";
import section3mark from "../theme/images/section3mark.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "./Home.scss";
function Toggler(props) {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <p>{props.title}</p>
      <img
        className={toggled ? "ms__active" : ""}
        width="28px"
        height="28px"
        src={section6arrowDown}
        onClick={() => setToggled(!toggled)}
        alt=""
      ></img>
      <div className={toggled ? "ms__active" : ""}>{props.body}</div>
    </div>
  );
}
function Section8() {
  return (
    <div className="ms__section__8">
      <h2>
        An enterprise template to ramp <br></br> up your company website
      </h2>
      <div>
        <input placeholder="Your email address"></input>
        <button>Start now</button>
      </div>
    </div>
  );
}
function Section7() {
  return (
    <div className="ms__section__7">
      <p>Our Blog</p>
      <h2>
        Value proposition accelerator product <br></br> management venture
      </h2>
      <div>
        <div>
          <img src={section7card1} alt=""></img>
          <div>
            <span>Category</span>
            <span>November 22, 2021</span>
          </div>
          <p>
            Pitch termsheet backing <br></br> validation focus release.
          </p>
          <div>
            <img width="32px" height="32px" src={section5avatar1} alt=""></img>
            <span>Chandler Bing</span>
          </div>
        </div>
        <div>
          <img src={section7card1} alt=""></img>
          <div>
            <span>Category</span>
            <span>November 22, 2021</span>
          </div>
          <p>
            Pitch termsheet backing <br></br> validation focus release.
          </p>
          <div>
            <img width="32px" height="32px" src={section5avatar1} alt=""></img>
            <span>Chandler Bing</span>
          </div>
        </div>
        <div>
          <img src={section7card1} alt=""></img>
          <div>
            <span>Category</span>
            <span>November 22, 2021</span>
          </div>
          <p>
            Pitch termsheet backing <br></br> validation focus release.
          </p>
          <div>
            <img width="32px" height="32px" src={section5avatar1} alt=""></img>
            <span>Chandler Bing</span>
          </div>
        </div>
      </div>
      <button>Load more</button>
    </div>
  );
}
function Section6() {
  return (
    <div className="ms__section__6">
      <img src={section6mainImage} alt=""></img>
      <div>
        <h2>
          We connect our customers <br></br> with the best, and help them{" "}
          <br></br> keep up-and stay open.
        </h2>
        <div>
          <Toggler
            title="We connect our customers with the best?"
            body="test 12"
          ></Toggler>
          <Toggler
            title="Android research & development rockstar?"
            body="test 13"
          ></Toggler>
        </div>
      </div>
    </div>
  );
}
function Section5() {
  return (
    <div className="ms__section__5">
      <div>
        <h2>
          An enterprise template to ramp <br></br> up your company website
        </h2>
        <div className="ms__arrows_buttons">
          <button className="ms__switch__button">
            <img src={section5leftArrow} alt=""></img>
          </button>
          <button className="ms__switch__button">
            <img src={section5rightArrow} alt=""></img>
          </button>
        </div>
      </div>
      <div className="ms__cards__section">
        <div className="ms__card">
          <p>
            “Buyer buzz partner <br></br> network disruptive non- <br></br>{" "}
            disclosure agreement <br></br> business”
          </p>
          <div>
            <img width="58px" height="58px" src={section5avatar1} alt=""></img>
            <div>
              <p>Albus Dumbledore</p>
              <span>Manager @ Howarts</span>
            </div>
          </div>
        </div>
        <div className="ms__card">
          <p>
            “Learning curve <br></br> infrastructure value <br></br> proposition
            advisor <br></br> strategy user <br></br> experience hypotheses{" "}
            <br></br> investor.”
          </p>
          <div>
            <img width="58px" height="58px" src={section5avatar1} alt=""></img>
            <div>
              <p>Albus Dumbledore</p>
              <span>Manager @ Howarts</span>
            </div>
          </div>
        </div>
        <div className="ms__card">
          <p>
            “Buyer buzz partner <br></br> network disruptive non- <br></br>{" "}
            disclosure agreement <br></br> business”
          </p>
          <div>
            <img width="58px" height="58px" src={section5avatar1} alt=""></img>
            <div>
              <p>Albus Dumbledore</p>
              <span>Manager @ Howarts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Section4() {
  const images = [section3connect, section3connect, section4connect2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div className="ms__section__4">
      <div className="ms__info">
        <h2>
          We connect our customers <br></br> with the best, and help them{" "}
          <br></br> keep up-and stay open.
        </h2>
        <div className="ms__option" onMouseOver={() => setCurrentImageIndex(0)}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.24 14.24C23.3658 13.1142 23.9983 11.5872 23.9983 9.99504C23.9983 8.40285 23.3658 6.87588 22.24 5.75004C21.1142 4.62419 19.5872 3.9917 17.995 3.9917C16.4028 3.9917 14.8758 4.62419 13.75 5.75004L7 12.5V21H15.5L22.24 14.24Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 10L4 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.5 17H11"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>We connect our customers with the best.</span>
        </div>
        <div className="ms__option" onMouseOver={() => setCurrentImageIndex(1)}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_62_539)">
              <path
                d="M2.77502 13.6543C2.77502 13.6543 6.77502 5.6543 13.775 5.6543C20.775 5.6543 24.775 13.6543 24.775 13.6543C24.775 13.6543 20.775 21.6543 13.775 21.6543C6.77502 21.6543 2.77502 13.6543 2.77502 13.6543Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.775 16.6543C15.4319 16.6543 16.775 15.3112 16.775 13.6543C16.775 11.9974 15.4319 10.6543 13.775 10.6543C12.1182 10.6543 10.775 11.9974 10.775 13.6543C10.775 15.3112 12.1182 16.6543 13.775 16.6543Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_62_539">
                <rect
                  width="24"
                  height="24"
                  transform="translate(1.77502 1.6543)"
                />
              </clipPath>
            </defs>
          </svg>

          <span>We connect our customers with the best.</span>
        </div>
        <div className="ms__option" onMouseOver={() => setCurrentImageIndex(2)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 1V3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 21V23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.22 4.21997L5.64 5.63997"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.36 18.3601L19.78 19.7801"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 12H3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12H23"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.22 19.7801L5.64 18.3601"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.36 5.63997L19.78 4.21997"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>We connect our customers with the best.</span>
        </div>
      </div>
      <div className="ms__section__image">
        {images.map((image, i) => {
          return (
            <img
              className={currentImageIndex === i ? "ms__active" : ""}
              src={image}
              alt=""
            ></img>
          );
        })}
      </div>
    </div>
  );
}
function Section3() {
  return (
    <div className="ms__section__3">
      <img src={section3connect} alt="section3connect"></img>
      <div>
        <h2>
          We connect our customers <br></br> with the best, and help them{" "}
          <br></br> keep up-and stay open.
        </h2>
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
        <a>Start now</a>
      </div>
    </div>
  );
}
function Section2() {
  return (
    <div className="ms__section__2">
      <p>Our Services</p>
      <h2>Handshake info graphic mass market crowdfunding iteration.</h2>
      <div className="section__cards">
        <div className="ms__card">
          <img src={section2card1} alt="section-2-card-1"></img>
          <h3>Cool feature title</h3>
          <p>
            Learning curve network effects <br></br> return on investment.
          </p>
          <a>
            Explore page <img src={rightArrow} alt="rightArrow"></img>
          </a>
        </div>
        <div className="ms__card">
          <img src={section2card2} alt="section-2-card-2"></img>
          <h3>Cool feature title</h3>
          <p>
            Learning curve network effects <br></br> return on investment.
          </p>
          <a>
            Explore page <img src={rightArrow} alt="rightArrow"></img>
          </a>
        </div>
        <div className="ms__card">
          <img src={section2card3} alt="section-2-card-3"></img>
          <h3>Cool feature title</h3>
          <p>
            Learning curve network effects <br></br> return on investment.
          </p>
          <a>
            Explore page <img src={rightArrow} alt="rightArrow"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
function Section1() {
  return (
    <div className="ms__section__1">
      <TopNavigation></TopNavigation>
      {/* INFO SECTION */}
      <div className="ms__hero__section">
        <div>
          <h2>
            Save time by building <br></br> fast with Boldo Template
          </h2>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership.<br></br>First mover advantage innovator success
            deployment non-disclosure.
          </p>
          <div className="ms__buttons">
            <a className="ms__buy__template">
              Buy template
            </a>
            <a className="ms__explore">
              Explore
            </a>
          </div>
        </div>
        <div>
          <img src={HeroGraphics} alt="logo"></img>
        </div>
      </div>
      {/* END INFO SECTION */}

      {/* SLIDER */}
      <div className="ms__logos__slider">
        <span className="ms__shadow ms__left"></span>
        <span className="ms__shadow ms__right"></span>
        <Swiper
          breakpoints={{ 1200: { spaceBetween: 10, slidesPerView: 6 } }}
          spaceBetween={4}
          slidesPerView={3}
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
  );
}
function Footer() {
  return (
    <div className="ms__footer">
      <div>
        <img height="41px" width="156px" src={Logo} alt=""></img>
        <p>
          Social media validation business model <br></br> canvas graphical user
          interface launch <br></br> party creative facebook iPad twitter.
        </p>
        <p>All rights reserved.</p>
      </div>
      <div>
        <div>
          <h3>Landings</h3>
          <div>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <div>
            <p>Home</p>
            <p>
              Careers <span className="ms__badge">Hiring!</span>
            </p>
            <p>Services</p>
          </div>
        </div>
        <div>
          <h3>Landings</h3>
          <div>
            <p>Home</p>
            <p>Products</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
      <Footer></Footer>
    </div>
  );
}

export default Home;
