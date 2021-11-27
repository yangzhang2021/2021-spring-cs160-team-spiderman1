import React from 'react'
import {Link} from 'react-router-dom'
const Item =(props)=>{

    const {title, productimg, userimg, name, price} = props.search
    return(
        <div className='top-section section'>
            
            <div className='container'>
                <div className='item'>
                    <div className='box'>
                    <Link className='link product-title' to='/'>{title}</Link>
                    <div className='product-img-containter'>
                        <img className='product-img' src={productimg} alt='product-img'/>
                    </div>
                    <div className='subbox'>
                        <div className='user-img-container'>
                            <img className='user-img' src={userimg} alt='user-img'/>
                        </div>
                        <Link className='link user-name' to='/'>{name}</Link>
                        <div className='cost'>{price}</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Item