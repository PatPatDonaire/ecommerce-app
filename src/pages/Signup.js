import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Signup = () => {
  return (
    <>
    <Meta title="Sign Up"></Meta>
    <BreadCrumb title="Sign Up"></BreadCrumb>
    <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center'>Sign Up</h3>
                    <form action='' className='d-flex flex-column gap-15'>
                    <CustomInput type="name" name='name' placeholder='Name'/>
                    <CustomInput type="email" name='email' placeholder='Email'/>
                    <CustomInput type="tel" name='mobile' placeholder='Mobile Number'/>
                    <CustomInput type="password" name='password' placeholder='Password'/>
                        <div>
                            <div>
                                <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                    <button className='button border-0' type='submit'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Container>
    </>
  )
}

export default Signup