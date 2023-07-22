import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import mainbanner from "../images/main-banner.jpg"
import catbanner1 from "../images/catbanner-01.jpg"
import catbanner2 from "../images/catbanner-02.jpg"
import catbanner3 from "../images/catbanner-03.jpg"
import catbanner4 from "../images/catbanner-04.jpg"
import tv from "../images/tv.jpg"
import camera from "../images/camera.jpg"
import headphone from "../images/headphone.jpg"
import famous1 from "../images/famous-01.webp"
import famous2 from "../images/famous-02.webp"
import famous3 from "../images/famous-03.webp"
import famous4 from "../images/famous-04.webp"
import brand1 from "../images/brand-01.png"
import brand2 from "../images/brand-02.png"
import brand3 from "../images/brand-03.png"
import brand4 from "../images/brand-04.png"
import brand5 from "../images/brand-05.png"
import brand6 from "../images/brand-06.png"
import brand7 from "../images/brand-07.png"
import brand8 from "../images/brand-08.png"
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className='row'>
          <div className='col-lg-6 mb-5'>
            <div className='main-banner position-relative'>
              <img src={mainbanner} className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From ₱ 25000 or ₱200/mo. <br /> for 24 mo. Footnote*</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src={catbanner1} className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Best Sale</h4>
                  <h5>Laptop Max</h5>
                  <p>From ₱ 50000 <br /> or ₱500/mo. </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={catbanner2} className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>15% Off</h4>
                  <h5>Smart Watch 7</h5>
                  <p>Shop the latest band <br /> style and color </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={catbanner3} className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>New Arrival</h4>
                  <h5>Buy IPad Air</h5>
                  <p>From ₱ 30000 <br /> or ₱499/mo. </p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src={catbanner4} className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback &<br /> ultra-low distortion </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-lg-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  )
                }
                )}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-lg-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="tv" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src={tv} alt="tv" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={camera} alt="camera" />
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src={headphone} alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-lg-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img src={famous1} className='img-fluid' alt='famous' />
              <div className="famous-content position-absolute gap-10">
                <h5 className='text-white'>Big Screen</h5>
                <h6 className='text-white'>Smart Watch Series.</h6>
                <p className='text-white'>From ₱ 15000 or ₱ 299/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img src={famous2} className='img-fluid' alt='famous' />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness.</h6>
                <p>From ₱ 15000 or ₱ 299/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img src={famous3} className='img-fluid' alt='famous' />
              <div className="famous-content position-absolute">
                <h5>Smartphones</h5>
                <h6>Smartphone 13 Pro.</h6>
                <p>From ₱ 15000 or ₱ 299/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="famous-card position-relative">
              <img src={famous4} className='img-fluid' alt='famous' />
              <div className="famous-content position-absolute">
                <h5>Home Speaker</h5>
                <h6>Room-filling sound.</h6>
                <p>From ₱ 15000 or ₱ 299/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-lg-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
      <Container class1="marquee-wrapper py-5">
        <div className='row'>
          <div className='col-lg-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee>
                <div className='mx-4 w-25'>
                  <img src={brand1} alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src={brand2} alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src={brand3} alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src={brand4} alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src={brand5} alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src={brand6} alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src={brand7} alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src={brand8} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-lg-12'>
            <h3 className='section-heading'>Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home