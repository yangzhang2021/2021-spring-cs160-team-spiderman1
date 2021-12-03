import axios from 'axios';
import React from 'react';
import './Edit.css' 
import {NavLink} from 'react-router-dom'
import './../../App.css'
import defaultUserImg from '../../img/defaultUserImg.JPG'
import {MdOutlineFileUpload} from 'react-icons/md'
import TextareaAutosize from 'react-textarea-autosize';
import defaultProductImg from '../../img/defaultproductimg.JPG'
import AddProduct from './AddProduct';

export default class Edit extends React.Component{
    

    state = {
        profileImg :defaultUserImg,
        email:'',
        username:'',
        experiences:';',
        productname:'',
        productImg: defaultProductImg,
        price:'',
        description:''

    }
    

    // set data
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

    productimageHandler=(e)=>{
        console.log(e.target.files[0])
        const reader = new FileReader()
        reader.onload=()=>{
            if(reader.readyState===2){
                this.setState({productImg:reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])//[0] file details
    }
    valueHandler =(e)=>{
        console.log("e.target.value", e.target.value)
        this.setState({
        [e.target.id]: e.target.value
        })
    }

    config = {
        headers:{'content-type':'multipart/form-data'}
    }
    // upload handler
    emailUploadHandler=() =>{    
        var userInfo = JSON.parse(localStorage.getItem('userInfo'))
        const fd = new FormData()
       
        const emailRegExp = RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        if(emailRegExp.test(this.state.email)){

            fd.append('email', this.state.email);
            for(var v of fd.entries()){
                console.log("v ",v)
            }


            console.log("email again ", fd.get('email'))
            axios.put(
                `http://localhost:8080/api/v1/edit_user/edit_email/${userInfo["userID"]}/?email=${fd.get('email')}`

            ) // path to get user image
            .then(res=>{
                console.log(res)
                localStorage.setItem('userInfo', JSON.stringify(res.data))
            }).catch(err=>{
                console.log(err)
            })
        }
        
    }
    

    imageUploadHandler=()=>{
        const fd = new FormData()
        console.log(this.state.profileImg, this.state.profileImg.name)
        fd.append('profileimage', this.state.profileImg, this.state.profileImg.name)
        for(var v of fd.entries()){
            console.log(v)
        }
        const username='user name' // TODO: temp var need to set up later
        axios.post(`http://localhost:8080/api/v1/${username}/profileimage`, fd, this.config) // path to get user image
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

    productUploadHandler = (e) =>{
        e.preventDefault();

        if(this.state.name === "" || this.state.price ===""){
            alert("product name and price can not be empty.")
            return
        }
        this.props.addProductHandler(this.state) // state contain all info
        console.log(this.state);
        this.setState({profileImg :defaultUserImg,
            email:'',
            username:'',
            experiences:';',
            productname:'',
            productImg: defaultProductImg,
            price:'',
            description:''})
        // console.log(this.props)
        this.props.history.push("/")
    }
    render(){
        const {profileImg, email, experiences, productname, productImg, price, description} = this.state

    // return UserProfile.map((UserProfile, index) =>{    
    return(
        <div className="cont-main">
            <div className="server-tab" >
                <div className='server-tab-sub'>
                    <div className ='server-tab-sub-sub'>
                        
                        <div className='nav-bar-edit'>
                            <NavLink  className='nav-title' activeStyle={{color:'#0077b6'}} exact to ='/'>Intangable</NavLink>
                            <span className='vertical-bar'>|</span>
                            <NavLink className='nav-title' activeStyle={{color:'#0077b6'}} exact to ='/personhome'>My Homepage</NavLink>
                            <span className='vertical-bar'>|</span>
                            <NavLink className='nav-title' activeStyle={{color:'#0077b6'}} extact to ='/signin'>My Products</NavLink>
                            <span className='vertical-bar'>|</span>
                        </div>
                    </div>	
                            
                    <div className='right-side'>
                        <p className='iblog'>Edit Profile</p>

                        <div className='right-side-section-div'>
                            <p className='right-side-section-name'>{JSON.parse(localStorage.getItem('userInfo'))['firstName']}</p>
                            <div className='img-holder'>
                                <img src={profileImg} alt='user' id='user-profile-img' className='user-profile-img'/>
                            </div>
                            <input type='file' name='image-upload' id='userimage' accept='image/*' onChange={this.imageHandler}/>
                            <div className='label'>
                                <label htmlFor='userimage' className='image-upload'>
                                    <div className='upload-icon'> <MdOutlineFileUpload /></div>
                                    <p>Choose your photo</p>
                                </label>
                                <button className='button-upload' onClick={this.imageUploadHandler}>Upload</button>
                            </div>
                        </div>
                    
                        <div className='right-side-section-div '>
                            <p className='right-side-section-p'>Contact</p>
                            <TextareaAutosize className='right-side-section-p2' id='email'
                                name='email'
                                placeholder='Enter your email'
                                value={email}
                                onChange={this.valueHandler}
                            />
                            <button className='button-upload' onClick={this.emailUploadHandler}>Upload</button>
                        </div>
                </div>             
                <div className='work-div'>
                    <p className='work-div-p'>Add a product</p>        
                </div>
                <form className='product-upload-form' onSubmit={this.productUploadHandler}>
                    <div className='product-section'>
                        <input className='product-section-product-name' type='text' id='productname' 
                        name='productname' placeholder='Enter product name' value={productname} onChange={this.valueHandler}/>
                        <div className='img-holder'>
                            <img src={productImg} alt='product' id='user-profile-img' className='user-profile-img'/>
                        </div>
                        <input type='file' name='imageupload' id='productimage' accept='image/*' onChange={this.productimageHandler}/>
                        <div className='label'>
                            <label htmlFor='productimage' className='image-upload'>
                                <div className='upload-icon'> <MdOutlineFileUpload /></div>
                                <p>Choose your product photo</p>
                            </label>
                        </div>
                        <input type='text' id='price' name='price' placeholder='enter price' className='price' value={price} onChange={this.valueHandler}/>
                        <TextareaAutosize className='product-description' id='description'
                                name='description'
                                placeholder='Enter product description'
                                value={description}
                                onChange={this.valueHandler}
                            />
                        <button className='button-upload upload-form' >Upload</button>
                    </div>                  
                </form> 
            </div>
        </div>
    </div>
    )
// })  
}    
}
