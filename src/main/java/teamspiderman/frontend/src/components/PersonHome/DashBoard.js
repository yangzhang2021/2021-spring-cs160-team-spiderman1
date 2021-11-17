import axios from 'axios';
import React, { Component } from 'react';
import './DashBoard.css' 
import {Link} from 'react-router-dom'
import './../../App.css'
import defaultUserImg from '../../img/defaultUserImg.JPG'
import {MdOutlineFileUpload} from 'react-icons/md'


export default class PersonHome extends Component{

    // state ={}
    // componentDidMount(){
    //     axios.get('http://localhost:8080/api/v1/user' ) // user personal page
    //     .then(res =>{
    //         this.setState({
    //             user:res.data
    //         })
    //     }).catch(err =>{
    //         console.log(err)
    //     })
    // }

    // if(this.props.user){
    //     return (<h1>hi {this.props.user.firstName}</h1>)
    // }
    state = {
        profileImg :defaultUserImg
    }

     imageHandler=(e)=>{
        console.log(e.target.files[0])
        const reader = new FileReader()
        reader.onload=()=>{
            if(reader.readyState===2){
                this.setState({profileImg:reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])//[0] file details
    }

    imageUploadHandler=()=>{
        const fd = new FormData()
        fd.append('image', this.state.profileImg, this.state.profileImg.name)
        axios.post('http://localhost:8080/api/v1/user/profile', fd) // path to get user image
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        const {profileImg} = this.state
    return(
        <div className="cont-main">
            <div className="server-tab" >
                <div className='server-tab-sub'>
                    <div className ='server-tab-sub-sub'>
                        <div className='server-tab-sub-sub-sub'>
                            <div className='span-sub'>
                                <span className='credit'></span>
                                <span className='high'></span>
                            </div>
                        </div>
                            
                         <div className='server-tab-sub-sub-sub'>
                            <div className='span-sub'>
                                <span className='test'></span>
                                <image className='image1' alt='image'/>	
                            </div>
                        </div>
                            
                        <div className='server-tab-sub-sub-sub'>
                            <div className='span-sub'>
                                <span className='service'></span>
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
                        <p className='iblog'>Dashboard</p>

                        <div className='right-side-section-div'>
                            <p className='right-side-section-name'>user name</p>
                            <div className='img-holder'>
                                <img src={profileImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                            </div>
                            <input type='file' name='image-upload' id='input' accept='image/*' onChange={this.imageHandler}/>
                            <div className='label'>
                                <label htmlFor='input' className='image-upload'>
                                    <div className='upload-icon'> <MdOutlineFileUpload /></div>
                                    <p>Choose your photo</p>
                                </label>
                                <button className='button-upload-image' onClick={this.imageUploadHandler}>Upload</button>
                            </div>
                            <p className='right-side-user-p2'></p>
                        </div>
                    
                        <div className='right-side-section-div'>
                            <p className='right-side-section-p'>Contact</p>
                            <p className='right-side-section-p2'>Phone: XXX-XXX-XXXX<br/><br/>
                            Email: emailg@gmail.com</p>
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
                            <p className='big-section-title-p'><strong>title...</strong></p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.... </p>
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
                            <p className='big-section-title-p'><strong>title</strong></p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
                            <p className='big-section-list-div-div-item-title'>product</p>
                            
                            <p className='big-section-list-div-div-item-price'>$200</p>
                            <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                            <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                        </div>
                        
                        <div className='big-section-list-div-div-item'>
                        <image className='big-section-list-div-div-item-img' alt='image'/>
                            <p className='big-section-list-div-div-item-title'>product</p>
                            
                            <p className='big-section-list-div-div-item-price'>$200</p>
                            <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                            <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                        </div>
                        
                        <div className='big-section-list-div-div-item'>
                        <image className='big-section-list-div-div-item-img' alt='image'/>
                            <p className='big-section-list-div-div-item-title'>product</p>
                            
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
    }    
}
