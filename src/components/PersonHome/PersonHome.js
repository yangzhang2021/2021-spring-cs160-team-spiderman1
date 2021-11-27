import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './PersonHome.css' 
import {NavLink} from 'react-router-dom'

import profileImg from '../../img/defaultUserImg.JPG'
import productImg from '../../img/defaultproductimg.JPG'



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
                            
                            <div className='line-divide'></div>
                            <div className='nav-bar'>
                            <NavLink  className='nav-title' activeStyle={{color:'#0077b6'}} exact to ='/'>Intangable</NavLink>
                            <span className='vertical-bar'>|</span>
                            <NavLink className='nav-title' activeStyle={{color:'#0077b6'}} exact to ='/personhome'>My Homepage</NavLink>
                            <span className='vertical-bar'>|</span>
                            <NavLink className='nav-title' activeStyle={{color:'#0077b6'}} extact to ='/signin'>My Products</NavLink>
                            <span className='vertical-bar'>|</span>
                            <NavLink className='nav-title' activeStyle={{color:'#0077b6'}} extact to ='/signup'>Sold</NavLink>
                            
                            </div>
                        </div>	
                     

                        <div className='right-side'>
                            <p className='iblog'>iBlog</p>
                            <NavLink to='/edit' className='toEdit'>Edit my homepage -&gt;</NavLink>
                            <div className='right-side-section-div'>
                                <p className='right-side-section-p username'>Lockon Stratos</p>
                                <div className='img-holder'>
                                    <img src={profileImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                {/* <image src={`http://localhost:8080/api/v1/user-profile/${userProfile}/image/download`} /> */}
                                <p className='right-side-user-p2'>Welcome to my homepage</p>
                            </div>
                        
                            <div className='right-side-section-div-home'>
                                <p className='right-side-section-p'>Contact</p>
                                <p className='right-side-section-p2-home'>Phone: XXX-XXX-XXXX<br/><br/>
                                Email: Celestial_Being@gmail.com</p>
                            </div>
                            <div className='right-side-section-div-home'>
                                <p className='right-side-section-p'>experiences</p>
                                <p className='right-side-section-p2-home'>Phone: XXX-XXX-XXXX<br/><br/>
                                Email: Celestial_Being@gmail.com</p>
                            </div>      
                            <div className='comment-section'>
                                <p className='comment-title'>Comment</p>
                                <image className='image6' alt='iamge'/>
                                <p className='comment-area'>No comment yet！</p>
                            </div>
                          
                        </div>
                            
                    <div className='work-div-home'>
                        <p className='work-div-p-home'>My Products</p>        
                    </div>
                    <div className='big-section-list-div'>
                        <div className='big-section-list-div-div'>
                            <div className='big-section-list-div-div-item'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                
                                <p className='big-section-list-div-div-item-price'>$200</p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                
                                <p className='big-section-list-div-div-item-price'>$200</p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                
                                <p className='big-section-list-div-div-item-price'>$200</p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                        </div>                   
                    </div> 

                    <div className='work-div-home'>
                        <p className='work-div-p-home'>Sold</p>        
                    </div>
                    <div className='big-section-list-div'>
                        <div className='big-section-list-div-div'>
                            <div className='big-section-list-div-div-item'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                <span className='item-price'>$180</span>
                                <del className='discount'>$200<br/>10%off</del>
                            </div>
                            
                            <div className='big-section-list-div-div-item'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                <span className='item-price'>$180</span>
                                <del className='discount'>$200<br/>10%off</del>
                            </div>
                            
                            <div className='big-section-list-div-div-item'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title'>GN Holster Bit</p>
                                <span className='item-price'>$180</span>
                                <del className='discount'>$200<br/>10%off</del>
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