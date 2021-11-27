// import '../pages/Discoverlist/Discoverlist.css'
import './SearchList.css'
import Item from '../pages/Item/Item'

const SearchList =(props)=>{
    console.log(props)

    const renderContactlist = props.search.map((search)=>{
        return (
            <Item search={search}></Item>
        )
    })
    return(
        <>
        <div className='section-title'>
        <p>All Products</p>
        </div>
        <div classNames='list' style={{display: 'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr)', marginLeft:'25px'}}>
            {renderContactlist}
        </div>
        </>
    )
}
export default SearchList