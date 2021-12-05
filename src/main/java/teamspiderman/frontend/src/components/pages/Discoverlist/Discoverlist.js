import React from 'react'
import './Discoverlist.css'
import '../../../App.css'
import {Link} from 'react-router-dom'
import userImg from '../../../img/defaultUserImg.JPG'
import productImg from '../../../img/defaultproductimg.JPG'

function DiscoverList(props) {

    
    return (
        <>
            <div className='top-section section'>
                <div className='section-title'>
                    <p>All Products</p>
                </div>
                <div className='container'>
                    <div className='item'>
                        <div className='box'>
                            <Link className='link product-title' to='/'>very long product name might show in ellipsis</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                        <div className='box'>
                            <Link className='link product-title' to='/'>product name</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                        <div className='box'>
                            <Link className='link product-title' to='/'>product name</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                        <div className='box'>
                            <Link className='link product-title' to='/'>product name</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                        <div className='box'>
                            <Link className='link product-title' to='/'>product name</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                        <div className='box'>
                            <Link className='link product-title' to='/'>product name</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                        <div className='box'>
                            <Link className='link product-title' to='/'>product name</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                        <div className='box'>
                            <Link className='link product-title' to='/'>product name</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={productImg} alt='product-img'/>
                            </div>
                            <div className='subbox'>
                                <div className='user-img-container'>
                                    <img className='user-img' src={userImg} alt='user-img'/>
                                </div>
                                <Link className='link user-name' to='/'>user name</Link>
                                <div className='cost'>$100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='end-section'>
                <Link className='signup' to='/signup'>Sign up</Link>
                <p className='end-p'> or </p> 
                <Link className='signin' to='/signin'>Sign in</Link> 
                <p className='end-p'> to view more</p>
            </div>
        </>
    )
}

export default DiscoverList
