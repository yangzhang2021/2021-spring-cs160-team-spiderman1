import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './PersonHome.css' 
import {NavLink} from 'react-router-dom'

import profileImg from '../../img/defaultUserImg.JPG'
import productImg from '../../img/defaultproductimg.JPG'



function PersonHome(){
    var userInfo
    const [ReturnData, setReturnData] = useState([])
    useEffect(() => {
        userInfo = JSON.parse(localStorage.getItem('userInfo'))
        console.log("userInfo=", userInfo)
        if(userInfo["signin"] ===true){
            // axios.get(`http://localhost:8080/api/v1/iBlog/${userInfo["userID"]}/iBlogs`)
            // .then(res=>{ 
            //     console.log(res)
            //     localStorage.setItem('iBlogs', JSON.stringify(res.data))
            // })

            axios.get(`http://localhost:8080/api/v1/iList/${userInfo["userID"]}/iLists`)
            .then(res=>{ 
                console.log(res)
                localStorage.setItem('iLists', JSON.stringify(res.data))
            })
            //var iBlogs = JSON.parse(localStorage.getItem('iBlogs'))

            var iLists = JSON.parse(localStorage.getItem('iLists'))

            var email_divID= document.getElementById("email");
            email_divID.innerHTML+='<p>'+userInfo['email']+'</p>'

            var name_divID= document.getElementById("name");
            name_divID.innerHTML+='<p>'+userInfo['firstName'] + userInfo['lastName']+'</p>'
            //var article1_divID= document.getElementById("article1");
            //var article2_divID= document.getElementById("article2");
            // if(iBlogs.length>=2){
                
            // }else if(iBlogs.length==1){
    
            // }else{
            // //article1_divID.style.visibility = 'hidden'
            // //article2_divID.style.visibility = 'hidden'   
            // }
       
            var product1_divID= document.getElementById("product1");
            var product2_divID= document.getElementById("product2");
            var product3_divID= document.getElementById("product3");
            if(iLists.length>=3){

                var product_title1_ID = document.getElementById("product_title1");
                var product_title2_ID = document.getElementById("product_title2");
                var product_title3_ID = document.getElementById("product_title3");

                var product_des1_ID = document.getElementById("product_des1");
                var product_des2_ID = document.getElementById("product_des2");
                var product_des3_ID = document.getElementById("product_des3");

                //list 1st item
                product_title1_ID.innerHTML+='<p>'+iLists[0]['title']+'</p>'
                if(iLists[0]['content'].length>100){
                    product_des1_ID.innerHTML+='<p>'+iLists[0]['content'].substring(0,100)+'  ...'+'</p>'
                }
                else{product_des1_ID.innerHTML+='<p>'+iLists[0]['content']+'</p>'}
 
                //list 2nd item
                product_title2_ID.innerHTML+='<p>'+iLists[1]['title']+'</p>'
                if(iLists[1]['content'].length>100){
                    product_des2_ID.innerHTML+='<p>'+iLists[1]['content'].substring(0,100)+'  ...'+'</p>'
                }
                else{product_des2_ID.innerHTML+='<p>'+iLists[1]['content']+'</p>'}

                //list 3rd item
                product_title3_ID.innerHTML+='<p>'+iLists[2]['title']+'</p>'
                if(iLists[1]['content'].length>100){
                    product_des3_ID.innerHTML+='<p>'+iLists[2]['content'].substring(0,100)+'  ...'+'</p>'
                }
                else{product_des3_ID.innerHTML+='<p>'+iLists[2]['content']+'</p>'}

            }else if(iLists.length==2){

                var product_title1_ID = document.getElementById("product_title1");
                var product_title2_ID = document.getElementById("product_title2");

                var product_des1_ID = document.getElementById("product_des1");
                var product_des2_ID = document.getElementById("product_des2");

               //list 1st item
               product_title1_ID.innerHTML+='<p>'+iLists[0]['title']+'</p>'
               if(iLists[0]['content'].length>100){
                   product_des1_ID.innerHTML+='<p>'+iLists[0]['content'].substring(0,100)+'  ...'+'</p>'
               }
               else{product_des1_ID.innerHTML+='<p>'+iLists[0]['content']+'</p>'}

               //list 2nd item
               product_title2_ID.innerHTML+='<p>'+iLists[1]['title']+'</p>'
               if(iLists[1]['content'].length>100){
                   product_des2_ID.innerHTML+='<p>'+iLists[1]['content'].substring(0,100)+'  ...'+'</p>'
               }
               else{product_des2_ID.innerHTML+='<p>'+iLists[1]['content']+'</p>'}
                
                product3_divID.style.display = 'none'

            }else if(iLists.length==1){
                var product_title1_ID = document.getElementById("product_title1");

                var product_des1_ID = document.getElementById("product_des1");
                //list 1st item
                product_title1_ID.innerHTML+='<p>'+iLists[0]['title']+'</p>'
                if(iLists[0]['content'].length>100){
                    product_des1_ID.innerHTML+='<p>'+iLists[0]['content'].substring(0,100)+'  ...'+'</p>'
                }
                else{product_des1_ID.innerHTML+='<p>'+iLists[0]['content']+'</p>'}
                product2_divID.style.display = 'none'
                product3_divID.style.display = 'none'


            }else{
                product1_divID.style.display = 'none'
                product2_divID.style.display = 'none'
                product3_divID.style.display = 'none'
                
            }
        
        }


    }, [])



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
                        
                            <div className='right-side-section-div-home' id='contatct'>
                                <p className='right-side-section-p' >Contact</p>
                                <p className='right-side-section-p2-home'  id='name'>Name:</p>
                                <p className='right-side-section-p2-home'  id='email'>Email:</p>
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
                    </div>
                    <div className='big-section-list-div'>
                        <div className='big-section-list-div-div'>
                            <div className='big-section-list-div-div-item' id = 'product1'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title' id = 'product_title1'></p>
                                
                                <p className='big-section-list-div-div-item-price' id = 'product_des1'></p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item' id = 'product2'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title' id = 'product_title2'></p>
                                
                                <p className='big-section-list-div-div-item-price' id = 'product_des2'></p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item' id = 'product3'>
                                <div className='img-holder'>
                                    <img src={productImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title' id = 'product_title3'></p>
                                
                                <p className='big-section-list-div-div-item-price' id = 'product_des3'></p>
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