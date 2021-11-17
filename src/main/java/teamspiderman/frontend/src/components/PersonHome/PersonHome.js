import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './DashBoard.css' 
import {Link} from 'react-router-dom'

import userImg from '../../img/userImg.jpg'


function PersonHome(){

    const [ReturnData, setReturnData] = useState([])
    // useEffect(() => {
    //    axios.get("http://localhost:8080/api/v1/user-profile").then(res=>{ // path retrieve user image
    //        console.log(res)
    //        setReturnData(res.data)
    //    })
    // }, [])


  //  return ReturnData.map((userProfile, index)=>{
        return(
            <div className="cont-main">
                <div className="server-tab" >
                    <div className='server-tab-sub'>
                        <div className ='server-tab-sub-sub'>
                            <div className='server-tab-sub-sub-sub'>
                                <div className='span-sub'>
                                    <span className='credit'>Credit</span>
                                    <span className='high'>High</span>
                                </div>
                            </div>
                                
                             <div className='server-tab-sub-sub-sub'>
                                <div className='span-sub'>
                                    <span className='test'>TEST</span>
                                    <image className='image1' alt='image'/>	
                                </div>
                            </div>
                                
                            <div className='server-tab-sub-sub-sub'>
                                <div className='span-sub'>
                                    <span className='service'>Service</span>
                                    <image className='image2'/>	
                                </div>
                            </div>
                            
                            <div className='line'></div>
                            <div className='nav-bar'>
                                <Link to ='/' id="articles" className='nav-title'>Intangable</Link>
                                <span className='vertical-bar'>|</span>
                                <Link to ='/personhome' id="articles" className='title-s'>iBlog</Link>
                                
                                <span className='vertical-bar'>|</span>
                                <Link to='/' id="articles" className='title-s'>Article</Link>
                                
                                <span className='vertical-bar'>|</span>
                                <Link to ='/' id="articles" className='title-s'>Recent Work</Link>
                                
                                <span className='vertical-bar'>|</span>
                                <Link to ='/' id="articles" className='title-s'>Selling</Link>
                                
                            </div>
                        </div>	
                     
                                
                        <div className='right-side'>
                            <p className='iblog'>iBlog</p>
                            <Link to='/dashboard' className='toDashBoard'>Go to dashboard -&gt;</Link>
                            <div className='right-side-section-div'>
                                <p className='right-side-section-p'>Lockon Stratos</p>
                                {/* <image src={`http://localhost:8080/api/v1/user-profile/${userProfile}/image/download`} /> */}
                                <p className='right-side-user-p2'>Welcome to my iBlog</p>
                            </div>
                        
                            <div className='right-side-section-div'>
                                <p className='right-side-section-p'>Contact</p>
                                <p className='right-side-section-p2'>Phone: XXX-XXX-XXXX<br/><br/>
                                Email: Celestial_Being@gmail.com</p>
                            </div>
                                
                            <div className='right-side-section-div'>
                                <p className='right-side-section-p'>Selling</p>
    
                                <div className='ilist-left'>
                                <image className='image4' alt='image'/>	
                                <br/>
                                <span className='item-price'>$180</span>
                                <del className='discount'>$200<br/>10%off</del>
                                <p className='product'>GN Missile Pod</p>
                            </div>
                        
                            <div className='ilist-left'>
                                <image className='image5' alt='image'/>
                                <br />
                                <span className='item-price'>$180</span>
                                <del className='discount'>200<br/>10%off</del>
                                    <p className='product'>GN Missile Pod</p>
                            </div>
                                        
                            <Link className='seeMore' to='/'>See More(<font color="red">1</font>)</Link>
                                        
                        </div>
                                    
                                    
                        <div className='comment-section'>
                            <p className='comment-title'>Comment</p>
                            <image className='image6' alt='iamge'/>
                            <p className='comment-area'>No comment yet！</p>
                        </div>
                    </div>
    
                    <div className='big-section'>
                        <div className='article-div'>
                            <p className='article'>Article</p>
                        </div>
                        
                        <div className='big-section-sub'>
                            <div className='big-section-sub-image'>
                                <image className='image7' alt='image'/>
                            </div>
                            <div className='big-section-sub-title'>
                                <p className='big-section-title-p'><strong>Zabanya Gundam...</strong></p>
                                <p>Even if alienated by the world, I will continue to fight until punishment comes... </p>
                            </div>
                            <div className='big-section-sub-detail'>
                                <button className='button-detail'>See detail</button>
                            </div>
                        </div>
                        
                        <div className='big-section-sub'>
                            <div className='big-section-sub-image'>
                                <image className='image8' alt='image'/>
                            </div>
                            <div className='big-section-sub-title'>
                                <p className='big-section-title-p'><strong>Trans-Am System</strong></p>
                                <p>The movement speed, defense and combat effectiveness will be improved</p>
                            </div>
                            <div className='big-section-sub-detail'>
                                <button className='button-detail'>See detail</button>
                            </div>
                        </div>
                        <a href="./login.html" id="articles" className='big-section-see-more'>See More</a>
                    </div>
                            
                    <div className='work-div'>
                        <p className='work-div-p'>Recent work</p>        
                    </div>
                    <div className='big-section-list-div'>
                        <div className='big-section-list-div-div'>
                            <div className='big-section-list-div-div-item'>
                                <image className='big-section-list-div-div-item-img' alt='image'/>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                
                                <p className='big-section-list-div-div-item-price'>$200</p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item'>
                            <image className='big-section-list-div-div-item-img' alt='image'/>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                
                                <p className='big-section-list-div-div-item-price'>$200</p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item'>
                            <image className='big-section-list-div-div-item-img' alt='image'/>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                
                                <p className='big-section-list-div-div-item-price'>$200</p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                        </div>                   
                    </div> 
                </div>
            </div>
        </div>
        )
        
//    })
}
export default PersonHome