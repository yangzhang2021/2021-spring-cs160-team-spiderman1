// import '../pages/Discoverlist/Discoverlist.css'
import './SearchList.css'
import Item from '../pages/Item/Item'
import {FiSearch} from 'react-icons/fi'
import React,{useRef} from 'react'

const SearchList =(props)=>{
    console.log(props)

    const input = useRef("")
    const renderProductlist = props.products.map((iList)=>{
        return (
            <Item product={iList}></Item>
        )
    })
    const getSearch = ()=>{
        props.searchKeyWord(input.current.value)
    }
    return(
        <div className='searchlist-container'>
            <div className='search-input'>
                <input ref ={input} type='text' placeholder='Search products...' className='prompt' value={props.term} onChange={getSearch}/> 
                <div className='button-i' type='submit' name='search' > 
                    <FiSearch />
                </div>
            </div>
            <div className='section-title'>
            <p>All Products</p>
            </div>
            <div classNames='list' style={{display: 'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr)', marginLeft:'25px'}}>
                {renderProductlist.length >0 ?  renderProductlist:"This product is not available"}
            </div>
        </div>
    )
}
export default SearchList