import React from 'react'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import watch from '../images/watch.jpg'
import Container from '../components/Container'

const Checkout = () => {
  return (
    <>
    <Container class1="check-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-7">
                <div className="checkout-left-data">
                    <h3 className="website-name">
                        Dev Corner
                    </h3>
                    <nav style={{"--bs-breadcrumb-divider" : ">"}} aria-label="breadcrumb">
                        <ol className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <Link className='text-dark' to='/cart'>Cart</Link>
                            </li>
                            &nbsp; /
                            <li className='breadcrumb-item active' aria-current="page">
                                Information
                            </li>
                            &nbsp; /
                            <li className='breadcrumb-item active' aria-current="page">
                                Shipping
                            </li>
                            &nbsp; /
                            <li className='breadcrumb-item active' aria-current="page">
                                Payment
                            </li>
                        </ol>
                    </nav>
                    <h4 className="title">Contact Information</h4>
                    <p className="user-details">
                        Donaire2468@gmail.com
                    </p>
                    <h3 className='mb-3'>Shipping Address</h3>
                    <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                        <div className='w-100'>
                            <select name="" id="" defaultValue={""} className="form-control form-select">
                            <option value="" disabled>
                                Select Country
                            </option>
                            </select>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" className="form-control" placeholder='First Name'/>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" className="form-control" placeholder='Last Name'/>
                        </div>
                        <div className='w-100'>
                            <input type="text" className="form-control" placeholder='Address'/>
                        </div>
                        <div className='w-100'>
                            <input type="text" className="form-control" placeholder='Appartment, Suite, Etc.'/>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" className="form-control" placeholder='City'/>
                        </div>
                        <div className='flex-grow-1'>
                        <select name="" id="" defaultValue={""} className="form-control form-select">
                        <option value="" disabled>
                        Select State
                        </option>
                        </select>
                        </div>
                        <div className='flex-grow-1'>
                            <input type="text" className="form-control" placeholder='Zip Code'/>
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/cart" className='text-dark'><BiArrowBack className='me-2'/> Return to Cart</Link>
                                <Link to="/cart" className='button'>Continue to Shipping</Link>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
                <div className="col-5">
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 mb-2 justify-content-between align-items-center'>
                        <div className='w-75 d-flex gap-15'>
                            <div className='w-25 position-relative'>
                                <span style={{"top": "-8px", "right": "-8px", "width": "25px", "height": "25px"}} className='badge bg-secondary rounded-circle position-absolute p-2'>1</span>
                                <img className='img-fluid rounded' src={watch} alt="product" />
                            </div>
                            <div>
                                <h5 className="data">Hello</h5>
                                <p className="data">World</p>
                            </div>
                        </div>
                        <div>
                        <h5 className='title'>₱ 100,000</h5>
                        </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='title'>Subtotal</p>
                        <p className='data'>₱ 100,000</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0 title'>Shipping</p>
                        <p className='mb-0 data'>₱ 100,000</p>
                    </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center py-4'>
                        <h4 className='title'>Total</h4>
                        <h5 className='data'>₱ 100,000</h5>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Checkout