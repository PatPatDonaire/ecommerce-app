import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import menu from "../images/menu.svg"
import compare from "../images/compare.svg"
import wishlist from "../images/wishlist.svg"
import user from "../images/user.svg"
import cart from "../images/cart.svg"

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-lg-6'>
              <p className='text-white mb-0'>Free Shipping Over ₱ 100 & Free Return</p>
            </div>
            <div className='col-lg-6'>
              <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href='tel:+63 98342124522'>+63 98342124522</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-lg-2'>
              <h1>
                <Link className='text-white'>Patrick.</Link>
              </h1>
            </div>
            <div className='col-lg-5'>
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2 p-3"><BsSearch className='fs-6' /></span>
              </div>
            </div>
            <div className='col-lg-5'>
              <header className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link to="/compare-product" className='d-flex align-items-center gap-10 text-white'>
                    <img src={compare} alt="compare" />
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link>
                </div>
                <div>
                  <Link to="/wishlist" className='d-flex align-items-center gap-10 text-white'>
                    <img src={wishlist}  alt="wishlist" />
                    <p className='mb-0'>Favorite <br /> Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className='d-flex align-items-center gap-10 text-white'>
                    <img src={user}  alt="user" />
                    <p className='mb-0'>Log in <br /> Account</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                    <img src={cart}  alt="cart" />
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>₱ 100</p>
                    </div>
                  </Link>
                </div>
              </header>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={menu}/><span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blog">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header