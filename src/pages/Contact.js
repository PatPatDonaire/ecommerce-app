import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi"
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
    <Meta title="Contact"></Meta>
    <BreadCrumb title="Contact Us"></BreadCrumb>
    <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5372.523927160631!2d125.17442081631656!3d6.111589893366845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79fa093e1f16d%3A0x20387b3a230e50d1!2sPlaza%20Heneral%20Santos!5e0!3m2!1sen!2sph!4v1689580838254!5m2!1sen!2sph" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div className=''>
              <h3 className="contact-title mb-4">Contact</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div className='col-12'>
                <input type="text" className="form-control" placeholder='Name' />
                </div>
                <div className='col-12'>
                <input type="text" className="form-control" placeholder='Email'/>
                </div>
                <div className='col-12'>
                <input type="tel" className="form-control" placeholder='Mobile Number'/>
                </div>
                <div className='col-12'> 
                <textarea name="" id="" cols="4" rows="3" className="w-100 form-control" placeholder='Comments'></textarea>
                </div>
                <div className='col-12'>
                  <button className='button border-0'>Submit</button>
                </div>
              </form>
            </div>
            <div className=''>
              <h3 className="contact-title mb-4">Get in touch with Us</h3>
              <div>
                <ul className="ps-0">
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineHome className='fs-5'/>
                    <address className='mb-0'>
                    Pres. Sergio Osmeña Avenue, General Santos City, South Cotabato
                    </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiPhoneCall className='fs-5'/>
                    <a href='tel:+63 1234567890'>+63 1234567890</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <AiOutlineMail className='fs-5'/>
                    <a href='maito:donaire2468@gmail.com'>donaire2468@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiInfoCircle className='fs-5'/>
                    <p className='mb-0'>Monday to Friday 10 AM - 8 PM</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact