import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import newsletter from "../images/newsletter.png"

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-sm-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter' />
                <h3 className='mb-0 text-white'>Sign up for Newsletter</h3>
              </div>
            </div>
            <div className='col-sm-7'>
            <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your Email Address Here" aria-label="Your Email Address Here" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2 p-2">SUBSCRIBE</span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-sm-4'>
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className='footer-links d-flex flex-column'>
              <address className='text-white py-2 mb-1'>Brgy. Mabuhay General Santos City, <br/> South Cotabato, 9500</address>
              <a href='tel:+63 9213424245' className='text-white mt-3 d-block mb-1'>+63 9213424245</a>
              <a href='Patdonaire@gmail.com' className='text-white mt-3 d-block mb-0'>Patdonaire@gmail.com</a>
              <div className='social-icons d-flex align-items-center gap-30 mt-3'>
                <a href='#' className='text-white'><BsLinkedin className='fs-4'/></a>
                <a href='#' className='text-white'><BsGithub className='fs-4'/></a>
                <a href='#' className='text-white'><BsYoutube className='fs-4'/></a>
                <a href='#' className='text-white'><BsInstagram className='fs-4'/></a>
              </div>
            </div>
          </div>
          <div className='col-sm-3'>
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
              <Link to="/refund-policy"  className='text-white py-2 mb-1'>Refund Policy</Link>
              <Link to="/shipping-policy"  className='text-white py-2 mb-1'>Shipping Policy</Link>
              <Link to="/term-conditions"  className='text-white py-2 mb-1'>Terms & Conditions</Link>
            </div>
          </div>
          <div className='col-sm-3'>
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>About Us</Link>
              <Link className='text-white py-2 mb-1'>Faq</Link>
              <Link className='text-white py-2 mb-1'>Contact</Link>
            </div>
          </div>
          <div className='col-sm-2'>
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>Laptops</Link>
              <Link className='text-white py-2 mb-1'>Headphones</Link>
              <Link className='text-white py-2 mb-1'>Tablets</Link>
              <Link className='text-white py-2 mb-1'>Watches</Link>
            </div>
          </div>

        </div>
      </div>
      </footer>
      <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-sm-12'>
            <p className='text-center text-white'>© {new Date().getFullYear()}: Powered By Patrick Adrian B. Donaire</p>
          </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer