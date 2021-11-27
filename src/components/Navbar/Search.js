
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './Search.css';



function Search (){

    const [search, setSearch] = useState('')
    const handleSearch = e =>{
        e.preventDefault();
        setSearch(e.target.value);
        console.log(search)

    }
    return(
    <form className='search' onSubmit={handleSearch}>
    <div className='search-input'>
      <input type='text' placeholder='Search products...' className='prompt'onChange={e=>setSearch(e.target.value)}/> 
      <div className='button-i' type='submit' name='search' > 
        <FiSearch />
      </div>
    </div>
  </form>
)
}

export default Search;