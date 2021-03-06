import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar';
import {uuid} from 'uuidv4'
import Signup from './components/pages/Signup/Signup'
import Signin from './components/pages/Signin/Signin'
import PersonHome from './components/PersonHome/PersonHome'
import Edit from'./components/PersonHome/Edit'
import axios from 'axios';
import SearchList from './components/Navbar/SearchList'


axios.defaults.headers.common['Authorization'] =  'Bearer' + localStorage.getItem('token')
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'

function App () {

  const LOCAL_STORAGE = "products";   
  const [products_list, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] =  useState([]);
 
  // retrive product
    const retriveProducts = async() =>{
      // const response = await api.get("/products");
      // console.log(response)
      // return response.data

      console.log("try to get products2")
      const res = await axios.get(`http://localhost:8080/api/v1/iList/all`)
      console.log("res", res)
      return res.data
    }
 
  // const addProductHandler = async (product) => {
  //   console.log(product)
  //   const request ={
  //     id:uuid(), // no id
  //     ...product
  //   }
  //   const response = await api.post("/products", request)
  //   console.log(response)
  //   setProducts([...products_list, response.data]);
  // };
 
  const searchHandler = (search) =>{
   setSearch(search)
   if(search !==""){
     const newProductList = products_list.filter((product)=>{
       return Object.values(product).join(" ").toLowerCase().includes(search.toLowerCase());
     })
     setSearchResults(newProductList);
   }
   else{
     setSearchResults(products_list);
   }
 }
  useEffect(() => {
    
   const getAllProducts = async () =>{
     const allProducts = await retriveProducts();
     if(allProducts) setProducts(allProducts)
   }
   getAllProducts();
  }, [])
 
 
  useEffect(() => {
   //  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(products_list))
  }, [products_list])
 
 
     return (
       <>
         <Router>
           <Switch>
             <Route path='/personhome/' extact component={PersonHome}/>
             
             <Route path='/edit' 
             render={(props) => (
               <Edit 
              //  {...props}
              //  addProductHandler={addProductHandler}
               />
             )} />
             <div >
               <Navbar />
               <Route exact path='/'
               render={(props) =>(
                 <SearchList 
                 {...props}
                 products={search.length<1 ?  products_list : searchResults}
                 term = {search}
                 searchKeyWord ={searchHandler}
                 />
               )}/>
               
               {/* <Route path='/' exact component={() => (<SearchList  products={products_list} />)} /> */}
               <Route path='/signup' exact component={Signup}/>
               <Route path='/signin' exact component={Signin}/>
             </div>  
           </Switch>
         </Router>
       </>
      );
   
 }
 export default App;