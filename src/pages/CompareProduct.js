import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'
import watch from "../images/watch.jpg"
import cross from "../images/cross.svg"
import Container from '../components/Container'

const CompareProduct = () => {
  return (
    <>
    <Meta title="Compare Product"></Meta>
    <BreadCrumb title="Compare Product"></BreadCrumb>
    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src={cross} alt="cross" className='position-absolute cross img-fluid'/>
                        <div className="product-card-image">
                            <img src={watch} alt="watch" className="" />
                            <div className='compare-product-details'>
                            <h5 className="title">
                                Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                            </h5>
                            <h6 className="price mb-2 mt-3">₱ 100,000</h6>
                            <div>
                                <div className="product-detail">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                <h5>Type:</h5>
                                <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                <h5>Availabity:</h5>
                                <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                <h5>Color:</h5>
                                <Color/>
                                </div>
                                <div className="product-detail">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>M</p>
                                    <p>S</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src={cross} alt="cross" className='position-absolute cross img-fluid'/>
                        <div className="product-card-image">
                            <img src={watch} alt="watch" className="" />
                            <div className='compare-product-details'>
                            <h5 className="title">
                                Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                            </h5>
                            <h6 className="price mb-2 mt-3">₱ 100,000</h6>
                            <div>
                                <div className="product-detail">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                <h5>Type:</h5>
                                <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                <h5>Availabity:</h5>
                                <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                <h5>Color:</h5>
                                <Color/>
                                </div>
                                <div className="product-detail">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>M</p>
                                    <p>S</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src={cross} alt="cross" className='position-absolute cross img-fluid'/>
                        <div className="product-card-image">
                            <img src={watch} alt="watch" className="" />
                            <div className='compare-product-details'>
                            <h5 className="title">
                                Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                            </h5>
                            <h6 className="price mb-2 mt-3">₱ 100,000</h6>
                            <div>
                                <div className="product-detail">
                                <h5>Brand:</h5>
                                <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                <h5>Type:</h5>
                                <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                <h5>Availabity:</h5>
                                <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                <h5>Color:</h5>
                                <Color/>
                                </div>
                                <div className="product-detail">
                                <h5>Size:</h5>
                                <div className="d-flex gap-10">
                                    <p>M</p>
                                    <p>S</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default CompareProduct