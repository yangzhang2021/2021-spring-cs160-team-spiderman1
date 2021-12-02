import React from 'react';
import SearchList from '../Navbar/SearchList';
import userimg from '../../img/defaultUserImg.JPG'
import productimg from '../../img/defaultproductimg.JPG'
import DiscoverList from './Discoverlist/Discoverlist';
function Home() {

  const products_list =[
    {
      id:'1',
      'name':'lily',
      'title':'title-winterwwwwwwwwwwwww',
      'userimg':`${userimg}`,
      'productimg':`${productimg}`,
      'price':'$100'
    },
    {
      id:'2',
      'name':'amy',
      'title':'title-spring',
      'userimg':`${userimg}`,
      'productimg':`${productimg}`,
      'price':'$100'
    },
    {
      id:'3',
      'name':'mike',
      'title':'title-summer',
      'userimg':`${userimg}`,
      'productimg':`${productimg}`,
      'price':'$100'
    },
    {
      id:'4',
      'name':'jason',
      'title':'title-winter',
      'userimg':`${userimg}`,
      'productimg':`${productimg}`,
      'price':'$100'
    },
    
  ];
  return (
    <>
      <SearchList products={products_list} />
      {/* <DiscoverList search={search}/> */}
    </>
  );
}

export default Home;