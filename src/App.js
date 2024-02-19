/*
import React, { useState ,useEffect} from "react";
// import Item from "./CartItem"
const FoodContext = React.createContext()
const CartContext = React.createContext()


function App() {

  const [cart, setCart] = useState([]);  
  const [items, setItems] = useState([]);
  const [modalCart,setModalCart] = useState(false);
  const [loading,setLoading] = useState(false)
  const [loadingComplete,setLoadingComplete] = useState(false)

  useEffect(async()=>
  {
    setLoading(true)

    const FetchMeals = async()=>
    {
      const fetchedMeals = await fetch("https://reacthttp-1b170-default-rtdb.firebaseio.com/meals.json")
      const responseMeals  = await fetchedMeals.json()
      console.log(responseMeals)
      
      let meals = []
      for(const key in responseMeals)
      {
        meals.push({
          id:responseMeals[key].id,
          name:responseMeals[key].name,
          detail: responseMeals[key].detail,
          price:responseMeals[key].price,
          quantity: responseMeals[key].quantity,
        })
      }
      setItems(meals)
    }
    await FetchMeals()
    setLoading(false)
    setLoadingComplete(true)

    return (()=>{})
    // setItems(responseMeals)    
  },[])

  const handleCart = ()=>setModalCart(true)
  const handleCartOff = ()=>setModalCart(false)


  return (   
    <>
      {loading && <h1 className="loading">Loading...</h1>}
    </>
  );
}


export default App;
export { FoodContext, CartContext }
*/

import React, { useState ,useEffect} from "react";
import Navbar from "./NavBar"
import AllItems from "./AllItems"
import ModalCart from"./ModalCart";

// import Item from "./CartItem"
const FoodContext = React.createContext()
const CartContext = React.createContext()


function App() {

  const [cart, setCart] = useState([]);  
  const [items, setItems] = useState([]);
  const [modalCart,setModalCart] = useState(false);
  const [loading,setLoading] = useState(false)
  const [loadingComplete,setLoadingComplete] = useState(false)

  /*
  useEffect(async()=>
  {
    setLoading(true)

    const FetchMeals = async()=>
    {
      const fetchedMeals = await fetch("https://reacthttp-1b170-default-rtdb.firebaseio.com/meals.json")
      const responseMeals  = await fetchedMeals.json()
      console.log(responseMeals)
      
      let meals = []
      for(const key in responseMeals)
      {
        meals.push({
          id:responseMeals[key].id,
          name:responseMeals[key].name,
          detail: responseMeals[key].detail,
          price:responseMeals[key].price,
          quantity: responseMeals[key].quantity,
        })
      }
      setItems(meals)
    }
    await FetchMeals()
    setLoading(false)
    setLoadingComplete(true)

    return (()=>{})
    // setItems(responseMeals)    
  },[])
*/
  const handleCart = ()=>setModalCart(true)
  const handleCartOff = ()=>setModalCart(false)


  return (
    // <h1>Fetching Data</h1>
    <>
      {loading && <h1 className="loading">Loading...</h1>}
      
      <FoodContext.Provider value={{ items, setItems }}>
        <Navbar showModel  = {handleCart} itemNumber = {cart.length}/>
        <CartContext.Provider value = {{cart,setCart}}>
          <AllItems/>
          {modalCart && <ModalCart closeModel  = {handleCartOff}/>}
        </CartContext.Provider>
      </FoodContext.Provider>
  
      </>
  );
}


export default App;
export { FoodContext, CartContext }
