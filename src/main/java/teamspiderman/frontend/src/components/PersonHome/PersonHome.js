import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './PersonHome.css' 
import {NavLink} from 'react-router-dom'
import Item from '../pages/Item/Item'

import profileImg from '../../img/defaultUserImg.JPG'
import productImg from '../../img/defaultproductimg.JPG'
import PersonHomeProductsList from './PersonHomeProductsList';



function PersonHome(){
    
    console.log(window.location.href.indexOf("#reloaded"))
    if(window.location.href.indexOf("#reloaded")==-1){
        window.location.href=window.location.href+"#reloaded"
        window.location.reload()
    }
    
    var userInfo = JSON.parse(localStorage.getItem('userInfo'))

    if(userInfo["signin"] ===true){

        console.log("userInfo = ", userInfo)
        //const [ReturnData, setReturnData] = useState([])

        axios.get(`http://localhost:8080/api/v1/iList/${userInfo["userID"]}/iLists`)
        .then(res=>{ 
            console.log(res)
            localStorage.setItem('iLists', JSON.stringify(res.data))
        })
        
        var iLists = JSON.parse(localStorage.getItem('iLists'))
        console.log(iLists)

        const renderProductlist = iLists.map((iLists)=>{
            console.log(iLists)
            return (
                <PersonHomeProductsList products={iLists}></PersonHomeProductsList>
            )
        })
    

        //var email_divID= document.getElementById("email");
        //email_divID.innerHTML+='<p>'+userInfo['email']+'</p>'

       // var name_divID= document.getElementById("name");
        //name_divID.innerHTML+='<p>'+userInfo['firstName'] + userInfo['lastName']+'</p>'

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
                            {/* <span className='vertical-bar'>|</span>
                            <NavLink className='nav-title' activeStyle={{color:'#0077b6'}} extact to ='/signup'>Sold</NavLink> */}
                            
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
                        
                            <div className='right-side-section-div-home' id='contatct'>
                                <p className='right-side-section-p' >Contact</p>
                                <p className='right-side-section-p2-home'  id='name'>Name:{userInfo['firstName'] + userInfo['lastName']}</p>
                                <p className='right-side-section-p2-home'  id='email'>Email:{userInfo['email']}</p>
                            </div>
                            <div className='right-side-section-div-home'>
                                <p className='right-side-section-p'>experiences</p>
                                <p className='right-side-section-p2-home'>Email:</p>
                                
                            </div>      
                            <div className='comment-section'>
                                <p className='comment-title'>Comment</p>
                                <image className='image6' alt='iamge'/>
                                <p className='comment-area'>No comment yet！</p>
                            </div>
                          
                        </div>
                            


                    <div className='work-div-home'>
                        <p className='work-div-p-home'>My Products</p>
                        <div classNames='product_list' style={
                            {display: 'grid', 
                            gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr)', 
                            marginLeft:'0px'}}>
                            {renderProductlist}
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
    }
    else{
        var url = '../../Signin' 
        window.location.href =url
        return null
    }
    

}


export default PersonHome

