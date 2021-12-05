// import React from 'react'
// import {MdOutlineFileUpload} from 'react-icons/md'
// import TextareaAutosize from 'react-textarea-autosize'
// import "./AddProduct.css"
// import defaultProductImg from '../../img/defaultproductimg.JPG'
// import defaultUserImg from '../../img/defaultUserImg.JPG'


// class AddProduct extends React.Component {
   
//     state = {
//         profileImg :defaultUserImg,
//         contact:'',
//         username:'',
//         experiences:';',
//         productname:'',
//         productImg: defaultProductImg,
//         price:'',
//         description:''
//     }
 
//       // set data
//       productimageHandler=(e)=>{
//         console.log(e.target.files[0])
//         const reader = new FileReader()
//         reader.onload=()=>{
//             if(reader.readyState===2){
//                 this.setState({productImg:reader.result})
//             }
//         }
//         reader.readAsDataURL(e.target.files[0])//[0] file details
//     }

//     productUploadHandler = (e) =>{
//         e.preventDefault();

//         if(this.state.name === "" || this.state.price ===""){
//             alert("product name and price can not be empty.")
//             return
//         }
//         this.props.addProductHandler(this.state) // state contain all info
//         this.setState({profileImg :defaultUserImg,
//             contact:'',
//             username:'',
//             experiences:';',
//             productname:'',
//             productImg: defaultProductImg,
//             price:'',
//             description:''})
//         console.log(this.state);
//     }
//     render(){
//         const {profileImg, contact, experiences, productname, productImg, price, description} = this.state
//         return(
//             <>
//                 <div className='work-div'>
//                     <p className='work-div-p'>Add a product</p>        
//                 </div>
//                 <form className='product-upload-form' onSubmit={this.productUploadHandler}>
//                     <div className='product-section'>
//                         <input className='product-section-product-name' type='text' id='productname' 
//                         name='productname' placeholder='Enter product name' value={this.state.productname} onChange={(e) => this.setState({productname:e.target.value})}/>
//                         <div className='img-holder'>
//                             <img src={productImg} alt='product' id='user-profile-img' className='user-profile-img'/>
//                         </div>
//                         <input type='file' name='imageupload' id='productimage' accept='image/*' onChange={this.productimageHandler}/>
//                         <div className='label'>
//                             <label htmlFor='productimage' className='image-upload'>
//                                 <div className='upload-icon'> <MdOutlineFileUpload /></div>
//                                 <p>Choose your product photo</p>
//                             </label>
//                         </div>
//                         <input type='text' id='price' name='price' placeholder='enter price' className='price' value={this.state.price} onChange={(e) => this.setState({price:e.target.value})}/>
//                         <TextareaAutosize className='product-description' id='description'
//                                 name='description'
//                                 placeholder='Enter product description'
//                                 value={this.state.description} onChange={(e) => this.setState({description:e.target.value})}
//                             />
//                         <button className='button-upload upload-form' >Upload</button>
//                     </div>                  
//                 </form> 
//            </>
//         )
//     }
// }
// export default AddProduct;