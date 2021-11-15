import React from 'react'
import './Discoverblog.css'
import '../../../App.css'
import {Link} from 'react-router-dom'
import userImg from '../../../img/userImg.jpg'
import blogImg from '../../../img/blogImg.jpg'
import {BiRightArrow} from'react-icons/bi'
import {FiThumbsUp} from 'react-icons/fi'
import {AiFillEye} from 'react-icons/ai'

function DiscoverPage() {
    return (
        <>
            <div className='top-section section'>
                <div className='section-title'>
                    <p>New Stories</p>
                </div>
                <div className='container'>
                    <div className='item-blog'>
                        <div className='box-blog'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>very long blog title might show in ellipsis</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                        <div className='box-blog'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>blog title</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                        <div className='box-blog'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>blog title</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                        <div className='box-blog'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>blog title</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                        <div className='box-blog'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>blog title</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                        <div className='box-blog'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>blog title</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                        <div className='box-blog box-alter'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>blog title</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                        <div className='box-blog box-alter'>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>
                            <Link className='link story-title-blog' to='/'>blog title</Link>
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                        </div>
                    </div>
                </div>
                <div className='section-more'>
                    <Link className='link more-stories' to ='/'>See more stories </Link>
                    <Link className='bi-arrow' to='/'><BiRightArrow /></Link>
                </div>
            </div>
            <div className='line'></div>

            <div className='main-section section'>
                <div className='section-title'>
                    <p>All catergories</p>
                </div>
                <div className='container'>
                    <div className='main-item'>
                        <div className='box-blog'>
                            <Link className='link main-story-title' to='/'>very long blog title might show in ellipsis</Link>
                            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className='blog-img-container-blog'>
                                <img className='blog-img-blog' src={blogImg} alt='blog-img'/>
                            </div>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>   
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                            <div className='fithumbsup'>
                                <FiThumbsUp />
                                <p className='thumbsup'>100</p> 
                            </div>
                            <div className='aifilleye'>
                                <AiFillEye />
                                <p className='read'>100</p>
                            </div>
                            <button className='save'>Save</button> 
                            <Link className='catergory' to='/'>ML</Link>
                        </div>

                        <div className='box-blog'>
                            <Link className='link main-story-title' to='/'>blog title</Link>
                            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className='blog-img-container-blog'>
                                <img className='blog-img-blog' src={blogImg} alt='blog-img'/>
                            </div>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>   
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                            <div className='fithumbsup'>
                                <FiThumbsUp />
                                <p className='thumbsup'>100</p> 
                            </div>
                            <div className='aifilleye'>
                                <AiFillEye />
                                <p className='read'>100</p>
                            </div>
                            <button className='save'>Save</button> 
                            <Link className='catergory' to='/'>ML</Link>
                        </div>

                        <div className='box-blog'>
                            <Link className='link main-story-title' to='/'>blog title</Link>
                            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className='blog-img-container-blog'>
                                <img className='blog-img-blog' src={blogImg} alt='blog-img'/>
                            </div>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>   
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                            <div className='fithumbsup'>
                                <FiThumbsUp />
                                <p className='thumbsup'>100</p> 
                            </div>
                            <div className='aifilleye'>
                                <AiFillEye />
                                <p className='read'>100</p>
                            </div>
                            <button className='save'>Save</button> 
                            <Link className='catergory' to='/'>ML</Link>
                        </div>

                        <div className='box-blog'>
                            <Link className='link main-story-title' to='/'>blog title</Link>
                            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className='blog-img-container-blog'>
                                <img className='blog-img-blog' src={blogImg} alt='blog-img'/>
                            </div>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>   
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                            <div className='fithumbsup'>
                                <FiThumbsUp />
                                <p className='thumbsup'>100</p> 
                            </div>
                            <div className='aifilleye'>
                                <AiFillEye />
                                <p className='read'>100</p>
                            </div>
                            <button className='save'>Save</button> 
                            <Link className='catergory' to='/'>ML</Link>
                        </div>

                        <div className='box-blog'>
                            <Link className='link main-story-title' to='/'>blog title</Link>
                            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className='blog-img-container-blog'>
                                <img className='blog-img-blog' src={blogImg} alt='blog-img'/>
                            </div>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>   
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                            <div className='fithumbsup'>
                                <FiThumbsUp />
                                <p className='thumbsup'>100</p> 
                            </div>
                            <div className='aifilleye'>
                                <AiFillEye />
                                <p className='read'>100</p>
                            </div>
                            <button className='save'>Save</button> 
                            <Link className='catergory' to='/'>ML</Link>
                        </div>

                        <div className='box-blog'>
                            <Link className='link main-story-title' to='/'>blog title</Link>
                            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className='blog-img-container-blog'>
                                <img className='blog-img-blog' src={blogImg} alt='blog-img'/>
                            </div>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>   
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                            <div className='fithumbsup'>
                                <FiThumbsUp />
                                <p className='thumbsup'>100</p> 
                            </div>
                            <div className='aifilleye'>
                                <AiFillEye />
                                <p className='read'>100</p>
                            </div>
                            <button className='save'>Save</button> 
                            <Link className='catergory' to='/'>ML</Link>
                        </div>

                        <div className='box-blog'>
                            <Link className='link main-story-title' to='/'>blog title</Link>
                            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                            <div className='blog-img-container-blog'>
                                <img className='blog-img-blog' src={blogImg} alt='blog-img'/>
                            </div>
                            <div className='user-img-container-blog'>
                                <img className='user-img-blog' src={userImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name-blog' to='/'>user name</Link>   
                            <Link className='link story-date-blog' to='/'>Jan 01</Link>
                            <div className='fithumbsup'>
                                <FiThumbsUp />
                                <p className='thumbsup'>100</p> 
                            </div>
                            <div className='aifilleye'>
                                <AiFillEye />
                                <p className='read'>100</p>
                            </div>
                            <button className='save'>Save</button> 
                            <Link className='catergory' to='/'>ML</Link>
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

export default DiscoverPage
