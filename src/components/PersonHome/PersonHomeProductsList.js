import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react'
 
const PersonHomeProductsList = (props)=>{

    const {content, productID, imgID, time, title, userID} = props.products
    return(
        <div className='big-section-list-div'>
                        <div className='big-section-list-div-div'>
                            <div className='big-section-list-div-div-item' id = 'product'>
                                <div className='img-holder'>
                                    <img src={imgID} alt='user' id='product-img-id' className='product-img'/>
                                </div>
                                <p className='big-section-list-div-div-item-title' id = 'product_title'>{title}</p>
                                
                                <p className='big-section-list-div-div-item-price' id = 'product_des'>{content}</p>
                                <dl className='big-section-list-div-div-item-rating'>Rate：90%</dl>
                                <dl className='big-section-list-div-div-item-sold'>Sold：1</dl>
                            </div>
                            
                        </div>                   
                    </div> 
    )
}
export default PersonHomeProductsList


