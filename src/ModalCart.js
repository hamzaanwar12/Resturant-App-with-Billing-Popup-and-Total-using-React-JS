import "./ModalCart.css"
import { CartContext } from "./App";
import {useEffect, useContext,useState} from "react";
import ModalCartItem from "./ModalCartItem"

const ModalCart = (props) => {
            
    // const [active,setActive] = useState("active")    
    
    let { cart,setCart } = useContext(CartContext);
    
    const handleCloseModal = ()=>
    {
        // setActive("")
        props.closeModel()
    }
    const handleOrder = ()=>console.log("Ordering")
    const removeItem = (id)=>
    {
        if(cart.length == 1 && cart[0].id === id)
            setCart([])
        else
        {
            let newModalItems = cart.filter(element => element.id!== id)
            setCart(newModalItems)
        }
    }


    
    let cartItems;
    if (cart.length === 0)
        cartItems = <h2>Nothing is there to Eat</h2>
    else {
        cartItems = Array.from(cart).map(element => 
                                            <ModalCartItem
                                            key={element.id}
                                            id = {element.id}
                                            name={element.name}
                                            price={element.price}
                                            quantity={element.quantity}
                                            itemRemover = {removeItem}
                                            />)


        console.log("cartItems")
        console.log(cartItems)
    }


    let totalPrice = 0
    for(let i = 0;i<cart.length;++i)
        totalPrice += cart[i].price * cart[i].quantity
    // const[totalPrice,setTotalPrice] = useState(AddTotalPrice)

/*
    useEffect(()=>
    {
    */

    return (

        <div className="Modal">
            {/* <div className={"ModalItems " + {active}}> */}
            <div className={"ModalItems "}>
                {cartItems}
                {
                    cartItems.length &&
                    <div className="bill">
                        <h2>Total Price : ${totalPrice.toFixed(2)}</h2>
                        <div className="Modalbutton">
                            <button onClick = {handleOrder}>Order</button>
                            <button onClick={handleCloseModal}>Cancel</button>
                        </div>
                    </div>
                }
                
                {
                !cartItems.length &&
                <div className="Modalbutton">
                    <button clas onClick={handleCloseModal}>Cancel</button>
                </div> 
                }
            </div>
        </div>
        // ,document.getElementById("ModalRoot"))

    )
}

export default ModalCart