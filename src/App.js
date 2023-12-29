import { Link } from "react-router-dom";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

function App() {
  return (
    <>
      <p className="heading">
        Latest <strong>Products</strong>
      </p>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <p className="heading" style={{ marginTop: 50 }}>
        Available <strong>High Paying Jobs</strong>
      </p>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">Awesome Product</h2>
                <p className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, culpa.
                </p>
                <Link to="/" className="card-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
