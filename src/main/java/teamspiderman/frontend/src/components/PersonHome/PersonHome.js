import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './DashBoard.css' 
import {Link} from 'react-router-dom'

import userImg from '../../img/userImg.jpg'


function PersonHome(){
    var userInfo

    const [ReturnData, setReturnData] = useState([])
    

    useEffect(() => {
        userInfo = JSON.parse(localStorage.getItem('userInfo'))
        console.log("userInfo=", userInfo)
        if(userInfo["signin"] ===true){
            axios.get(`http://localhost:8080/api/v1/iBlog/${userInfo["userID"]}/iBlogs`)
            .then(res=>{ 
                console.log(res)
                localStorage.setItem('iBlogs', JSON.stringify(res.data))
            })

            axios.get(`http://localhost:8080/api/v1/iList/${userInfo["userID"]}/iLists`)
            .then(res=>{ 
                console.log(res)
                localStorage.setItem('iLists', JSON.stringify(res.data))
            })
            var iBlogs = JSON.parse(localStorage.getItem('iBlogs'))
            var iLists = JSON.parse(localStorage.getItem('iLists'))

            var email_divID= document.getElementById("email");
            email_divID.innerHTML+='<p>'+userInfo['email']+'</p>'
            var article1_divID= document.getElementById("article1");
            var article2_divID= document.getElementById("article2");
            if(iBlogs.length>=2){
                
                var article_title1_ID = document.getElementById("article_title1");
                article_title1_ID.innerHTML+='<p>'+iBlogs[0]['title']+'</p>'

                var article_des1_ID = document.getElementById("article_des1");
                if(iBlogs[0]['content'].length>100){
                    article_des1_ID.innerHTML+='<p>'+iBlogs[0]['content'].substring(0,100)+'  ...'+'</p>'
                }
                else{article_des1_ID.innerHTML+='<p>'+iBlogs[0]['content']+'</p>'}

                var article_title2_ID = document.getElementById("article_title2");
                article_title2_ID.innerHTML+='<p>'+iBlogs[1]['title']+'</p>'

                var article_des2_ID = document.getElementById("article_des2");
                if(iBlogs[1]['content'].length>100){
                    article_des2_ID.innerHTML+='<p>'+iBlogs[1]['content'].substring(0,100)+'  ...'+'</p>'
                }
                else{article_des2_ID.innerHTML+='<p>'+iBlogs[1]['content']+'</p>'}

            }else if(iBlogs.length==1){
                var article_title1_ID = document.getElementById("article_title1");
                article_title1_ID.innerHTML+='<p>'+iBlogs[0]['title']+'</p>'

                var article_des1_ID = document.getElementById("article_des1");
                if(iBlogs[0]['content'].length>100){
                    article_des1_ID.innerHTML+='<p>'+iBlogs[0]['content'].substring(0,100)+'  ...'+'</p>'
                }
                else{article_des1_ID.innerHTML+='<p>'+iBlogs[0]['content']+'</p>'}
                

                article2_divID.style.display = 'none'
            }else{
            //article1_divID.style.visibility = 'hidden'
            //article2_divID.style.visibility = 'hidden'
                article1_divID.style.display = 'none'
                article2_divID.style.display = 'none'
            }
       
            var item1_divID= document.getElementById("item1");
            var item2_divID= document.getElementById("item2");
            var item3_divID= document.getElementById("item3");
            if(iLists.length>=3){


            }else if(iLists.length==2){

            }else if(iLists.length==1){

            }else{
            
                item1_divID.style.display = 'none'
                item2_divID.style.display = 'none'
                item3_divID.style.display = 'none'
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
                        
                            <div className='right-side-section-div'  id='contatct'>
                                <p className='right-side-section-p'>Contact</p>
                                <p className='right-side-section-p2' id='email'>Email:</p>
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
    
                    
                    <div className='big-section' id="article_section">
                        <div className='article-div'>
                            <p className='article'>Article</p>
                        </div>
                   
                        <div className='big-section-sub' id='article1'>
                            <div className='big-section-sub-image'>
                                <image className='image7' alt='image'/>
                            </div>
                            <div className='big-section-sub-title'>
                                <p className='big-section-title-p'  id='article_title1'><strong></strong></p>
                                <p id='article_des1'></p>
                            </div>
                            <div className='big-section-sub-detail'>
                                <button className='button-detail'>See detail</button>
                            </div>
                        </div>
                        
                        <div className='big-section-sub' id='article2'>
                            <div className='big-section-sub-image'>
                                <image className='image8' alt='image'/>
                            </div>
                            <div className='big-section-sub-title'>
                                <p className='big-section-title-p' id='article_title2'><strong></strong></p>
                                <p id='article_des2'></p>
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
                        <div className='big-section-list-div-div-item' id='item1'>
                            <image className='big-section-list-div-div-item-img' alt='image'/>
                                <p className='big-section-list-div-div-item-title' id='item_title1'>GN Holster Bit</p>
                                <p className='big-section-list-div-div-item-price' id="item_price1">$200</p>
                                <dl className='big-section-list-div-div-item-rating' id="item_rating1">Rate：90%</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item' id='item2'>
                            <image className='big-section-list-div-div-item-img' alt='image'/>
                                <p className='big-section-list-div-div-item-title' id='item_title2'>GN Holster Bit</p>
                                <p className='big-section-list-div-div-item-price' id="item_price2">$200</p>
                                <dl className='big-section-list-div-div-item-rating' id="item_rating2">Rate：90%</dl>
                            </div>
                            
                            <div className='big-section-list-div-div-item' id='item3'>
                            <image className='big-section-list-div-div-item-img' alt='image'/>
                                <p className='big-section-list-div-div-item-title' id='item_title3'>GN Holster Bit</p>
                                <p className='big-section-list-div-div-item-price' id="item_price3">$200</p>
                                <dl className='big-section-list-div-div-item-rating' id="item_rating3">Rate：90%</dl>
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