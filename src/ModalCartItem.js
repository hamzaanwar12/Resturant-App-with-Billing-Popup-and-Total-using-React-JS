import "./ModalCartItem.css"
import { useContext, useState } from "react";
import { CartContext } from "./App";
const ModalCartItem = (props) => {
    let [quantity, setQuantity] = useState(props.quantity)
    const { cart, setCart } = useContext(CartContext)

    const modifyQuantitytoCart = () => 
    {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.name === props.name ? { ...item, quantity } : item
            ));
    };

const handleAdd = (event) => {
    event.preventDefault();
    setQuantity((prevQuantity)=>++prevQuantity)
    modifyQuantitytoCart()
}


const handleSubtract = (event) => {
    event.preventDefault();
    if (quantity == 1)
        props.itemRemover(props.id)
    else if (quantity > 1)
        setQuantity(--quantity)
}

return (
    <div className="itemModal" >
        <div className="itemName">
            <h3 className="name">{props.name}</h3>
            <div>
                <h3 className="priceModal">${parseFloat(props.price).toFixed(2)}</h3>
                <h3 className="quantity ">x{quantity}</h3>
            </div>
        </div>
        <div className="buttons">
            <button onClick={handleSubtract} className="ModalButton" disabled={false}>-</button>
            <button onClick={handleAdd} className="ModalButton" disabled={false}>+</button>
        </div>
    </div>
)}
export default ModalCartItem;