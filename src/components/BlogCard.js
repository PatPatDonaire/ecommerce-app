import React from 'react'
import { Link } from 'react-router-dom'
import blog from "../images/blog-1.jpg"

const BlogCard = () => {
  return (
    <>
        <div className='blog-card'>
        <div className='card-image'>
            <img src={blog} className='img-fluid w-100' alt="blog" />
        </div>
        <div className='blog-content'>
            <p className='date'>11 June, 2023</p>
            <h5 className='title '>A Beautiful Sunday Morning Renaissance</h5>
            <p className='desc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
Section 1.10.32 of "de Finibus Bonorum et Maloru</p>
            <Link to="/blog/:id" className='button'>Read More</Link>
        </div> 
        </div>
    </>
  )
}

export default BlogCard