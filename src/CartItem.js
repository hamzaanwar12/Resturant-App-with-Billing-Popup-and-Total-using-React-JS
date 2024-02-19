import { useContext, useState } from "react"
import "./CartItem.css"
import { FoodContext, CartContext } from "./App"

const Item = (props) => {
    let [quantity, setQuantity] = useState(props.quantity);
    const { items, setItems } = useContext(FoodContext)
    const { cart, setCart } = useContext(CartContext)
    // setCart([])
    /*
    
    const handleQuantity = (event,itemsArray,setItemsArray)=>
        {
            const modifiedItems = []
            for(let i=0;i<itemsArray.length;++i)
            { 
                if(itemsArray[i].index == props.index)
                {
                    console.log("Found Matching Key" + props.index)
                    modifiedItems[i] = {...itemsArray[i],quantity:parseInt(event.target.value>=0?event.target.value:0)}
                }
                else
                modifiedItems[i] = itemsArray[i]
            }
            console.log("modifiedItems")
            setItemsArray(modifiedItems)
            console.table(itemsArray)
            console.table(modifiedItems)
        }
    */
    const HandleQuantity = (event) => {
        const modifiedItems = []

        if (parseInt(event.target.value) >= 0)
            setQuantity(event.target.value);

        console.log("Touched Item is :" + props.index)
        for (let i = 0; i < items.length; ++i) 
        {
            if (i == props.index)
            {
                console.log("Found Matching Key" + props.index)
                modifiedItems[i] = { ...items[i], quantity: parseInt(event.target.value >= 0 ? event.target.value : 0) }
            }
            else
                modifiedItems[i] = items[i]
        }
        setItems(modifiedItems)
        console.table("items")
        console.table(modifiedItems)
    }
    const checkPresence = () => {
        for (let i = 0; i < cart.length; ++i) {
            if (cart[i].id == props.index) {
                console.log("Item Found : " + i + " " + cart[i])
                return true;
            }
        }
        return false;
    }


    const addQuantitytoCart = (event) => {
        event.preventDefault();
    
        if (cart.length === 0) {
            setCart([items[props.index]]);
        } else if (checkPresence()) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === props.index ? { ...item, quantity } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...items[props.index], quantity }]);
        }
    };
    

    /*
    const addQuantitytoCart = (event) => {
        event.preventDefault();
        
        let modifiedItems = []    
        if(cart.length == 0)
            setCart(items[props.index])
        else if(checkPresence())
        {
            
            for(let i=0;i<cart.length;++i)
            {
                if(cart[i].name == props.name)
                {
                    setQuantity(quantity+1)
                        console.log ("Found Matching Key" + props.id)
                        modifiedItems[i] = {...cart[i], quantity:parseInt(quantity)}
                }
                else
                    modifiedItems[i] = cart[i]
            }
            setCart(modifiedItems)
            console.log("modifiedItems")
            console.table(modifiedItems)
        }
        else
            setCart([...cart,items[props.index]])        
    };
    */
    
return (
    
    <div className="item" >
        <div className="itemName">
            <h3 className="name">{props.name}</h3>
            <h4>{props.detail}</h4>
            <h3 className="price" >${props.price}</h3>
        </div>
        <div className="amount">
            <div className="quantity">
                <h3>Amount</h3>
                <input type="number" value={quantity} onChange={HandleQuantity} />
            </div>
            <button onClick={addQuantitytoCart}>+Add</button>
        </div>
    </div>
)}


export default Item