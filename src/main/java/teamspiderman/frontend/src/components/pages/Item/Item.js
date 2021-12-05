import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'
const Item =(props)=>{

    // TODO, fetch user img and user name of this product
    // TODO. add user homepage when click productname

    const {content, id, price, productImageLink, time, title, userID, userName} = props.product

    return(
        <div className='top-section section'>
            
            <div className='container'>
                <div className='item'>
                    <div className='box'>
                        <Link className='link product-title' to='/'>{title}</Link>
                        <div className='product-img-containter'>
                            <img className='product-img' src={`http://localhost:8080/api/v1/iList/${userID}/${id}/productImageFile/download`} alt='product-img'/>
                        </div>
                        <div className='subbox'>
                            <div className='user-img-container'>
                                <img className='user-img' src={`http://localhost:8080/api/v1/edit_user/${userID}/profileimage/download`} alt='user-img'/>
                            </div>
                            <Link className='link user-name' to='/'>{userName}</Link>
                            <div className='cost'>$ {price}</div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Item