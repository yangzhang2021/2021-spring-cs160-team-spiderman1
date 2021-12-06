import React from 'react'
import {Link} from 'react-router-dom'
import './Item.css'
const Item =(props)=>{

    const {productname, productImg, profileImg, username, price} = props.product

    return(
        <div className='top-section section'>
            
            <div className='container'>
                <div className='item'>
                    <div className='box'>
                        <Link className='link product-title' to='/'>{productname}</Link>
                        <div className='product-img-containter'>
                            <img className='product-img' src={productImg} alt='product-img'/>
                        </div>
                        <div className='subbox'>
                            <div className='user-img-container'>
                                <img className='user-img' src={profileImg} alt='user-img'/>
                            </div>
                            <Link className='link user-name' to='/'>{username}</Link>
                            <div className='cost'>$ {price}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Item