import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {HiOutlineArrowLeft} from "react-icons/hi"
import { Link } from 'react-router-dom'
import blog from "../images/blog-1.jpg"
import Container from '../components/Container'

const Singleblog = () => {
  return (
    <>
    <Meta title="Dynamic Blog Name"></Meta>
    <BreadCrumb title="Dynamic Blog Name"></BreadCrumb>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="single-blog-card">
                    <Link to="/blog" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/>Go back to Blogs</Link>
                    <h3 className='title'>
                        A Beautiful Sunday Morning Renaissance
                    </h3>
                    <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et Maloru</p>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Singleblog