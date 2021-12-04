import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
import './PersonHomeProductsList.css'
import productImg from '../../img/defaultproductimg.JPG'
 
const PersonHomeProductsList = (props)=>{

    const {content, id, price, productImageLink, time, title, userID} = props.products
    return(
            
            <div className='big-section-list-div-div'>
                <div className='big-section-list-div-div-item' id = 'product'>
                    <div className='img-holder'>
                            <img src={`http://localhost:8080/api/v1/iList/${userID}/${id}/productImageFile/download`} alt='user' id='product-img-id' className='product-img'/>
                    </div>
                    <p className='big-section-list-div-div-item-title' id = 'product_title'>{title}</p>
                    <p className='big-section-list-div-div-item-title' id = 'product_price'>price: {price}</p>
                    <p className='big-section-list-div-div-item-price' id = 'product_des'>description： {content}</p>
                    <p className='big-section-list-div-div-item-price' id = 'product_upload_time'>time： {time}</p>
                </div>        
            </div>                   
    )
}
export default PersonHomeProductsList


