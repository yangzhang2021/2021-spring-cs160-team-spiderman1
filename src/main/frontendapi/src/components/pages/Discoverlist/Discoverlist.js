import React from 'react'
import './Discoverlist.css'
import '../../../App.css'
import {Link} from 'react-router-dom'
import userImg from '../../../img/userImg.jpg'
import blogImg from '../../../img/blogImg.jpg'
import {BiRightArrow} from'react-icons/bi'

function DiscoverList() {
    return (
        <>
            <div className='top-section section'>
                <div className='section-title'>
                    <p>New Products</p>
                </div>
                <div className='container'>
                    <div className='item'>
                        <div className='box'>
                            <Link className='link product-title' to='/'>very long product name might show in ellipsis</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                <div className='section-more'>
                    <Link className='link more-stories' to ='/'>See more products </Link>
                    <Link className='bi-arrow' to='/'><BiRightArrow /></Link>
                </div>
            </div>
            <div className='line'></div>

            <div className='main-section section'>
                <div className='section-title'>
                    <p>All catergories</p>
                </div>
                <div className='container'>
                    <div className='item'>
                        <div className='box'>
                            <Link className='link product-title' to='/'>very long product name might show in ellipsis</Link>
                            <div className='product-img-containter'>
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='product-img'/>
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
                                <img className='product-img' src={blogImg} alt='blog-img'/>
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
