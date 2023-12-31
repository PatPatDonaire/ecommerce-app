import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from '../images/watch.jpg'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
const Cart = () => {
  return (
    <>
    <Meta title="Cart"></Meta>
    <BreadCrumb title="Cart"></BreadCrumb>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="cart-header py-3 d-flex justify-content-between align-content-center">
                    <h4 className="cart-col-1">Product</h4>
                    <h4 className="cart-col-2">Price</h4>
                    <h4 className="cart-col-3">Quantity</h4>
                    <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                    <div className='cart-col-1 gap-15 d-flex align-items-center'>
                      <div className='w-25'>
                        <img src={watch} className='img-fluid' alt="product" />
                      </div>
                      <div className='w-75'>
                        <h5>Hello</h5>
                        <p>Color: World</p>
                        <p>Size: M</p>
                      </div>
                    </div>
                    <div className='cart-col-2'>
                      <h5 className="price">₱ 100,000</h5>
                    </div>
                    <div className='cart-col-3 d-flex align-items-center gap-15'>
                      <div>
                        <input type="number" name="" id="" min={1} max={10} className="form-control" />
                    </div>
                    <div>
                      <span className='badge badge-pill bg-danger p-2'>
                      <AiFillDelete/>
                      </span>
                    </div>
                    </div>
                    <div className='cart-col-4'>
                    <h5 className="price">₱ 100,000</h5>
                    </div>
                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                    <div className="d-flex justify-content-between align-items-baseline">
                    <Link to="/product" className='button'>Continue to Shopping</Link>
                    <div className='d-flex flex-column align-items-end'>
                      <h4>SubTotal: ₱ 100,000</h4>
                      <p>Taxes and Shipping calculated at checkout</p>
                      <Link to="/checkout" className='button'>checkout</Link>
                    </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Cart