import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from "react-image-zoom"
import Color from '../components/Color'
import { Link } from 'react-router-dom'
import {TbGitCompare} from 'react-icons/tb'
import {AiOutlineHeart} from 'react-icons/ai'
import Container from '../components/Container'

const SingleProduct = () => {
    const props = { width: 1000, height: 600, zoomWidth: 500, img: "https://images.macrumors.com/article-new/2022/09/apple-watch-ultra-1.jpg" };
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea")
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand("copy")
        textField.remove()
    }
    return (
        <>
            <Meta title="Product Name"></Meta>
            <BreadCrumb title="Product Name"></BreadCrumb>
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom{...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div>
                                    <img src="https://images.macrumors.com/article-new/2022/09/apple-watch-ultra-1.jpg" alt="product" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://images.macrumors.com/article-new/2022/09/apple-watch-ultra-1.jpg" alt="product" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://images.macrumors.com/article-new/2022/09/apple-watch-ultra-1.jpg" alt="product" className='img-fluid' />
                                </div>
                                <div>
                                    <img src="https://images.macrumors.com/article-new/2022/09/apple-watch-ultra-1.jpg" alt="product" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className='title'>
                                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className='price'>₱ 100</p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700" />
                                        <p className='mb-0 t-review'>Based on 2 Reviews</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>
                                <div className="py-3">
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-header'> Type: </h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-header'> Brand: </h3> <p className='product-data'>Havels</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-header'> Category: </h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-header'> Tags: </h3> <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-header'> Availabity: </h3> <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-header'> Size: </h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-header'> Color: </h3> <Color/>
                                    </div>
                                    <div className='d-flex gap-10 flex-row align-items-center gap-15 mt-2 mb-3'>
                                        <h3 className='product-header'> Quantity: </h3>
                                        <div>
                                            <input type="number" className='form-control' name="" min={1} max={10} style={{"width": "75px"}} id="" />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0'>Add to Cart</button>
                                        <Link to="/signup" className='button signup'>Buy it Now</Link>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <a href=''><TbGitCompare className='fs-5 me-2'/> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=''><AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-header'> Shipping & Returns: </h3> <p className='product-data'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum dignissimos minus eaque, repellat velit, qui laudantium veritatis ipsam voluptatibus perspiciatis repellendus libero repudiandae, sed corrupti alias esse ipsum iusto magni.</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-header'> Product Link: </h3>
                                        <a href='javascript:void(0)' onClick={() => {
                                            copyToClipboard("https://images.macrumors.com/article-new/2022/09/apple-watch-ultra-1.jpg")
                                        }} >
                                            Copy to Clipboard
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, ipsum repudiandae eaque ea laborum doloremque perferendis harum neque, sunt libero iusto? Nemo labore id non et veniam voluptatem reprehenderit omnis.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            <Container id="review" class1="reviews-wrapper home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3>Reviews</h3>
                            <div className="review-inner-product">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer Review</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700" />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {
                                        orderedProduct && (
                                            <div>
                                                <a href='' className='text-dark text-decoration-underline'>Write a Review</a>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor="#ffd700" />
                                        </div>
                                        <div className='col-12'>
                                            <textarea name="" id="" cols="4" rows="3" className="w-100 form-control" placeholder='Comments'></textarea>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews">
                                    <div className="review mt-3">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Donaire</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700" />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex veritatis voluptatum debitis molestiae odit obcaecati id animi corrupti voluptas minus neque recusandae aliquid beatae ipsa corporis, modi, eos nesciunt.</p>
                                    </div>
                                    <div className="review mt-3">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className='mb-0'>Donaire</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700" />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex veritatis voluptatum debitis molestiae odit obcaecati id animi corrupti voluptas minus neque recusandae aliquid beatae ipsa corporis, modi, eos nesciunt.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h3 className='section-heading'>Our Popular Products</h3>
                        </div>
                        <div className="row">
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default SingleProduct