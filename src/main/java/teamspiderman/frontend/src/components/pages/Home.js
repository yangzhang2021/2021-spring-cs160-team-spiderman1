import React from 'react';
import SearchList from '../Navbar/SearchList';
import userimg from '../../img/defaultUserImg.JPG'
import productimg from '../../img/defaultproductimg.JPG'
import DiscoverList from './Discoverlist/Discoverlist';
function Home() {

  // const products_list =[
  //   {
  //     id:'1',
  //     'name':'lily',
  //     'title':'title-winterwwwwwwwwwwwww',
  //     'userimg':`${userimg}`,
  //     'productimg':`${productimg}`,
  //     'price':'$100'
  //   },
  //   {
  //     id:'2',
  //     'name':'amy',
  //     'title':'title-spring',
  //     'userimg':`${userimg}`,
  //     'productimg':`${productimg}`,
  //     'price':'$100'
  //   },
  //   {
  //     id:'3',
  //     'name':'mike',
  //     'title':'title-summer',
  //     'userimg':`${userimg}`,
  //     'productimg':`${productimg}`,
  //     'price':'$100'
  //   },
  //   {
  //     id:'4',
  //     'name':'jason',
  //     'title':'title-winter',
  //     'userimg':`${userimg}`,
  //     'productimg':`${productimg}`,
  //     'price':'$100'
  //   },
    
  // ];

  const LOCAL_STORAGE = "products"
  const [products_list, setProducts] = useState([]);
  const addProductHandler = (product)=>{
    console.log(product)
    setProducts([...products_list, product])
  }

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE))
    if(retriveProducts) setProducts(retriveProducts)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(products_list))
  }, [products_list])


    return (
    // <div style={{marginTop: '150px'}}>
      <Router>
        <Switch>
          <Route path='/' exact component={() => (<SearchList  products={products_list} />)} />
          <Route path='/addproduct'  component={() => (<AddProduct addProductHandler={addProductHandler} />)} />
          {/* <AddProduct addProductHandler={addProductHandler} />
          <SearchList products={products_list} /> */}
          {/* <DiscoverList search={search}/> */}
        </Switch>
        
      </Router>
    // </div>
  );
}

export default Home;